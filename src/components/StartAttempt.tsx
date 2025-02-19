import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function stopQuiz(): void {
        setProgress(false);
    }

    function startQuiz(): void {
        setProgress(true);
        setAttempt(attempt - 1);
    }

    function mulligan(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            Attempts: <span>{attempt} </span>
            <Button onClick={startQuiz} disabled={progress || attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
