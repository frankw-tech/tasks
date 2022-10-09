import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1> Add a header</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.s
            </p>
            <p> Hongbo Wang </p>
            <p> Hello World </p>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Apollo_11_Launch_-_GPN-2000-000630.jpg/800px-Apollo_11_Launch_-_GPN-2000-000630.jpg"
                    alt="Apollo 11"
                />
            </div>
            <div>
                Ordered List:
                <ol>
                    <li>First element</li>
                    <li>Second element</li>
                    <li>Third element</li>
                </ol>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <p>First column.</p>
                            <div
                                style={{
                                    border: "1px solid blue",
                                    padding: "4px",
                                    width: "50%",
                                    height: "1cm",
                                    background: "red"
                                }}
                            >
                                Text
                            </div>
                        </Col>
                        <Col>
                            <p>Second column.</p>
                            <div
                                style={{
                                    border: "1px solid blue",
                                    padding: "4px",
                                    width: "50%",
                                    height: "1cm",
                                    background: "red"
                                }}
                            >
                                Text
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
