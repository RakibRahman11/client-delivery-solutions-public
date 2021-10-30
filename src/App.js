import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import PageError from './components/PageError/PageError';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddServices from './components/Services/AddServices/AddServices';
import Services from './components/Services/Services/Services';
import AuthProvider from './context/AuthProvider';
import MyOrder from './components/Orders/MyOrder/MyOrder';
import PlaceOrder from './components/Orders/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/addServices">
              <AddServices></AddServices>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/order">
              <MyOrder></MyOrder>
            </Route>
            <PrivateRoute exact path='/PlaceOrders/:id'>
            <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <PageError></PageError>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
