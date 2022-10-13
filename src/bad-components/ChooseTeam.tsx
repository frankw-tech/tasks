import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    // Remove unused declaration for: 'setAllOptions'
    // const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [allOptions] = useState<string[]>(PEOPLE);

    const [team, setTeam] = useState<string[]>([]);

    // Add newMember: string as parameter of chooseMember function
    function chooseMember(newMember: string) {
        // No detection of changed value, reference equality
        // VERY BAD!!!
        /*
        if (!team.includes(newMember)) {
            team.push(newMember);
        }
        */

        if (!team.includes(newMember)) {
            setTeam([...team, newMember]);
        }
    }

    function clearTeam() {
        // No detection of changed value, reference equality
        // VERY BAD!!!
        /*
        team = [];
        */

        setTeam([]);
        // const newTeam: string[] = [];
        // setTeam(newTeam);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            {/* <Button onClick={chooseMember} size="sm">
                                {option}
                            </Button> */}
                            <Button
                                onClick={() => chooseMember(option)}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
