import React,{useState} from 'react'
import Layout from '../../component/Layout';
import {Container,Form,Row,Col,Button} from 'react-bootstrap';
import Footer from '../../component/Footer';
 import {withRouter}  from 'react-router-dom'
 import {Jumbotron} from 'react-bootstrap';

const Signin = (props) => {
  


 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

   
     
    const SigninHandler = (event)=>{
      event.preventDefault();
     
     // fetch("http://localhost:3005/user/signin",{
      fetch("https://secret-reaches-34188.herokuapp.com/api/user/signin",{ 
          method:"POST",
          body :JSON.stringify({email:email,password:password}),
          headers:{
              "content-Type":"application/json"
          },
      }).then((r)=>{
       
               r.json().then((result)=>{
               
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
      <h1>Please Login </h1>
      </Jumbotron>

 
 
 <Container>
   <Row style={{margin:'50px'}}>
    <Col md={{span: 6,offset: 3}}>
    <Form onSubmit={(event)=>{SigninHandler(event)}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{fontFamily:"Proxima Nova", fontWeight:"bold" , fontSize:"30px"}}> Your Email</Form.Label>
    <Form.Control style={{fontFamily:"Proxima Nova", fontWeight:"lighter",fontSize:"15px"}} type="email" placeholder="Enter email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required />
    <Form.Text  className="text-muted" style={{fontFamily:"Proxima Nova", fontWeight:"lighter" , fontSize:"10px"}}>
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label style={{fontFamily:"Proxima Nova", fontWeight:"bold" , fontSize:"30px"}}>Password</Form.Label>
    <Form.Control style={{fontFamily:"Proxima Nova", fontWeight:"lighter",fontSize:"15px"}}  type="password" placeholder="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}} required />
  </Form.Group>
  
  <Button style={{backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"bold"}} variant="primary" type="submit" style={{fontFamily:"Proxima Nova", fontWeight:"medium",fontSize:"15px"}}  >
    Login
  </Button>
</Form>
    </Col>
</Row>
</Container>

 <Footer/>  
 
 

 </>
   )

 }

export default withRouter(Signin);