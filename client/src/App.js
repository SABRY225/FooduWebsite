import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Loyout from "./components/Layout/Layout"
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Deashboorduser from "./pages/user/Deashboorduser";
import Forgetpassword from "./pages/Auth/Forgetpassword";
import Private from "./components/Layout/Routes/Private";
import Admin  from "./pages/Admin/Admin";
import Profile from "./pages/Admin/Profile/Profile";
import Product from "./pages/Admin/products/Product";
import Order from "./pages/Admin/order/Order";
import EditeParsonProfile from "./pages/Admin/Profile/EditeParsonProfile";
import ParsonProfile from "./pages/Admin/Profile/ParsonProfile";
import User from "./pages/Admin/user/User";
import ShowProduct from "./pages/Admin/products/ShowProduct";
import CreateProduct from "./pages/Admin/products/CreateProduct";
import WaitOrder from "./pages/Admin/order/WaitOrder";
import ProcessOrder from "./pages/Admin/order/ProcessOrder";
import FinshOrder from "./pages/Admin/order/FinshOrder";
import ShowOrder from "./pages/Admin/order/ShowOrder";
import Chart from "./pages/Admin/chart/Chart";
import ProfileUser from "./pages/user/ProfileUser";
import OrderUser from "./pages/user/OrderUser";

function App() {
  const routes =createBrowserRouter([
    {
      path:"/" ,element:<Loyout />,children:[
        {index:true, element:<HomePage />},
        {path:"about" ,element:<About />},
        {path:"deshboard" ,element:<Private />,children:[
          {path:"user",element:<Deashboorduser />,children:[
            {index:true ,element:<ProfileUser />},
            {path:"order" ,element:<OrderUser />},
          ]},
          {path:"admin",element:<Admin />,children:[
          {index:"profile",element:<Profile />,children:[
              {index:true,element:<ParsonProfile />},
              {path:"editprofile",element:<EditeParsonProfile />},
            ]},
            {path:"product",element:<Product />,children:[
              {index:true,element:<ShowProduct />},
              {path:"createproduct",element:<CreateProduct />},
            ]},
            {path:"order",element:<Order />,children:[
              {index:true,element:<ShowOrder />},
              {path:"waiting",element:<WaitOrder />},
              {path:"processing",element:<ProcessOrder />},
              {path:"finshing",element:<FinshOrder />},
            ]},
            {path:"user",element:<User />},
            {path:"chart",element:<Chart />},
          ]}
        ]},
        {path:"forget-password" ,element:<Forgetpassword />},
        {path:"register" ,element:<Register />},
        {path:"login" ,element:<Login />},
        {path:"policy" ,element:<Policy />},
        {path:"contact" ,element:<Contact />},
        {path:"*" ,element:<Pagenotfound />}
      ]
    }
  ])
  return (
    <>
		<div className="main-container" >
      <RouterProvider router={routes} />
		</div>
    </>
  );
}

export default App;