import React,{useState,useEffect} from 'react'
import {Jumbotron} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
/**
* @author
* @function Userorder
**/

const Userorder = (props) => {
 

  const [order,setOrder] =   useState([]);
  // const [quantity,setQuantity] =  useState("");
  // const [userid,setUserid] = useState("");
   const [length,setLength] = useState(0);

useEffect(()=>{
    let data =JSON.parse( localStorage.getItem('data'));
    let token = data.token;
    let tokenf ="token " + token
//fetch("http://localhost:3005/user/getorder",{
  fetch("https://secret-reaches-34188.herokuapp.com/api/user/getorder",{ 
  method:"GET",
 
  headers:{
      "content-Type":"application/json",
      "authorization" : tokenf
  }
}).then((r)=>{
  r.json().then((result)=>{

     if(result.order.length >0){

     
       setOrder(result.order);
      
       setLength(result.order.length);
          
     }else{
          
      setLength(result.order.length);
       
     }
  })
})
},[])

  return(
    <>
         {length > 0 ? 
           <div id ="userorder"> 
      <Jumbotron style={{margin:'0rem',background:'transparent',height:'100px'}} className="text-center">
      <h1>Your Order!! </h1>
      </Jumbotron>
     {order.map((ordr,idx)=>{
       return(
          <div id="cardstock">
             <Card className="card_bkgroundimg" style={{ width: '20rem',height:'15rem', fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"bold"}}>
      <Card.Body>
    <Card.Title style={{fontFamily:"Proxima Nova", fontSize:"30px", fontWeight:"bold"}}>Item:{ordr.item}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted" style={{fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"medium"}}>Quantity:{ordr.quantity}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted" style={{fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"medium"}}>Total Cost:{ordr.totalcost}</Card.Subtitle>
    <Card.Text style={{fontFamily:"Proxima Nova", fontSize:"15px", fontWeight:"lighter"}}>
    Your product will deliver soon!!
    </Card.Text>
    <Card.Link href="/user/orderdetail"style={{fontFamily:"Proxima Nova", fontSize:"15px", fontWeight:"medium"}}>Order Detail</Card.Link>
    
  </Card.Body>
</Card>
    </div>
       )

     })
     }
     </div>

 :
   
<Jumbotron style={{margin:'auto',background:'transparent',height:'100px'}} className="text-center">
      <h1>You Havent orderd any thing yet!! </h1>
      </Jumbotron>
}
 



    </>     
    
   )

 }

export default Userorder;