import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    // Only check the first character
    // VERY BAD!!!
    // function verifyAnswer(event: React.ChangeEvent<HTMLInputElement>) {
    //     if (answer === expectedAnswer) {
    //         setAnswer("✔️");
    //     } else {
    //         setAnswer("❌");
    //     }
    // }

    return (
        <div>
            <h3>Check Answer</h3>
            <div>The expectedAnswer is {expectedAnswer}.</div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>
                The answer is
                {answer === expectedAnswer ? (
                    <span>{"✔️"}</span>
                ) : (
                    <span>{"❌"}</span>
                )}
                .
            </div>
        </div>
    );
}
