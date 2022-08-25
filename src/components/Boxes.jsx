import React from "react";
import boxesdata from "../assets/boxesdata";
import Box from "./Box";
export default function Boxes() {
    const [boxes, setBoxesData] = React.useState(boxesdata);
    const mappedBoxes = boxes.map(box => {
    const back = box.on ? 'filled' : 'transparent';
        return (
            <Box key={box.id} back={back}/>
        );
    });

    return (
        <div className="boxes">
            {mappedBoxes}
        </div>
    );
}