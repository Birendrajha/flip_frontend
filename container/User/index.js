import React,{Suspense,lazy} from 'react'
import Layout from '../../component/Layout';
//import Userdetail from '../../component/Userdetail';
//import Placeorder from '../../component/Placeorder';
//import Productstock from '../../component/Productstock';
//import Userorder from '../../component/Userorder';
//import Userorderdetail from '../../component/Userorderdetail';
import Footer from '../../component/Footer';
import Accessuser from '../../component/Accessuser';
import {Jumbotron} from 'react-bootstrap';
import {Route,Switch} from 'react-router-dom';
//lazy loading
const Productstock = lazy(()=>import('../../component/Productstock'));
const Userorder = lazy(()=>import('../../component/Userorder'));
const Userorderdetail = lazy(()=>import('../../component/Userorderdetail'));
const Userdetail = lazy(()=>import('../../component/Userdetail'));
const Placeorder = lazy(()=>import('../../component/Placeorder'));

const User  = (props) => {
  return(
    <>
    <Layout></Layout>
    <Jumbotron style={{margin:'0rem',background:'#777777',height:'100px', fontFamily:"Proxima Nova", fontSize:"38px", fontWeight:"bold"}} className="text-center">
      <h1>"Soon is not as good as now"</h1>
      </Jumbotron>
<div className="admnlayout">
       <Accessuser/>
         
       <Suspense fallback={<p>Loading...</p>}>
       <Switch>
      <Route path="/user/" exact component={Userdetail} />
      <Route path="/user/order" exact component={Userorder}/>
      <Route path="/user/placeorder" exact component={Placeorder}/>
      <Route path="/user/productstock" exact component={Productstock}/>
      <Route path="/user/orderdetail" exact component={Userorderdetail}/>
     </Switch> 
     </Suspense>
  </div>
    <Footer/>
    </>
   )

 }

export default User;