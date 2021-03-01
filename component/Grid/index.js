import React,{useEffect,useState} from 'react'
import {Jumbotron,Button} from 'react-bootstrap';

import Cards from '../Card'
 import '../../App.css'

const Grid = (props) => {


  const [List,setList] =   useState([]);
  let [length,setLength] = useState(0);
  let [limit,setLimit] = useState(6)
  let [offset,setOffset] = useState(0);

  useEffect(()=>{
    fetch("https://secret-reaches-34188.herokuapp.com/api/product/getproduct?" + 'limit='+ limit + '&'+ 'offset=' + offset,{ 
   // fetch("http://localhost:3005/product/getproduct?" + 'limit='+ limit + '&'+ 'offset=' + offset,{
     
    method:"GET",
      headers:{
          "content-Type":"application/json",
         
      }
  }).then((r)=>{
      r.json().then((result)=>{
          setLength(result.data.length);
          setList(result.data);
                  
        })
  })
  })  



  return(
    <>
    <div>
         <div id="Gridcard">
    { length >0 ?
          
      List.map((list,idx)=>{
      return(
            <div id="cardstock" > 
           <Cards productName={list.productName} description={list.description} price={list.price} profit={list.profit} quantityavailable={list.quantityavailable} tax={list.tax} available={!(list.outOfStock)} role="Admin"  productid = {list._id}/>
       </div> 
      )
   })
      
    

     :
     <Jumbotron style={{marginBottom:'0px',margin:"auto", background:'#0099cc', color: "whitesmoke",width:'100%', height:'120%',fontFamily:"Proxima Nova",fontWeight:"bold"}} className="text-center">
          <h1>Add More Product To Your Stock!!</h1>
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

export default Grid;


