import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap';

import {withRouter} from "react-router-dom";


const Editform = (props) => {


    let [email,setEmail] =   useState(props.email);
    let [fullName,setFullName] = useState(props.fullName);
    let [Address,setAddress] =  useState(props.address);
    let [Mobile,setMobile] =  useState(props.mobile);
   
   
   const editHandler = (event)=>{
    event.preventDefault();
     
    let data =JSON.parse( localStorage.getItem('data'));
    let token = data.token;
    let tokenf ="token " + token
    fetch("https://secret-reaches-34188.herokuapp.com/api/user",{ 
    //fetch("http://localhost:3005/user",{
        method:"PUT",
        body :JSON.stringify({
          email:email,
          
          fullName:fullName,
           address:Address,
           contact:Mobile
          
        }),
        headers:{
            "content-Type":"application/json",
            "authorization" :tokenf
        }
    }).then((r)=>{
    
             r.json().then((result)=>{
              
                  if(result.status==='success'){
               
                    
                  props.history.push('/user')
                
                   
                   
              }else{
                
                props.history.push('/Error')

              }
             })
                  
            
        
    })

   }


  return(
    <div>


   <Form onSubmit={(event)=>{editHandler(event)}} style={{fontFamily:"Proxima Nova",fontWeight:"medium"}} >
    
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{fontFamily:"Proxima Nova",fontWeight:"bold"}} >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(event)=>{setEmail(event.target.value)}} />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
    <Form.Label style={{fontFamily:"Proxima Nova",fontWeight:"bold"}} >FullName</Form.Label>
    <Form.Control type="text" placeholder="Enter fullname" value={fullName}  onChange={(event)=>{setFullName(event.target.value)}} />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
    <Form.Label style={{fontFamily:"Proxima Nova",fontWeight:"bold"}} >Address</Form.Label>
    <Form.Control type="text" placeholder="Enter address" value={Address}  onChange={(event)=>{setAddress(event.target.value)}}  />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
    <Form.Label style={{fontFamily:"Proxima Nova",fontWeight:"bold"}} >Mobile</Form.Label>
    <Form.Control type="text" placeholder="Enter Mob.no"  value={Mobile}  onChange={(event)=>{setMobile(event.target.value)}} />
    </Form.Group>


  <Button  style={{backgroundColor:"#0099cc"}} variant="primary" type="submit" style={{fontFamily:"Proxima Nova",fontWeight:"bold"}} >
    Submit
  </Button>
</Form>

    </div>
   )

 }

export default withRouter(Editform);