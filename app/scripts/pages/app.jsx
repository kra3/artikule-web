import React from 'react';
import Navigation from '../components/navigation.jsx'

const App = (props) => {
    return (
      <div className="pure-g">
        <Navigation />
        <div className="content pure-u-1 pure-u-md-22-24">
          {props.children}
        </div>
      </div>
    );
};

export default App;
