import React from 'react'
import Layout from '../../component/Layout';
import Crausal from '../../component/Crausal';
import Footer from '../../component/Footer';
import {Jumbotron} from 'react-bootstrap'
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
      <>
     
    <Layout></Layout>
     <Jumbotron style={{margin:'0rem',color:"whitesmoke",background:'#007a99',height:'100px',fontFamily:"Proxima Nova"}} className="text-center">
       <h1>Your Trust!! Our Pride!!</h1> *
    
      </Jumbotron> 





       <Crausal/>
       <Footer/>
     
    </>
   )

 }

export default Home;