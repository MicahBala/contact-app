import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  submitContact = (e) => {
    e.preventDefault();
    if (this.state.email === "" || this.state.name === "") {
      alert("All fields are madatory!");
      return;
    }

    this.props.handleAddContact(this.state);
    this.setState({ name: "", email: "" });

    // Redirect to the contact list page
    // Using the prop history.push()
    this.props.history.push("/");
    // console.log(this.props);
  };

  render() {
    return (
      <div className="content">
        <form onSubmit={this.submitContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Full names"
            />
          </label>{" "}
          <br />
          <label>
            Email
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="Email address"
            />
          </label>{" "}
          <br />
          <button className="btn">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
