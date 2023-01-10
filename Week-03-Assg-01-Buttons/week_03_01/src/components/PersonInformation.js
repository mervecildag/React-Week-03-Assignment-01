import React from "react";
import Teacher from "./Teacher";
import Student from "./Student";
import { useState } from "react";

//divided their staff according to their profession
const PersonInformation = ({personList}) => {
    const [students ,setStudents]=useState(false) 
    const HandleClickforStudent =()=>{
        setStudents(students =>!students)
    }
    const [teachers, setTeachers]=useState(false)
    const HandleClickforTeacher=() =>{
        setTeachers(teachers=>!teachers)
    }
    const studentList= personList.filter(person => person.profession==="Student")
                                 .map((student, index)=> <Student person={student} key={index} />)
    const teacherList=personList.filter(person => person.profession==="Teacher")
                                .map((teacher, index)=> <Teacher person={teacher} key={index}  />)
    
      return (
      <div>
        <div>
            <button type="button" 
                    data-testid="button-students"
                    className="btn btn-dark text-white rounded-3 px-3 py-2 me-4"
                    onClick={HandleClickforStudent}>{students ? " Hide Students" : " Show Students" }</button>
            <button type="button" 
                    data-testid="button-teachers"
                    className="btn btn-danger  text-white rounded-3 px-3 py-2"
                    onClick={HandleClickforTeacher}>{teachers ? "Hide Teachers" : "Show Teachers" }</button>
        </div>
        <div className="d-flex">
           {students && (
            <div  data-testid="student-list" className="text-danger fs-5 bg-dark px-3 mt-4 me-4">
                <h2 className="text-white text-decoration-underline mt-2  ">Student List</h2>
                {studentList} 
            </div>
           ) 
            }
            {teachers && (
          <div data-testid="teacher-list" className="text-dark fs-5 bg-danger px-3 mt-4">
          <h2 className="text-white text-decoration-underline mt-2  ">Teachers List</h2>
          {teacherList}
        </div>
            )
             }
            
        </div>
      </div>
       
      )
    }

    export default PersonInformation
    