import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import BlogsList from "./components/blog-list.component";
import EditBlog from "./components/edit-blog.component";
import CreateBlog from "./components/create-blog.component";
import CreateUser from "./components/create-user.component";
function App() {
  return (
    <Router>
      {/* the following lines are all components that we should create , navbar is a component BlogList is a component and so on 
    react route helps us to path in url in different component that we would create*/}
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={BlogsList} />
        <Route path="/edit/:id" exact component={EditBlog} />
        <Route path="/create" exact component={CreateBlog} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
