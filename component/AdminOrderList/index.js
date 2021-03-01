import React,{useState,useEffect} from 'react'
import {Jumbotron} from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';

const AdminOrderList = (props) => {
   
    const [List,setList] =   useState([]);
    const [length ,setLength] = useState();

    const updateHandler = (userid)=>{
     
        localStorage.setItem('userId',JSON.stringify(userid));
        props.history.push('/admin/updateorder')
        }
        
     const orderdetailHandler = (userid)=>{
          localStorage.setItem('userId',JSON.stringify(userid));
          props.history.push('/admin/orderdetail')
           }



    useEffect(()=>{
      fetch("https://secret-reaches-34188.herokuapp.com/api/user/getallorder",{ 
       //fetch("http://localhost:3005/user/getallorder",{
         method:"GET",
        
         headers:{
             "content-Type":"application/json",
            
         }
     }).then((r)=>{
         r.json().then((result)=>{
             setList(result.order);
               setLength(result.order.length)
           
            
         })
     })
     })  ;

     function deleteHandler(id){
      fetch("https://secret-reaches-34188.herokuapp.com/api/user/deleteorder" + id,{ 
        
          method:"DELETE",
        
          headers:{
              "content-Type":"application/json",
             
          }
         }).then((r)=>{
           r.json().then((result)=>{
              console.log('order deleted');
           })
         })

     }
  


  return(
    <div id = "adminorderlist">
    
    
   { length>0?
    
  //  { 
      List.map((list,idx)=>{
      return(

           <div id="cardstock" >
        
         {/* <AdminCardorder item={list.item} quantity={list.quantity}  id = {list.userid} deleteHandler={deleteHandler} orderid={list._id} /> */}
     
         <Card className="card_bkgroundimg" style={{ width: '18rem',margin:"auto"}}>
    
    <Card.Body>
      <Card.Title>{list.item}</Card.Title>
      <Card.Text>
      {`quantity : ${list.quantity}`}
      </Card.Text>
    </Card.Body>
  
    <Card.Body>
    
    <Button  onClick={()=>{updateHandler(list.userid)}}   variant="transparent"  type="button">
    Update order
  </Button>
  <Button   onClick={()=>{orderdetailHandler(list.userid)}}  variant="transparent" type="button">
    See orderdetail
  </Button>


   <Button   onClick={()=>{deleteHandler(list._id)}} variant="transparent" type="button">
    Delete Order
  </Button> 
   </Card.Body>
  </Card>


      </div>
      )
   }
    )
// }


 :

 <Jumbotron style={{margin:'auto',background:'transparent', color: "whitesmoke", height:'100px'}} className="text-center">
  <h1>No Any Order </h1>
  </Jumbotron>
   
   }

     </div>
   )

 }

export default AdminOrderList