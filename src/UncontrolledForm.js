import React from "react";

class UncontrolledForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`
    firstName: ${this.firstName.value}
    lastName: ${this.lastName.value}
    email: ${this.email.value}
    phone: ${this.pnum.value}
    `);
  }
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

          <br />
          <br />

          <label>Last Name</label>
          <input
            type="text"
            ref={input => {
              this.lastName = input;
            }}
          />

          <br />
          <br />

          <label>Email</label>
          <input
            type="email"
            ref={input => {
              this.email = input;
            }}
          />

          <br />
          <br />

          <label>Phone Number</label>
          <input
            type="text"
            ref={input => {
              this.pnum = input;
            }}
          />

          <br />
          <br />

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
