import React from 'react'
import {Row,Col,Container} from  'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {withRouter}  from 'react-router-dom';



const Accessuser  = (props) => {

    function placeorder(){
        props.history.push('/user/placeorder');
 }

 function gotoorder(){
  props.history.push('/user/order');
}

 function gotoprofile(){
 
  props.history.push('/user/')
}

function Seeproduct(){
 
  props.history.push('/user/productstock');
}

function Seeorderdetail(){
 
  props.history.push('/user/orderdetail');
}



  return(
    <div className="accessapi" >
    <Container fluid="md">
    <Row className="access">
    <Col >
     <Button  onClick={gotoprofile} style={{margin:"5px", width:"250px",backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"medium"}} variant="primary" size="lg" active>
   Get profile
  </Button>
  </Col>
   </Row>
    
   <Row className="access">
    <Col>
     <Button onClick={gotoorder} style={{margin:"5px", width:"250px",backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"medium"}} variant="primary" size="lg" active>
   Get Order
  </Button>
  </Col>
   </Row>

   <Row className="access">
    <Col>
    <Button onClick={placeorder} style={{margin:"5px", width:"250px",backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"medium"}} variant="primary" size="lg" active>
      Place Order
  </Button>
    </Col>
   </Row>
   <Row className="access">
    <Col>
    <Button onClick={Seeproduct} style={{margin:"5px", width:"250px",backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"medium"}} variant="primary" size="lg" active>
      See Product in Stock
  </Button>
    </Col>
   </Row>


   <Row className="access">
    <Col>
    <Button onClick={Seeorderdetail} style={{margin:"5px", width:"250px",backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"medium"}} variant="primary" size="lg" active>
      See Orderdetail
  </Button>
    </Col>
   </Row>

    </Container>
    </div>
   )

   

 }

export default withRouter(Accessuser);