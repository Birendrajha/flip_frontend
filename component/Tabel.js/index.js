import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {Jumbotron} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

const Tabel = (props) => {

   
   
    const [Users,setUser] = useState([]);
    const [message,setMessage] = useState('');
    const [popup,setPopup] = useState(false)
    const [length,setLength] = useState(0)

    //console.log(User);

    function deleteuser(id){
     // fetch('http://localhost:3005/user/'+ id,{
      fetch("https://secret-reaches-34188.herokuapp.com/api/user/" + id,{ 
        method:"DELETE",
        
        headers:{
            "content-Type":"application/json",
           
        },
    }).then((resp)=>{
      resp.json().then((result)=>{
           setMessage(result.message);
           setPopup(true);
           setTimeout(()=>{
             setPopup(false);
           },3000)
    })
    })
    }
  
     function seeorder(id){
          props.history.push('/admin/seeorder/'+id);
     }
   



   useEffect(()=>{
    fetch("https://secret-reaches-34188.herokuapp.com/api/user/alluser",{ 
    //fetch('http://localhost:3005/user/alluser',{
      method:"GET",
      
      headers:{
          "content-Type":"application/json",
         
      },
  }).then((resp)=>{
    resp.json().then((result)=>{
      setUser(result.data);
       console.log(Users)
       setLength(result.data.length)
  })
  })

   })
   

     
  return(
    length > 0? 
      <div id="table">
  
     {
      popup ?
     
      <Alert variant="dark">
   {message}
  </Alert>
  :null   }
     <Table striped bordered hover>
     <thead>
     <tr>
      <th>Userid</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Action</th>
      <th>See Order</th>
    </tr>
  </thead>
  <tbody>

 { Users.map((user,idx)=>{
      return(
    <tr>
      <td>{user._id}</td>
      <td>{user.email}</td>
      <td>{user.contact}</td>
      <td>{user.address}</td>
      <td> 
      <Button  onClick={()=>{deleteuser(user._id)}} style={{margin:"5px",backgroundColor:"#0099cc"}} variant="primary" size="sm" active>
  Delete
  </Button>
  </td>

  <td> 
      <Button  onClick={()=>{seeorder(user._id)}} style={{margin:"5px",backgroundColor:"#0099cc"}} variant="primary" size="sm" active>
  See Order
  </Button>
  </td>
      
    </tr>
      )
   })
 }
   

    </tbody>
</Table>
  
    </div>
    :
    <Jumbotron style={{margin:'auto',color:"#0099cc",background:'transparent',height:'100px',fontFamily:"Proxima Nova", fontWeight:"bold",fontSize:"30px"}} className="text-center">
      <h1>No Registered User</h1>
      </Jumbotron>

   )

 }

export default withRouter(Tabel);
