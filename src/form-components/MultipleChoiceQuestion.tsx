import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function updateSelectedChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>{" "}
            <div>
                <Form.Group controlId="answers">
                    <Form.Label>Select an answer:</Form.Label>
                    <Form.Select
                        value={selectedChoice}
                        onChange={updateSelectedChoice}
                    >
                        <option value={options[0]}>{options[0]}</option>
                        <option value={options[1]}>{options[1]}</option>
                        <option value={options[2]}>{options[2]}</option>
                    </Form.Select>
                </Form.Group>
                The answer is
                {selectedChoice === expectedAnswer ? (
                    <span>{"✔️"}</span>
                ) : (
                    <span>{"❌"}</span>
                )}
                .
            </div>
        </div>
    );
}
