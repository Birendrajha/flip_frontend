import React,{useState} from 'react'
import Layout from '../../component/Layout';
import {Container,Form,Row,Col,Button} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import Footer from '../../component/Footer';
import  { withRouter }  from 'react-router-dom'
const Signup = (props) => {
     
    const [email,setEmail] =   useState("");
    const [password,setPassword] =  useState("");
   // const [Cpassword,setCPassword] =  useState("");
    const [fullName,setFullName] = useState("");
    const [Address,setAddress] =  useState("");
    const [Mobile,setMobile] =  useState("");
    
    const SignupHandler = (event)=>{
      event.preventDefault();
      //console.log(email,password);
       fetch("https://secret-reaches-34188.herokuapp.com/api/user/signup",{ 
       // fetch("http://localhost:3005/api/user/signup",{ 
          method:"POST",
          body :JSON.stringify({
            email:email,
            password:password,
            fullName:fullName,
             address:Address,
             contact:Mobile,
              
            
          }),
          headers:{
              "content-Type":"application/json"
          },
      }).then((r)=>{
       // console.log(r.status);
               r.json().then((result)=>{
                  
                  console.log(result.status);
                  console.log(result.message);
                    if(result.status==='success'){
                  localStorage.setItem('data',JSON.stringify({
                    
                    'token':result.token,
                    'status':result.status
                  }))
                    
                  
                     
                      if(result.data.role==='Admin'){
                       props.history.push('/admin')
                      }else{
                        props.history.push('/user')
                      }
                }else{
                  props.history.push('/error')
                }
               })
                    
                })
       
      }


  return(

    <>
    <Layout></Layout>
    <Jumbotron style={{margin:'0rem',background:'#007a99', color: "whitesmoke", height:'100px',fontFamily:"Proxima Nova", fontWeight:"bold",fontSize:"30px"}} className="text-center">
      <h1>Please Register Yourself </h1>
      </Jumbotron>

    <Container>
    <Row style={{margin:'50px'}}>
        <Col md={{span: 6,offset: 3}}>
<Form onSubmit={(event)=>{SignupHandler(event)}}>
     <Row>
         <Col md={6}>
             <Form.Group controlId="formBasicName">
             <Form.Label  style={{fontFamily:"Proxima Nova", fontWeight:"bold",fontSize:"30px"}} >FullName</Form.Label>
             <Form.Control style={{fontFamily:"Proxima Nova", fontWeight:"lighter",fontSize:"15px"}} type="text" placeholder="Enter your name" value={fullName} onChange={(event)=>{setFullName(event.target.value)}} required/>
             </Form.Group>
         </Col>
         <Col md={6}>
            <Form.Group controlId="formBasicContact">
           <Form.Label  style={{fontFamily:"Proxima Nova", fontWeight:"bold",fontSize:"30px"}} >Contact</Form.Label>
           <Form.Control style={{fontFamily:"Proxima Nova", fontWeight:"lighter",fontSize:"15px"}} type="text" placeholder="Mobile" value={Mobile} onChange={(event)=>{setMobile(event.target.value)}} required/>
            </Form.Group>
       </Col>
   </Row>

    <Form.Group controlId="formBasicEmail">
        <Form.Label  style={{fontFamily:"Proxima Nova", fontWeight:"bold",fontSize:"30px"}} >Email address</Form.Label>
        <Form.Control style={{fontFamily:"Proxima Nova", fontWeight:"lighter",fontSize:"15px"}} type="email" placeholder="Enter email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required/>
        <Form.Text style={{fontFamily:"Proxima Nova", fontWeight:"lighter",fontSize:"10px"}} className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label  style={{fontFamily:"Proxima Nova", fontWeight:"bold",fontSize:"30px"}} >Password</Form.Label>
        <Form.Control style={{fontFamily:"Proxima Nova", fontWeight:"lighter",fontSize:"15px"}} type="text" placeholder="Password" Value={password} onChange={(event)=>{setPassword(event.target.value)}} required/>
      </Form.Group>

    
      <Form.Group controlId="formBasicText">
        <Form.Label  style={{fontFamily:"Proxima Nova", fontWeight:"bold",fontSize:"30px"}} >Address</Form.Label>
        <Form.Control style={{fontFamily:"Proxima Nova", fontWeight:"lighter",fontSize:"15px"}} type="text" placeholder="Address" Value={Address} onChange={(event)=>{setAddress(event.target.value)}} required/>
      </Form.Group>



      {/* <Form.Group controlId="formBasicEmail">
        <Form.Label>Role</Form.Label>
        <Form.Text className="text-muted">
         For Admin User only!! if you are customer than ignore it
        </Form.Text>
        <Form.Control type="text" placeholder="Enter role as 'Admin'" value={role} onChange={(event)=>{setRole(event.target.value)}}/>
           </Form.Group> */}


      
      <Button style={{backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"bold"}} variant="primary" type="submit">
           Register!!
      </Button>
    </Form>
   </Col>
    </Row>
    
   </Container>

   <Footer/>
       </>
   )

 }

export default withRouter(Signup);