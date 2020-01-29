import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class Navbar extends Component {
  /*always call super of subclass and props is kinda argument
  that you pass in constructor */
  constructor(props) {
    super(props);
    /* state is how you define variable in react*/
    // you should bind this method to each method
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      description: "",
      date: new Date(),
      title: "",
      author: "",
      /* on our page will be drop down menu to show
      all the users */
      users: []
    };
  }
  // for now we hardcode a user for testing
  //componentdid mount this is react component cycle method that react
  // call automatically
  componentDidMount() {
    //will automatically be called right before anything
    // displays on the page
    this.setState({
      users: ["test user"],
      username: "test user"
    });
  }

  /* create a method when user name is changed we set the 
  stage */
  onChangeUsername(e) {
    /* we always use set state react we dont use this. .. */
    this.setState({
      /* target is the text box that we create in form */
      username: e.target.value
    });
  }
  onChangeDescription(e) {
    /* we always use set state react we dont use this. .. */
    this.setState({
      /* target is the text box that we create in form */
      description: e.target.value
    });
  }

  onChangeDate(date) {
    /* we always use set state react we dont use this. .. */
    this.setState({
      /* target is the text box that we create in form */
      date: date
    });
  }
  onChangeTitle(e) {
    /* we always use set state react we dont use this. .. */
    this.setState({
      /* target is the text box that we create in form */
      title: e.target.value
    });
  }

  onChangeAuthor(e) {
    /* we always use set state react we dont use this. .. */
    this.setState({
      /* target is the text box that we create in form */
      author: e.target.value
    });
  }

  /* submit method */

  onSubmit(e) {
    e.preventDefault();
    /* you can create variable inside the method */
    const blog = {
      username: this.state.username,
      description: this.state.description,
      title: this.state.title,
      author: this.state.author,
      date: this.state.date
    };
    console.log(blog);
    // this will take back user to list of exercises
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Blog </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {/* this makes the code to write some javascript here and . map allows us
              the get elements from the array here take the user and for each user 
              return option of a key value pair */}
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label> Title : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label> author : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
