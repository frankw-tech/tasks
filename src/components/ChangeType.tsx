import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestion(): void {
        if (question === "multiple_choice_question") {
            setQuestion("short_answer_question");
        } else if (question === "short_answer_question") {
            setQuestion("multiple_choice_question");
        }
    }

    return (
        <div>
            <Button onClick={changeQuestion}>Change Type</Button>
            {question === "multiple_choice_question"
                ? "Multiple Choice"
                : "Short Answer"}
        </div>
    );
}
