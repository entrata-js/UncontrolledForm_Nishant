import React from "react";

class UncontrolledForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    alert(`
    firstName: ${this.firstName.value}
    lastName: ${this.lastName.value}
    email: ${this.email.value}
    phone: ${this.pnum.value}
    `);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            ref={input => {
              this.firstName = input;
            }}
          />

          <label>Last Name</label>
          <input
            type="text"
            ref={input => {
              this.lastName = input;
            }}
          />

          <label>Email</label>
          <input
            type="email"
            ref={input => {
              this.email = input;
            }}
          />

          <label>Phone Number</label>
          <input
            type="text"
            ref={input => {
              this.pnum = input;
            }}
          />

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
