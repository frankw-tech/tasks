import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1> This is header text</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p> Hongbo Wang </p>
            <p> Hello World </p>
            <p>
                This is just a paragraph of text. It can go onto multiple lines,
                if you want.
            </p>
            <div>
                <p>How are you doing today?</p>
            </div>
            <div>
                Ordered List:
                <ol>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ol>
            </div>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Apollo_11_Launch_-_GPN-2000-000630.jpg/800px-Apollo_11_Launch_-_GPN-2000-000630.jpg"
                    alt="Apollo 11"
                />
            </div>
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
            </div>
            <div>
                This is <span style={{ color: "red" }}>colored text</span>.
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
                            <div
                                style={{
                                    border: "1px solid blue",
                                    padding: "4px",
                                    width: "50%",
                                    height: "1cm",
                                    background: "red"
                                }}
                            >
                                text
                            </div>
                            <p>First column.</p>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    border: "1px solid blue",
                                    padding: "4px",
                                    width: "50%",
                                    height: "1cm",
                                    background: "red"
                                }}
                            >
                                text
                            </div>
                            <p>
                                Second column. You can put whatever you want in
                                here, and it will be on the right side. Maybe
                                try adding an image?
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
