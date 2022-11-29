import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import MainView from './Containers/MainView/MainView';
import BottomBar from './Components/BottomBar/BottomBar.js';
import DetailPhoto from './Components/DetailPhoto/DetailPhoto';
import Search from './Containers/Search/Search';
import Collections from './Containers/Collections/Collections';
import DetailCollection from './Components/DetailCollection/DetailCollection';
function App() {
  let style = {
    marginBottom: `${navigator.userAgent.match('CriOS')&&`86px`}`
  }
  return (
      <Router>
        <div className="App">
          <BottomBar/>
          <section style={style} className='scroller'>
            <Route path="/" exact component={MainView} />
            <Route path="/photo/:id" exact component={DetailPhoto} />
            <Route path="/search/" exact component={Search} />
            <Route path="/collections/" exact component={Collections} />
            <Route path="/collection/:id" exact component={DetailCollection} />
          </section>
          
        </div>
      </Router>
  );
}

export default App;