
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Shared/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Shared/Footer/Footer';
import Register from './Components/Contact/Register';
import AuthProvider from './Contect/AuthProvider';
import SingleService from './Components/Pages/SingleService/SingleService';
import About from './Components/About/About';



function App() {
  return (
    <div className="App">
     
      <AuthProvider>
        <BrowserRouter>
          <Header></Header> 
          <Switch>
            
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <Route exact path='/services/:id'>
              <SingleService></SingleService>
            </Route>
           
            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/'>
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
