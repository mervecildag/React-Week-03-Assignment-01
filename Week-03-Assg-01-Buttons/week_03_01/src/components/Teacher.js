import React from "react"

// teacher component 
const Teacher = (props) => {
    return (
       <div data-testid="teacher">
      <p className="mb-1 fw-bolder">
        I am a {props.person.profession}, my name is {props.person.name}
      </p>
    </div>
    )
  }
export default Teacher;