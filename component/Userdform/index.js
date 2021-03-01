import React,{useState,useEffect} from 'react'

import {Jumbotron} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
/**
* @author
* @function 
**/

const  Userdform = (props) => {

  const [email,setEmail] =   useState("");
      const [fullName,setFullName] = useState("");
    const [Address,setAddress] =  useState("");
    const [Mobile,setMobile] =  useState("");

  useEffect(()=>{
     let data =JSON.parse( localStorage.getItem('data'));
        let token = data.token;
        let tokenf ="token " + token
    // fetch("http://localhost:3005/user",{
      fetch("https://secret-reaches-34188.herokuapp.com/api/user/",{ 
      method:"GET",
     
      headers:{
          "content-Type":"application/json",
          "authorization" : tokenf
      }
  }).then((r)=>{
      r.json().then((result)=>{
          setEmail(result.data.email);
         
          setFullName(result.data.fullName);
          setAddress(result.data.address);
          setMobile(result.data.contact);
         
      })
  })
  })  


   

  return(
         
    <>
         <Jumbotron style={{margin:'0rem',background:'transparent', color: "Black", height:'100px'}} className="text-center">
      <h1 style={{fontFamily:"Proxima Nova",fontWeight:"medium",fontSize:"50px"}} >Your  Profile</h1>
      </Jumbotron>
      
      <Card className="card_bkgroundimg" style={{ width: '25rem' }}>
  <Card.Body>
    <Card.Title style={{fontFamily:"Proxima Nova",fontWeight:"bold"}} > Name : {fullName}</Card.Title>
    <Card.Subtitle style={{fontFamily:"Proxima Nova", fontWeight:"bold"}} className="mb-2 text-muted"> Email : {email}</Card.Subtitle>
    <Card.Subtitle style={{fontFamily:"Proxima Nova", fontWeight:"bold"}} className="mb-2 text-muted"> Contact : {Mobile}</Card.Subtitle>
    <Card.Text style={{fontFamily:"Proxima Nova",fontWeight:"bold"}}>
    Shipping Address : {Address}
    </Card.Text>
    <Card.Link href="/user/order" style={{fontFamily:"Proxima Nova",fontWeight:"medium"}} >See Order</Card.Link>
    
  </Card.Body>
</Card>

</>
   
   )

 }

export default Userdform;