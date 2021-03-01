import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';


const Cards = (props) => {
    const productid = props.productid;
  const [message,setMessage]= useState(props.available)
  
  return(


    <Card className="card_bkgroundimg" style={{ width: '18rem',margin:"auto" }}>
    {/* <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgV2D4WXZy_V071g4diM6STwgBECaiWSrVg&usqp=CAU" /> */}
    <Card.Body>
      <Card.Title style={{fontFamily:"Proxima Nova", fontSize:"30px", fontWeight:"bold"}}>{props.productName}</Card.Title>
      <Card.Text style={{fontFamily:"Proxima Nova", fontSize:"15px", fontWeight:"bold"}}>
       {props.description}
      </Card.Text>
    </Card.Body>
    <ListGroup style={{margin:'5px'}} className="list-group-flush">
      <ListGroupItem style={{fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"medium"}} > Price: ${props.price}</ListGroupItem>
      <ListGroupItem style={{fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"medium"}}>Tax:{props.tax}%</ListGroupItem>
      <ListGroupItem>{`available : ${message}`}</ListGroupItem>
         {props.role ==='Admin'?
         <>
         <ListGroupItem style={{fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"lighter"}}>Profit:{props.profit}%</ListGroupItem>
         <ListGroupItem style={{fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"lighter"}}>Product Left in stock:{props.quantityavailable}</ListGroupItem>
         </>
         :null
         }
    </ListGroup>
    <Card.Body>

      {props.role ==='User' ?
       <Card.Link href="/user/placeorder" style={{fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"medium"}}>Place Order</Card.Link>
    :
    
    
     <Card.Link href={"/admin/updateproduct/"+productid} style={{fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"bold"}}>Update</Card.Link>}
    </Card.Body>
  </Card>
   )

 }

export default Cards;