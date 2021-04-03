import React from 'react';
import axios from 'axios';
import './App.css';
import{HashRouter, Route, Link} from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Home from '../Home/Home';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <HashRouter>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/comments' exact>
          <Comments />
        </Route>
        <Route path="/feeling" exact>
          <Feeling />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path='/admin' exact>
          <Admin />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
