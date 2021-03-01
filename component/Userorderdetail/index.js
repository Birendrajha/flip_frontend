import React,{useState,useEffect}  from 'react'
import Form from 'react-bootstrap/Form'
import {Jumbotron,Row,Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'


const Userorderdetail = (props) => {

    
  let [order,setOrder]  = useState([]);
  let [quantities,setQuantities] = useState('')
  let [urid,setUrid] = useState('')
  
  let [deliverycost,setDeliverycost] = useState(0);
  let[grandtotal,setGrandTotal] = useState(0);
  let[tax,setTax] = useState(0);
  let [length,setLength] = useState();
 
   
    useEffect(()=>{
          
        let data =JSON.parse( localStorage.getItem('data'));
        let token = data.token;
        let tokenf ="token " + token
        fetch("https://secret-reaches-34188.herokuapp.com/api/user/getorderdetail" ,{ 
        //fetch("http://localhost:3005/user/getorderdetail",{
         method:"GET",
            headers:{
             "content-Type":"application/json",
             "authorization" : tokenf
            }
     }).then((r)=>{
         r.json().then((result)=>{
            
               
          setLength(result.orderdetail.length);
          console.log(length);
    if(result.orderdetail.length > 0){
             
    setOrder(result.orderdetail[0].order);
    setQuantities(result.orderdetail[0].TotalQuantity);
    setUrid(result.orderdetail[0].id);
    setTax(result.orderdetail[0].AdditionalTax);
    setDeliverycost(result.orderdetail[0].DeliveryCost);
    setGrandTotal(result.orderdetail[0].GrandTotal );

    }else{
      setLength(result.orderdetail.length);
        // props.history.push('/user/')
    }

     })
     })

    },[]);



  return(
    <div id = "userorderdetail">
         {length >0 ? 
    
    
    <>
    
    <Jumbotron style={{margin:'auto',background:'transparent', color: "black", height:'100px',fontFamily:"Proxima Nova", fontSize:"30px", fontWeight:"bold"}} className="text-center">
      <h1>Invoice Prepared !!</h1>
      </Jumbotron>


      {
  order.map((ordr,idx)=>{
     
    return(
<>

   <Row>
   <Col md={6}>
      <Form.Group>
    <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"15px", fontWeight:"bold"}}>Product Name{idx+1}</Form.Label>
    <Form.Control placeholder={ordr.item} value = {ordr.item} disabled />
  </Form.Group>
  </Col>
  <Col md={6}>
  <Form.Group>
    <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"15px", fontWeight:"bold"}}>Quantity ordered</Form.Label>
    <Form.Control placeholder={ordr.quantity} value = {ordr.quantity} disabled />
  </Form.Group>
  </Col>
</Row>
</>
    ) 
})

}


<Form.Group>
    <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"15px", fontWeight:"bold"}}> Total Quantity Ordered</Form.Label>
    <Form.Control placeholder={quantities} value = {quantities}  disabled />
  </Form.Group>

  <Form.Group>
    <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"15px", fontWeight:"bold"}}>Your Track Id</Form.Label>
    <Form.Control placeholder={urid}  value = {urid} disabled />
  </Form.Group>

    <Form.Group>
    <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"15px", fontWeight:"bold"}}>Delivery Cost</Form.Label>
    <Form.Control placeholder={deliverycost} value={deliverycost} disabled />
  </Form.Group>


  <Form.Group>
    <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"15px", fontWeight:"bold"}}>GST</Form.Label>
    <Form.Control placeholder={tax} value={tax} disabled />
  </Form.Group>
  
  <Form.Group>
    <Form.Label style={{fontFamily:"Proxima Nova", fontSize:"15px", fontWeight:"bold"}}>Total cost (including Tax)</Form.Label>
    <Form.Control placeholder={grandtotal} value={grandtotal} disabled />
  </Form.Group>
  

    </>
     :
     <Jumbotron style={{margin:'auto',background:'transparent', color: "whitesmoke",width:'auto', height:'auto',fontFamily:"Proxima Nova", fontSize:"30px", fontWeight:"bold"}} className="text-center">
          <h1>Order Detail has not been created Yet!!</h1>
          </Jumbotron>
     
     
      }
    </div>
   )

 }

export default withRouter(Userorderdetail);