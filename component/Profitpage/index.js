import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import {Jumbotron} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'

const Profitpage = (props) => {
   
    let [totaluser,setTotaluser]  = useState(0);
    let [totalorder,setTotalorder]  = useState(0);
    let [totalorderdetail,setTotalorderdetail]  = useState(0);
    let [totaldeliverycost,setTotaldeliverycost]  = useState(0);
    let [totalcost,setTotalcost]  = useState(0);
    
    let[tprofit,setTprofit] = useState(0);
 
    useEffect(()=>{
      fetch("https://secret-reaches-34188.herokuapp.com/api/user/getprofit" ,{ 
          //fetch("http://localhost:3005/user/getprofit/",{
           method:"GET",
              headers:{
               "content-Type":"application/json",
              }
       }).then((r)=>{ 
           if(r.status === 200) {
           r.json().then((result)=>{
              
              setTotaluser(result.profit.totaluser);
              setTotalorder(result.profit.totalorder);
              setTotalorderdetail(result.profit.totalorderdetail);
              setTotalcost(result.profit.totalcost);
             
              setTotaldeliverycost(result.profit.totaldeliverycost);
              setTprofit(result.profit.tprofit );
  
             
           })
        }else {
            props.history.push('/admin/')
        }

       })
  
      },[]);
  
 
 
 
 
    return(
    <div id = "profitpage" >
     
     <>
<Jumbotron style={{margin:'auto',background:'transparent', color: "black", height:'100px'}} className="text-center">
      <h1>Total Transaction  Detail !!</h1>
      </Jumbotron>

<Form.Group>
    <Form.Label>Total User</Form.Label>
    <Form.Control value = {totaluser} disabled />
  </Form.Group>

  <Form.Group>
    <Form.Label>Total Order</Form.Label>
    <Form.Control  value = {totalorder}  disabled />
  </Form.Group>

  <Form.Group>
    <Form.Label>Total Orderdetail Prepared</Form.Label>
    <Form.Control value = {totalorderdetail} disabled />
  </Form.Group>

  <Form.Group>
    <Form.Label>Total cost (Excluding Tax)</Form.Label>
    <Form.Control  value={totalcost} disabled />
  </Form.Group>
  
  


  <Form.Group>
    <Form.Label> Total Delivery Cost</Form.Label>
    <Form.Control  value={totaldeliverycost} disabled />
  </Form.Group>
  
  <Form.Group>
    <Form.Label>Total Profit :-</Form.Label>
    <Form.Control value={tprofit} disabled />
  </Form.Group>
</>
     



    </div>
   )

 }

export default withRouter(Profitpage);