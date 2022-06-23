import React from "react";
import Student from "./Student";

function StudentList(props) {
    return (
        <div>
            <ul>
                {
                    props.studentListVar.map(
                        (stud, index) => {
                            return (<Student
                                setStudentId={props.setStudentId}
                                setStudentName={props.setStudentName}
                                setStudentEmail={props.setStudentEmail}
                                setStudentPhone={props.setStudentPhone}
                                setStudentList={props.setStudentList}
                                student={stud} key={index} />)
                        }
                    )
                }
            </ul>
        </div>
    )
}
export default StudentList;