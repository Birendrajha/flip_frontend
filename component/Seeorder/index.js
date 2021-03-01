import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Jumbotron} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

const Seeorder = (props) => {

    const id = props.match.params.userid;
    const [orders,setOrder] = useState([]);
    const [length,setLength] = useState()

    useEffect(()=>{
       // fetch('http://localhost:3005/user/getallorder/' + id,{
        fetch("https://secret-reaches-34188.herokuapp.com/api/user/getallorder/" + id,{ 
          method:"GET",
          
          headers:{
              "content-Type":"application/json",
             
          },
      }).then((resp)=>{
        resp.json().then((result)=>{
          setOrder(result.order);
          setLength(result.order.length)
      })
      })
    
       })
    
     

      function updateorder(userid){
        localStorage.setItem('userId',JSON.stringify(userid));
        props.history.push('/admin/updateorder')
      } 


  return(
   length>0?
   <div id = "userlist">
   <Table striped bordered hover>
   <thead>
   <tr>
    <th>Userid</th>
    <th>Item</th>
    <th>Quantity</th>
    <th>Orderid</th>
   
   
  </tr>
</thead>
<tbody>
{ orders.map((order,idx)=>{
      return(
    <tr>
      <td>{order.userid}</td>
      <td>{order.item}</td>
      <td>{order.quantity}</td>
      <td>{order._id}</td>
    </tr>
     )

   })
 }
 </tbody>
 </Table>
 <Button  onClick={()=>{updateorder(id)}} style={{margin:"5px",backgroundColor:"#0099cc"}} variant="primary" size="sm" active>Update Order</Button>

 </div> 

   :
   <Jumbotron style={{margin:'auto',color:"#0099cc",background:'transparent',height:'100px',fontFamily:"Proxima Nova", fontWeight:"bold",fontSize:"30px"}} className="text-center">
   <h1>No any Order Placed</h1>
   </Jumbotron>
   )

 }

export default withRouter(Seeorder);