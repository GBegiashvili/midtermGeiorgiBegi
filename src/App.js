import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import SignIn from './screens/SignIn'
import Posts from './screens/Posts'


function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Switch>
                <Route path={"/"} exact component={SignIn} />
                <Route path={"/posts"} component={Posts} render={()=> {
                  if(localStorage.getItem('token')) {
                    return <Posts/>;
                 } else {
                    return <Redirect to='/' />; 
                 }
                }} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
