import React,{useState,useEffect} from 'react'

import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap';

import {withRouter} from "react-router-dom";


const  Updateproduct = (props) => {
 
  const id = props.match.params.productid;
 
  let [productName,setProductName] =   useState('');
  let [description,setDescription] = useState('');
  let [price,setPrice] =  useState(0);
  let [tax,setTax] =  useState(0);
  let [outofstock,setOutofstock]  = useState(false);
 
  let[profit,setProfit]  = useState(0);
  let [quantityavailable,setQuantityavailable] = useState(0);
 
 useEffect(()=>{
  fetch("https://secret-reaches-34188.herokuapp.com/api/product/getproductbyid/" + id,{ 
   // fetch("http://localhost:3005/product/getproductbyid/" +id,{
      method:"GET",
   
    headers:{
        "content-Type":"application/json",
       
    }
}).then((r)=>{
  r.json().then((result)=>{
       setProductName(result.data.productName);
       setDescription(result.data.description);
       setPrice(result.data.price);
       setTax(result.data.tax);
       setOutofstock(result.data.outOfStock);
       setProfit(result.data.profit);
       setQuantityavailable(result.data.quantityavailable);

  })
})

 },[]);
 
  const editproductHandler = (event) =>{
     
    event.preventDefault();
     

    //fetch("http://localhost:3005/product/updateproduct/" + id,{
      fetch("https://secret-reaches-34188.herokuapp.com/api/product/updateproduct/" + id,{ 
        method:"PUT",
        body :JSON.stringify({
          productName:productName,
          description:description,
          price:price,
          tax:tax,
          profit:profit,
          outOfStock:outofstock,
          quantityavailable:quantityavailable 
           }),
        headers:{
            "content-Type":"application/json",
          
        }
    }).then((r)=>{
         r.json().then((result)=>{
             if(result.status==='success'){
               props.history.push('/admin/')
             }else{
               props.history.push('/Error')
             }
         })
    })

  }

  
 const goback =(event)=>{
     event.preventDefault();
     props.history.push('/admin/');
 }


    return(
    <div id = "updateproduct">
      
      <Form onSubmit={(event)=>{editproductHandler(event)}}>
    
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Product Name</Form.Label>
      <Form.Control type="text" placeholder="Entet product name" value={productName}  onChange={(event)=>{setProductName(event.target.value)}} />
      </Form.Group>
  
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Product description</Form.Label>
      <Form.Control type="text" placeholder="Enter something about product" value={description}  onChange={(event)=>{setDescription(event.target.value)}} />
      </Form.Group>
  
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Price</Form.Label>
      <Form.Control type="number" placeholder="Enter price" value={price}  onChange={(event)=>{setPrice(event.target.value)}}  />
      </Form.Group>
  
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Tax</Form.Label>
      <Form.Control type="number" placeholder="Enter Tax"  value={tax}  onChange={(event)=>{setTax(event.target.value)}} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
      <Form.Label>Profit</Form.Label>
      <Form.Control type="number" placeholder="Enter Profit"  value={profit}  onChange={(event)=>{setProfit(event.target.value)}} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
      <Form.Label>Quantity Left</Form.Label>
      <Form.Control type="number" placeholder="Enter Tax"  value={quantityavailable}  onChange={(event)=>{setQuantityavailable(event.target.value)}} />
      </Form.Group>


      <Form.Group controlId="formBasicEmail">
      <Form.Label>Out of stock</Form.Label>
      <Form.Control type="boolean" placeholder="Enter  yes/no"  value={outofstock}  onChange={(event)=>{setOutofstock(event.target.value)}} />
      </Form.Group>
  
  
    <Button style={{backgroundColor:"#0099cc"}} variant="primary" type="submit">
      Edit
    </Button>
  </Form>
  
  <Button onClick={goback} variant="transparent" type="button">
      Go Back
    </Button>
   

    </div>
   )

 }

export default withRouter(Updateproduct);