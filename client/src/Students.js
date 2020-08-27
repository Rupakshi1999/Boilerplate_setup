import React, { Component } from "react";

class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("/api/students");
    const data = await response.json();
    this.setState({
      students: data,
    });
  }

  render() {
    // console.log(this.state.students);
    return (
      <div>
        <ul>
          {this.state.students.map((student) => {
            console.log(student);
            return <li key={student.id}>{student.firstName}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Students;
