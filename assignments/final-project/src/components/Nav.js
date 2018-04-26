import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav=props=>{
  
  return(
      <div>
          <ul>
            <li>
              <Link to="/" >Today</Link>
            </li>
            <li>
              <Link to="/tomorrow" >Tomorrow</Link>
            </li>
        </ul>
      </div>
  );
}
export default Nav;
