import React, { Fragment, Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Client from './components/Client'
import Quote from './components/Quote';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss'
import Auth from './auth/Auth'
import axios from 'axios';
import ClientList from './components/ClientList';
import QuoteList from './components/QuoteList';
import UpdateClient from './components/UpdateClient';
import UpdateQuote from './components/UpdateQuote';
import DeleteQuote from './components/DeleteQuote';





class App extends React.Component{
  componentDidMount() {
    const cofig = {
      headers: {
        Authorization: "Bearer" + localStorage.getItem('token')
      }
    }
    // axios.get('http://localhost:3001/user', config);
    // .then{
    //   res =>
    //   console.log(res)
    // }
    // .catch{}
  }
  render(){
    return(
      <Router>
    <div className="App">
      <Switch>
      <Route path="/user">
      <Auth />
      </Route>
      <Route path="/client">
        <Fragment>
      <Client />
      <UpdateClient />
         <ClientList />
         
       </Fragment>
        </Route>
        <Route path = "/quote">
          <Fragment>
        <Quote />
        <UpdateQuote />
        <DeleteQuote/>
          <QuoteList />
          </Fragment>
        </Route>
    </Switch>
      
    
  </div>
  </Router>
    )
  }
}

export default App;


// function App() {
//   const [sessionToken, setSessionToken] = useState('');

// useEffect(() => {
//   if (localStorage.getItem('token')){
//     setSessionToken(localStorage.getItem('token'));
//   }
// }, [])

// const updateToken = (newToken) => {
//   localStorage.setItem('token', newToken);
//   setSessionToken(newToken);
//   console.log(sessionToken);
// }

// const clearToken = () => {
//   localStorage.clear();
//   setSessionToken('');
// }

// const protectedViews = () => {
//   return(sessionToken === localStorage.getItem('token') ? <SplashPage token={sessionToken}/>
//   : <Auth updateToken={updateToken}/>)
  
// }

//   return (
//     <div >
//       <Header clickLogout={clearToken}/>
//       {protectedViews()}
//       <Footer />
//     </div>
//   );
// }

// export default App;