import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDice, setLeftId] = useState<number>(1);
    const [rightDice, setRightId] = useState<number>(2);

    function changeLeftId() {
        const leftNumber = d6();
        setLeftId(leftNumber);
    }

    function changeRightId() {
        const rightNumber = d6();
        setRightId(rightNumber);
    }

    return (
        <div>
            {/* {leftDice === 1 && rightDice === 1 && <div>{"Lose"}</div>}
            {leftDice === rightDice && <div>{"Win"}</div>} */}
            {leftDice === 1 && rightDice === 1 ? (
                <div>{"Lose"}</div>
            ) : leftDice === rightDice ? (
                <div>{"Win"}</div>
            ) : null}
            <Button data-testid="left-die" onClick={changeLeftId}>
                {`Roll Left ${leftDice}`}
            </Button>
            <Button data-testid="right-die" onClick={changeRightId}>
                {`Roll Right ${rightDice}`}
            </Button>
            ;
        </div>
    );
}
