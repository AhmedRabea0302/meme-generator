
import React from "react";

export default function Box(props) {
    const [on, setOn] = React.useState(props.on);
    function toggle() {
        setOn(prevOn => {
            return prevOn = !prevOn;
        })
    }
    return (
        <div className={props.back} onClick={toggle}></div>
    );
}