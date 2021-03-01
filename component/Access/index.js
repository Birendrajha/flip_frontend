import React from 'react'
import {Row,Col,Container} from  'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {withRouter}  from 'react-router-dom';


const Access = (props) => {
 function gotouser(){
        props.history.push('/admin/userList')
 }

 function addproduct(){
  props.history.push('/admin/addproduct')
}

// function seeorder(){
//   props.history.push('/admin/order')
// }

function Gotoprofit(){
  props.history.push('/admin/profit')
}

 function gotoproduct(){
 
  props.history.push('/admin/')
}


  return(
    <div className="accessapi" >
    <Container fluid="md">
    <Row className="access">
    <Col >
     <Button  onClick={gotoproduct} style={{margin:"5px", width:"250px",backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"medium"}} variant="primary" size="lg" active>
   Get Product
  </Button>
  </Col>
   </Row>
    
    
   <Row className="access">
    <Col>
     <Button onClick={gotouser} style={{margin:"5px", width:"250px",backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"medium"}} variant="primary" size="lg" active>
   Get User
  </Button>
  </Col>
   </Row>

   

   <Row className="access">
    <Col>
    <Button  onClick={addproduct}  style={{margin:"5px", width:"250px",backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"medium"}} variant="primary" size="lg" active>
   Add Product
  </Button>
    </Col>
   </Row>


   <Row className="access">
    <Col>
    <Button  onClick={Gotoprofit}  style={{margin:"5px", width:"250px",backgroundColor:"#0099cc",fontFamily:"Proxima Nova", fontWeight:"medium"}} variant="primary" size="lg" active>
    Profit
  </Button>
    </Col>
   </Row>


    </Container>
    </div>
   )

 }

export default  withRouter(Access)