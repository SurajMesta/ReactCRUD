import React from 'react';
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Create from './components/Create'
import Edit from './components/Edit'
import Delete from './components/Delete'


class App extends React.Component{
  render(){
    return(
        <Router>
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
              <Link to="/" className="navbar-brand">CRUD</Link>
              <button className="navbar-toggle" data-toggle="collapse" data-target="#myDiv">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              </div>

              <div className="navbar-collapse collapse" id="myDiv">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/create">Create</Link></li>
                </ul>
              </div>
             
            </div>
          </nav>

          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/create" component={Create}/>
              <Route exact path="/edit/:id" component={Edit}/>
              <Route exact path="/delete/:id" component={Delete}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App;
