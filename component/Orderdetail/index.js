import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import {withRouter} from 'react-router-dom';
import {Jumbotron,Row,Col} from 'react-bootstrap';

const Orderdetail = (props) => {
   
    // const [id,setId]  = useState(props.ids)
    let [order,setOrder]  = useState([]);
    let [quantities,setQuantities] = useState('')
    let [urid,setUrid] = useState('')
    let[tax,setTax] = useState(0);
    let [deliverycost,setDeliverycost] = useState(0);
    let[grandtotal,setGrandTotal] = useState(0);
    let [length,setLength] = useState();
    let [profit,setProfit]  = useState(0);
    useEffect(()=>{
      let  id = JSON.parse(localStorage.getItem('userId'))
      fetch("https://secret-reaches-34188.herokuapp.com/api/user/getorderdetail/" + id,{ 
      //  fetch("http://localhost:3005/user/getorderdetail/" + id,{
         method:"GET",
            headers:{
             "content-Type":"application/json",
            }
     }).then((r)=>{
         r.json().then((result)=>{
            
               
           setLength(result.orderdetail.length);
                  
            if(result.orderdetail.length > 0){

            setOrder(result.orderdetail[0].order);
            setQuantities(result.orderdetail[0].TotalQuantity);
            setUrid(result.orderdetail[0].id);
            setTax(result.orderdetail[0].AdditionalTax);
            setDeliverycost(result.orderdetail[0].DeliveryCost);
            setGrandTotal(result.orderdetail[0].GrandTotal );
            setProfit(result.orderdetail[0].TotalProfit)
           
          }else{
                 props.history.push('/admin/updateorder')
            }
         })
     })

    },[]);


  
  
    return(
    <div id = "orderdetail">

     {length > 0 ?  
    
      
<>
<Jumbotron style={{margin:'auto',background:'transparent', color: "black", height:'100px'}} className="text-center">
      <h1>Order Detail !!</h1>
      </Jumbotron>
 

{
  order.map((ordr,idx)=>{
     
    return(
<>

   <Row>
   <Col md={6}>
      <Form.Group>
    <Form.Label>Product Name{idx+1}</Form.Label>
    <Form.Control placeholder={ordr.item} value = {ordr.item} disabled />
  </Form.Group>
  </Col>
  <Col md={6}>
  <Form.Group>
    <Form.Label>Quantity ordered</Form.Label>
    <Form.Control placeholder={ordr.quantity} value = {ordr.quantity} disabled />
  </Form.Group>
  </Col>
</Row>
</>
    ) 
})

}


  <Form.Group>
    <Form.Label> Total Quantity Ordered</Form.Label>
    <Form.Control placeholder={quantities} value = {quantities}  disabled />
  </Form.Group>

  <Form.Group>
    <Form.Label>Your Track Id</Form.Label>
    <Form.Control placeholder={urid}  value = {urid} disabled />
  </Form.Group>

    <Form.Group>
    <Form.Label>Delivery Cost</Form.Label>
    <Form.Control placeholder={deliverycost} value={deliverycost} disabled />
  </Form.Group>
  
  <Form.Group>
    <Form.Label>GST</Form.Label>
    <Form.Control placeholder={tax} value={tax} disabled />
  </Form.Group>

  <Form.Group>
    <Form.Label> Combine Profit</Form.Label>
    <Form.Control placeholder={profit} value={profit} disabled />
  </Form.Group>



  <Form.Group>
    <Form.Label>Total cost (including Tax)</Form.Label>
    <Form.Control placeholder={grandtotal} value={grandtotal} disabled />
  </Form.Group>
  
 
</>
 :
 <Jumbotron style={{margin:'0rem',background:'transparent', color: "whitesmoke", height:'100px'}} className="text-center">
      <h1>Order Detail has not been created Yet!!</h1>
      </Jumbotron>
 
 
  }
    </div>
   )

 }

export default withRouter(Orderdetail)