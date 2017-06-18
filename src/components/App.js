import React from 'react';
import Header from './Header';
import Topics from '../containers/Topics';
import Discussion from '../containers/Discussions';
import '../css/App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="content">
      <div className="content-index row">
        <div className="content-left column small-collapse">
          <div className="compact-topics show-for-small hide-for-large">
            hey
          </div>
          <div className="discussion-list">
            <Discussion />
          </div>
        </div>
        <div className="content-topics column shrink show-for-large row">
          <Topics />
        </div>
      </div>
    </div>
  </div>
);

export default App;
