import React,{useState,useEffect} from 'react'

import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
const Updateorder = (props) => {
  
    let [cost,setCost] =   useState(0);
    let [updatemode,setUpdatemode] = useState(false)
   useEffect(()=>{

    let id  = JSON.parse(localStorage.getItem('userId'));
   // fetch("http://localhost:3005/user/getorderdetail/" + id,{
    fetch("https://secret-reaches-34188.herokuapp.com/api/user/getorderdetail/" + id,{ 
              method:"GET",
                 headers:{
                  "content-Type":"application/json",
                 }
          }).then((r)=>{
            r.json().then((result)=>{
                 // console.log(result.orderdetail.length)
         if(result.orderdetail.length>0){
                      
            props.history.push('/admin/orderdetail');
         }else{
          setUpdatemode(true);
         }
            })
          })
         },[]);






     const updateorderHandler = (event)=>{
       event.preventDefault();
         const  id = JSON.parse(localStorage.getItem('userId'));
            console.log(id);
         event.preventDefault();
        // fetch("http://localhost:3005/user/orderdetail/" + id , {
          fetch("https://secret-reaches-34188.herokuapp.com/api/user/orderdetail/" + id,{ 
          method:"POST",
          body :JSON.stringify({
            Deliverycost:cost,
              }),
          headers:{
              "content-Type":"application/json",
            }
      }).then((r)=>{
          r.json().then((result)=>{            
              if(result.status ==='success')
              {
            props.history.push('/admin/orderdetail');
              }else{
                  props.history.push('/error')
  
              }
            })
      })
       }

    return(
    <div id="updateorder">
      
    { updatemode === true ?

         <Form onSubmit={(event)=>{updateorderHandler(event)}}>
    
       <Form.Group controlId="formBasicEmail">
      <Form.Label>Delivery Cost</Form.Label>
      <Form.Control type="number" placeholder="Enter delivery cost in Rs:-" value={cost}  onChange={(event)=>{setCost(event.target.value)}} />
      </Form.Group>

      <Button style={{backgroundColor:"#0099cc"}} variant="primary" type="submit">
    Update
  </Button>
 </Form>
     

     :
     <Jumbotron style={{margin:'0rem',background:'transparent',height:'100px'}} className="text-center">
  <h1>Order has already been Updated </h1>
  </Jumbotron>
    } 

    </div>
   )

 }

export default withRouter(Updateorder)