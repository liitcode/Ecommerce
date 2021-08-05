import React,{useEffect, lazy, Suspense } from 'react';
import './App.scss';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux';
import { auth } from './utils/firebase';
import { setUser } from './redux/actions';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Loading from './components/Loading/Loading';
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import SingleProduct from './pages/SingleProduct/SingleProduct';
// import Checkout from './pages/Checkout/Checkout';
// import Payment from './pages/Payment/Payment';
// import Orders from './pages/Orders/Orders';

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Payment = lazy(() => import("./pages/Payment/Payment"));
const Orders = lazy(() => import("./pages/Orders/Orders"));

const promise = loadStripe(
  "pk_test_51JKKuCSAyyHr61DuLAwiFnZDH7IduDWOZmuojZ86halyin7LA7u77Q7OWHVohSyGcLY8o8FEHRTyfmh6pv0mDNSr00zx4p4r2A"
);

function App() {
  let dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(setUser(authUser));
      }else {
        dispatch(setUser(null));
      }
    })
  },[dispatch]);

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Suspense fallback={<Loading/>} >
        <Route path='/product/:id'>
          <Header />
          <SingleProduct/>
        </Route>
        <Route path='/orders'>
          <Header />
          <Orders/>
        </Route>
        <Route path='/checkout'>
          <Header />
          <Checkout/>
        </Route>
        <Route path='/payment'>
          <Header/>
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route exact path='/'>
          <Header />
          <Home/>
        </Route>
        </Suspense>  
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
