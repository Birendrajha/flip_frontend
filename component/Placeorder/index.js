import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import {withRouter} from 'react-router-dom';

const Placeorder = (props) => {
    const [item,setItem] = useState("");
    const [quantity,setQuantity] = useState(0);
    const [List,setList]  = useState([]);

    useEffect(()=>{
      fetch("https://secret-reaches-34188.herokuapp.com/api/product/getproductforplaceorder",{ 
    //  fetch("http://localhost:3005/product/getproductforplaceorder" ,{
        method:"GET",
       
        headers:{
            "content-Type":"application/json",
           
        }
    }).then((r)=>{
        r.json().then((result)=>{
            setList(result.data);
            
           
        })
    })
    })  
  

    const Goback = ()=>{
        props.history.push('/user/');
    }



   const PlaceOrder = (event)=>{
    event.preventDefault();

    let data =JSON.parse( localStorage.getItem('data'));
    let token = data.token;
    let tokenf ="token " + token

    fetch("https://secret-reaches-34188.herokuapp.com/api/user/orderlist",{ 
   // fetch("http://localhost:3005/user/orderlist",{
        method:"POST",
        body :JSON.stringify({
            item:item,
            quantity:quantity
          
        }),
        headers:{
            "content-Type":"application/json",
            "authorization" :tokenf
        }
    }).then((r)=>{

         
        r.json().then((result)=>{
            
          
            if(result.status ==='success')
            {
            props.history.push('/user/order');
            
            }else{
                props.history.push('/Error')

            }

        })
      
    })

   }
  
  
    return(
        <>
  <div id= "placeorder">


        <Form onSubmit={(event)=>{PlaceOrder(event)}}>
  
    <Form.Group controlId="formBasicEmail" required>
    <Form.Label style={{fontFamily:"Proxima Nova",fontWeight:"bold"}}>Enter item</Form.Label>
   <br></br>  
   
     <select name='item' id='item' onChange={(event)=>{setItem(event.target.value)}} style={{width:'100%',height:'35px',border:'#00000099',borderRadius: '5px',padding:'5px',fontFamily:"Proxima Nova"}}>
    
      <option value="product">Choose Product</option> 
      {List.map((list,idx)=>{
        return(
        <option value={list.productName}>{list.productName}</option>
        )
      })}

     </select>

    </Form.Group>  

    
     

  <Form.Group controlId="formBasicPassword">
    <Form.Label style={{fontFamily:"Proxima Nova",fontWeight:"bold"}}>Quantity</Form.Label>
    <Form.Control type="number" placeholder="Quantity" min="1" value={quantity} onChange={(event)=>{setQuantity(event.target.value)}} required  />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Confirm" required style={{fontFamily:"Proxima Nova",fontWeight:"bold"}} />
  </Form.Group>
  <Button variant="primary" type="submit" style={{fontFamily:"Proxima Nova",fontWeight:"medium"}}>
    Place order
  </Button>

</Form>
  <Button onClick={(event)=>{Goback(event)}} style={{fontFamily:"Proxima Nova",fontWeight:"medium"}} variant="transparent" type="button" > 
    Go Back
  </Button>

    </div>
    </>
   )

 }

export default withRouter(Placeorder);