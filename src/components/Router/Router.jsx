import { createBrowserRouter } from 'react-router-dom';
import App from '../../App.jsx';
import Home from '../../pages/Home/Home.jsx';
import PlaceOrder from '../../pages/PlaceOrder/PlaceOrder.jsx';
import Cart from '../../pages/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    
    path: "/",
    element:<App/>,
    children:[
        {path:"/",element:<Home/>,},
        {path:"/cart",element:<Cart/>,},
        {path:"/order",element:<PlaceOrder/>,},
       
    ]
  },
]);

export default router;
