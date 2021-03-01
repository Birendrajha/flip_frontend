import React,{useState} from 'react'
import {Container,Form,Row,Col,Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
const Addproduct = (props) => {
   
    let [productname,setProductname] = useState("");
 let [description,setDescription] = useState("");
 let [price,setPrice] = useState("");
 let [tax,setTax] = useState("");
 let [profit,setProfit] = useState(0);
 let [ quantityavailable,setQuantityavailable] = useState(0)
      
    const AddProduct = (event)=>{
       event.preventDefault();
       fetch("https://secret-reaches-34188.herokuapp.com/api/product/add",{ 
       //fetch("http://localhost:3005/product/add",{
        method:"POST",
        body :JSON.stringify({
            productName:productname,
            description:description,
            price:price,
            tax:tax,
            profit:profit,
           quantityavailable: quantityavailable
        }),
        headers:{
            "content-Type":"application/json"
        },
    }).then((r)=>{
    
             r.json().then((result)=>{
                   if(result.status === "success"){
                    props.history.push('/admin/')
                   }else{
                    props.history.push('/Error')
                   }
               
             
             })
                  
            
        
    })
    }

  
    return(
    <div id="addproduct">

    <Container>
   <Row style={{margin:'50px'}}>
    <Col md={{span: 6,offset: 3}}>
    <Form onSubmit={(event)=>{AddProduct(event)}}>
 
  <Form.Group controlId="formBasicText">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter product name" value={productname} onChange={(event)=>{setProductname(event.target.value)}} required />
  </Form.Group>


  <Form.Group controlId="formBasicText">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter description" value={description} onChange={(event)=>{setDescription(event.target.value)}} required />
  </Form.Group>


  <Form.Group controlId="formBasicNumber">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="Enter price" value={price} onChange={(event)=>{setPrice(event.target.value)}} required />
  </Form.Group>

  <Form.Group controlId="formBasicNumber">
    <Form.Label>Mfg Tax</Form.Label>
    <Form.Control type="number" placeholder="Enter Mfg Tax" value={tax} onChange={(event)=>{setTax(event.target.value)}} required />
  </Form.Group>

  <Form.Group controlId="formBasicNumber">
    <Form.Label>Quantity Available</Form.Label>
    <Form.Control type="number" placeholder="Quantity Available" value={quantityavailable} onChange={(event)=>{setQuantityavailable(event.target.value)}} required />
  </Form.Group>

  <Form.Group controlId="formBasicNumber">
    <Form.Label>profit</Form.Label>
    <Form.Control type="number" placeholder="Enter Profit" value={profit} onChange={(event)=>{setProfit(event.target.value)}} required />
  </Form.Group>

 
  
  <Button style={{backgroundColor:"#0099cc"}} variant="primary" type="submit" >
    Add
  </Button>
</Form>
    </Col>
</Row>
</Container>


    </div>
   )

 }

export default withRouter(Addproduct);