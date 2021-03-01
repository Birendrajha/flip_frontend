import React,{useState,useEffect} from 'react'
import {Navbar,Nav,Container} from  'react-bootstrap';
import {NavLink,Link}   from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom';


const  Header = (props) => {
   
  let [statuss,setStatus]  = useState('');
 

  useEffect(()=>{
             
   let data = JSON.parse(localStorage.getItem('data'));
   if(data != null || data!=undefined){

      setStatus(data.status)
   }else{
     setStatus('fail')
   }
  },[]);

   
   const logout = (event)=>{
            event.preventDefault();
            localStorage.removeItem('data');
            props.history.push('/');
   }



  return(
    <Navbar className="head" collapseOnSelect expand="lg">

    <Container>

    <Navbar.Brand href="/">
      <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6-bdkfFjcYvnl6ygvkKDjWimSs2aPtUq9w&usqp=CAU"
        
       
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      </Navbar.Brand>

    {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
     <Link to="/" className="navbar-brand" style={{fontFamily:"Proxima Nova", fontSize:"30px", fontWeight:"bold"}}>Expand Business</Link> 
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
    </Nav>
       
{statuss ==='success'?

<Nav>
         <li className="nav-item">
         <Button onClick={(event)=>{logout(event)}} variant="secondary" size="sm" style={{fontFamily:"Proxima Nova"}}>
      Logout
    </Button>
        </li>
 </Nav>

   :   <Nav>
         <li className="nav-item">
        <NavLink to="signin" className="nav-link" style={{fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"medium"}} >signin</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="signup" className="nav-link" style={{fontFamily:"Proxima Nova", fontSize:"20px", fontWeight:"medium"}}>signup</NavLink>
        </li>
     </Nav>
}

    </Navbar.Collapse>
    </Container>
  </Navbar>
   )

 }

export default withRouter(Header);