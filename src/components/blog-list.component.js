import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = props => (
  <tr>
    <td>{props.blog.username}</td>
    <td>{props.blog.description}</td>
    <td>{props.blog.author}</td>
    <td>{props.blog.title}</td>
    <td>{props.blog.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.blog._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteBlog(props.blog._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);
export default class BlogList extends Component {
  constructor(props) {
    super(props);

    this.deleteBlog = this.deleteBlog.bind(this);
    this.state = { blogs: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/blogs/")
      .then(Response => {
        this.setState({ blogs: Response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteBlog(id) {
    axios
      .delete("http://localhost:5000/blogs/" + id)
      .then(res => console.log(res.data));
    this.setState({
      blogs: this.state.blogs.filter(el => el._id !== id)
    });
  }
  blogList() {
    return this.state.blogs.map(blogs => {
      return <Blog blog={blogs} deleteBlog={this.deleteBlog} key={blogs._id} />;
    });
  }
  render() {
    return (
      <div>
        <h3>Logged Blogs</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Author</th>
              <th>Title</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.blogList()}</tbody>
        </table>
      </div>
    );
  }
}
