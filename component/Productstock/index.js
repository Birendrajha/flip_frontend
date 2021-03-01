import React,{useState,useEffect} from 'react'
import Cards from '../Card';
import {Jumbotron,Button} from 'react-bootstrap';

const Productstock = (props) => {
   
    const [List,setList] =   useState([]);
    let [limit,setLimit] = useState(6)
    let [offset,setOffset] = useState(0);
    let [length,setLength] = useState(0);

    useEffect(()=>{
        fetch("https://secret-reaches-34188.herokuapp.com/api/product/getproduct?" + 'limit='+ limit + '&'+ 'offset=' + offset,{ 
       //fetch("http://localhost:3005/product/getproduct?" + 'limit='+ limit + '&'+ 'offset=' + offset,{
         method:"GET",
        
         headers:{
             "content-Type":"application/json",
            
         }
     }).then((r)=>{
         r.json().then((result)=>{
             setList(result.data);
             setLength(result.data.length);
            
         })
     })
     })  
   
   
      
 
    return(
<>
<div>
    <div id="productstock">
    { length >0 ?
     List.map((list,idx)=>{
      return(

           <div id="cardstock" >
           <Cards  productName={list.productName} description={list.description} price={list.price} tax={list.tax} profit={list.profit} available={!(list.outOfStock)} role="User" />
      </div>
      )
   })
   :
     <Jumbotron style={{marginBottom:'0px',  background:'#0099cc', color: "whitesmoke",width:'100%', height:'100%',fontFamily:"Proxima Nova",fontWeight:"bold"}} className="text-center">
          <h1>No more  product to Explore!!</h1>
          </Jumbotron>
     
 }
 </div>
 </div>
 <div id='pagination'>
 <Button onClick={()=>{setOffset(0)}}  style={{backgroundColor:"#0099cc",margin:'2px'}}>1</Button>
 <Button onClick={()=>{setOffset(6)}}  style={{backgroundColor:"#0099cc",margin:'2px'}}>2</Button>
 <Button onClick={()=>{setOffset(12)}} style={{backgroundColor:"#0099cc",margin:'2px'}}>3</Button>
 <Button onClick={()=>{setOffset(18)}} style={{backgroundColor:"#0099cc",margin:'2px'}}>4</Button>
 </div> 
</>
   )

 }

export default Productstock;