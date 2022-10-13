import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

// Props and Attributes
interface colorProps {
    colorIndex: number;
    setColorIndex: (newColor: number) => void;
}

function ChangeColor({ colorIndex, setColorIndex }: colorProps): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: colorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                // Change DEFAULT_COLOR_INDEX
                // backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    // Change DEFAULT_COLOR_INDEX
    // Initial Line 45: <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}

// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// export const COLORS = ["red", "blue", "green"];
// const DEFAULT_COLOR_INDEX = 0;

// function ChangeColor(): JSX.Element {
//     const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
//     return (
//         <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
//             Next Color
//         </Button>
//     );
// }

// function ColorPreview(): JSX.Element {
//     return (
//         <div
//             data-testid="colored-box"
//             style={{
//                 width: "50px",
//                 height: "50px",
//                 // DEFAULT_COLOR_INDEX
//                 backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
//                 display: "inline-block",
//                 verticalAlign: "bottom",
//                 marginLeft: "5px"
//             }}
//         ></div>
//     );
// }

// export function ColoredBox(): JSX.Element {
//     // DEFAULT_COLOR_INDEX
//     return (
//         <div>
//             <h3>Colored Box</h3>
//             <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
//             <div>
//                 <ChangeColor></ChangeColor>
//                 <ColorPreview></ColorPreview>
//             </div>
//         </div>
//     );
// }
