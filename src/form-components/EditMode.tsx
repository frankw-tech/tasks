import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    // This is the State (Model)
    const [isEditable, setisEditable] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // This is the Control
    function updateIsEditable(event: React.ChangeEvent<HTMLInputElement>) {
        setisEditable(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    // This is the View
    // {isEditable === true && (
    //     <div>
    //         <Form.Group id="textbox">
    //             <Form.Label>Name:</Form.Label>
    //             <Form.Control value={name} onChange={updateName} />
    //         </Form.Group>
    //         <div>
    //             <Form.Check
    //                 type="checkbox"
    //                 id="is-student-check"
    //                 label="Student?"
    //                 checked={isStudent}
    //                 onChange={updateIsStudent}
    //             />
    //         </div>
    //     </div>
    // )}
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editable-check"
                label="Text"
                checked={isEditable}
                onChange={updateIsEditable}
            />

            {isEditable === true && (
                <Form.Group id="textbox">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            )}

            {isEditable === true && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            )}

            <div>
                {name} is {isStudent ? "a student" : "not a student"}.
            </div>
        </div>
    );
}
