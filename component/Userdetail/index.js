import React,{useState} from 'react'
import Userdform from '../Userdform'
import {Button} from 'react-bootstrap';
import Editform from '../Editform';
/**
* @author
* @function 
**/

const  Userdetail = (props) => {

    let [editmode,setEditmode] = useState(false);
    let [email,setEmail] =   useState("");
    let [fullName,setFullName] = useState("");
    let [Address,setAddress] =  useState("");
    let [Mobile,setMobile] =  useState("");
    
    const [tokens,setToken] = useState("");
    
    const Goback = (event)=>{
      event.preventDefault();
        setEditmode(false);
    }



    
    const Edit = (event)=>{
      event.preventDefault();
      let data =JSON.parse( localStorage.getItem('data'));
      let token = data.token;
      let tokenf ="token " + token
      setToken(tokenf);
    // fetch("http://localhost:3005/user/",{
      fetch("https://secret-reaches-34188.herokuapp.com/api/user/",{ 
      method:"GET",
   
    headers:{
        "content-Type":"application/json",
        "authorization" : tokenf
    }
}).then((r)=>{
    r.json().then((result)=>{
      console.log(result);
        setEmail(result.data.email);
          
        setFullName(result.data.fullName);
        setAddress(result.data.address);
        setMobile(result.data.contact);

        setEditmode(true);
                

        
    })
})

    

    }


  



  return(
    <div id="userdetail" >

   {editmode ?
   <>
    <Editform email={email} fullName={fullName}  tokens={tokens}  address={Address} mobile={Mobile}/>
    <Button onClick={(event)=>{Goback(event)}} variant="transparent" type="button"  style={{fontFamily:"Proxima Nova",fontWeight:"medium"}} > 
    Go Back
  </Button>
  </>
   : <Userdform/>
   
  
   
   } 
    

    <Button onClick={(event)=>{Edit(event)}} variant="transparent" type="button" style={{fontFamily:"Proxima Nova",fontWeight:"bold"}}  > 
    Edit
  </Button>
 
    </div>
   )

 }

export default Userdetail