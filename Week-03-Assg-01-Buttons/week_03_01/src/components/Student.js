import React from "react"

// student component 
const Student = (props) => {
    return (
      <div data-testid="student">
        <p className="mb-2 fw-bolder">
          I am a {props.person.profession}, my name is {props.person.name}
        </p>
      </div>
    )
  }
  

export default Student;