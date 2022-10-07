import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays: string[] = [
        "New Year's Day (January 1) 🎆",
        "Independence Day (July 4) 🗽",
        "Labor Day (first Monday in September) ⚒️",
        "Thanksgiving Day (fourth Thursday in November) 🦃",
        "Christmas Day (December 25) 🎄"
    ];

    const [holiday, setHoliday] = useState<string>(holidays[0]);

    // const [holiday, setHoliday] = useState<string>(
    //     "New Year's Day (January 1)"
    // );

    function changeByAlphabet() {
        if (holiday === "Christmas Day (December 25) 🎄") {
            setHoliday("Independence Day (July 4) 🗽");
        } else if (holiday === "Independence Day (July 4) 🗽") {
            setHoliday("Labor Day (first Monday in September) ⚒️");
        } else if (holiday === "Labor Day (first Monday in September) ⚒️") {
            setHoliday("New Year's Day (January 1) 🎆");
        } else if (holiday === "New Year's Day (January 1) 🎆") {
            setHoliday("Thanksgiving Day (fourth Thursday in November) 🦃");
        } else if (
            holiday === "Thanksgiving Day (fourth Thursday in November) 🦃"
        ) {
            setHoliday("Christmas Day (December 25) 🎄");
        }
    }

    function changeByYear() {
        if (holiday === "New Year's Day (January 1) 🎆") {
            setHoliday("Independence Day (July 4) 🗽");
        } else if (holiday === "Independence Day (July 4) 🗽") {
            setHoliday("Labor Day (first Monday in September) ⚒️");
        } else if (holiday === "Labor Day (first Monday in September) ⚒️") {
            setHoliday("Thanksgiving Day (fourth Thursday in November) 🦃");
        } else if (
            holiday === "Thanksgiving Day (fourth Thursday in November) 🦃"
        ) {
            setHoliday("Christmas Day (December 25) 🎄");
        } else if (holiday === "Christmas Day (December 25) 🎄") {
            setHoliday("New Year's Day (January 1) 🎆");
        }
    }

    return (
        <div>
            <div>{`Holiday: ${holiday}`}</div>
            <Button onClick={changeByAlphabet}>{"Advance by Alphabet"}</Button>
            <Button onClick={changeByYear}>{"Advance by Year"}</Button>
        </div>
    );
}
