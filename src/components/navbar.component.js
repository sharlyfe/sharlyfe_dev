import React, { Component } from "react";
import { Link } from "react-router-dom";

{
  /* most of the react component will start in the following 
  fashion and they import react and component from react
  and also  since we are using react router we import link from 
  react router dom  to link to different route*/
}
{
  /* all  components will start the same thing and 
they have to render something which right now is a return
in this case we use bootstrap styling and if you wanna havbe more reference just check their page for that purpose*/
}
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expend-lg">
        <Link to="/" ClassNAme="navbar-brand">
          Sharlyfe
        </Link>
        <div ClassNAme="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Blogs
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
