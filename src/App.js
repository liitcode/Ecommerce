import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <Header />
          <Home/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
