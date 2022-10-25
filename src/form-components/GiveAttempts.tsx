import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequest, setAttemptsRequest] = useState<string>("0");

    function updateAttemptsRequest(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        setAttemptsRequest(event.target.value);
    }

    function use(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gain(): void {
        // If x in not a number, isNaN(x) will return true.
        if (!isNaN(parseInt(attemptsRequest))) {
            setAttemptsLeft(attemptsLeft + parseInt(attemptsRequest));
        } else {
            setAttemptsLeft(attemptsLeft);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>
                    Specify the requested number of attempts
                </Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter the requested number of attempts"
                    value={attemptsRequest}
                    onChange={updateAttemptsRequest}
                />
            </Form.Group>

            <Button onClick={use} disabled={attemptsLeft === 0}>
                use
            </Button>

            <Button onClick={gain}>gain</Button>

            <div>The number of attempts left is {attemptsLeft}.</div>
        </div>
    );
}
