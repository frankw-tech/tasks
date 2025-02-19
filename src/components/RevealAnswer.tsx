import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function changeVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }

    // Only includes <div>42</div> if `visible` is true
    return (
        <div>
            <Button onClick={changeVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
