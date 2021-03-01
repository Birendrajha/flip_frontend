import React,{Suspense,lazy} from 'react'
import Layout from '../../component/Layout';
import Footer from '../../component/Footer';
//comment out
//import Grid from '../../component/Grid';
//import UserList from '../../component/UserList';
//import Addproduct from '../../component/Addproduct';
//import AdminOrderList from '../../component/AdminOrderList';
import Access from '../../component/Access';
import {Jumbotron} from 'react-bootstrap';
import {Route,Switch} from 'react-router-dom';
//import Updateorder from '../../component/Updateorder';
//import Updateproduct from '../../component/Updateproduct';
//import Profitpage from '../../component/Profitpage';
//import Orderdetail from '../../component/Orderdetail';
//import Seeorder from '../../component/Seeorder';
 
//lazy

const Grid = lazy(()=>import('../../component/Grid'));
const UserList = lazy(()=>import('../../component/UserList'));
const Addproduct = lazy(()=>import('../../component/Addproduct'));
const AdminOrderList = lazy(()=>import('../../component/AdminOrderList'));
const Updateorder = lazy(()=>import('../../component/Updateorder'));
const Updateproduct = lazy(()=>import('../../component/Updateproduct'));
const Profitpage = lazy(()=>import('../../component/Profitpage'));
const Orderdetail = lazy(()=>import('../../component/Orderdetail'));
const Seeorder = lazy(()=>import('../../component/Seeorder'));


const Admin  = (props) => {
  return(
    <>
    <Layout></Layout>
    <Jumbotron style={{margin:'auto',background:'#777777',height:'100px', fontFamily:"Proxima Nova", fontSize:"38px", fontWeight:"bold"}} className="text-center">
      <h1>"Invest in your dreams. Grind now. Shine later."</h1>
      </Jumbotron>
       <div className="admnlayout">
                
      
      <Access/>
     
      <Suspense fallback={<h3>Loading...</h3>}>
      <Switch>
     <Route path="/admin/" exact component={Grid} />
     <Route path="/admin/userList" exact component={UserList}/>
     <Route path="/admin/addproduct" exact component={Addproduct}/>
     <Route path="/admin/order" exact component={AdminOrderList}/>
     <Route path="/admin/updateorder" exact component={Updateorder} />
     <Route path="/admin/orderdetail" exact component={Orderdetail} />
     <Route path="/admin/profit" exact component={Profitpage} />
     <Route path="/admin/updateproduct/:productid" exact component={Updateproduct} />
     <Route path="/admin/seeorder/:userid" exact component={Seeorder} />
        </Switch>
        </Suspense>
        </div>

     <Footer/>
       
      </>
   )

 }

export default Admin;


