import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "cyan",
        "magenta"
    ];
    const DEFAULT_COLOR = COLORS[0];

    // This is the State (Model)
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    // This is the Control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "red",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="chosenColor"
                label="red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="chosenColor"
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "green",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="chosenColor"
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "orange",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="chosenColor"
                label="orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "purple",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="chosenColor"
                label="purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "yellow",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="chosenColor"
                label="yellow"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "cyan",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="chosenColor"
                label="cyan"
                value="cyan"
                checked={color === "cyan"}
            />
            <Form.Check
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "magenta",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="chosenColor"
                label="magenta"
                value="magenta"
                checked={color === "magenta"}
            />
            <div
                data-testid="colored-box"
                style={{
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            >
                You have chosen {color}.
            </div>
        </div>
    );
}
