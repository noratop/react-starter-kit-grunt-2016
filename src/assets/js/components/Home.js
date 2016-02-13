import React from 'react';
import {Link} from 'react-router';

var Home = React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/repos">Repos</Link></li>
          <li><Link to="/followers">Followers</Link></li>
        </ul>
      </div>
    )
  }
});

export default Home;
