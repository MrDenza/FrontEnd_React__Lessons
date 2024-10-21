import React, {Fragment} from "react";

import "./Frame.css";
import DoubleButton from "./DoubleButton";
import { withRainbowFrame } from "./withRainbowFrame";

let colors = [
    'red',
    'orange',
    'yellow',
    'green',
    '#00BFFF',
    'blue',
    'purple',
    // '#8b8b8b', 
    // '#7f1594',
    // '#09ff00', 
    // 'orange', 
    // '#003cff', 
    // '#ff0000',
    // 'darksalmon',
    // 'yellow',
];

const DoubleButtonWithCB = withRainbowFrame(colors)(DoubleButton);

class Frame extends React.Component {

    pressedBtn = (num) => {
        alert('Нажата клавиша - ' + num);
    }

    render() {
        return (
            <Fragment>
                <br/>
                <DoubleButton caption1 = {"однажды"} 
                              caption2 = {"пору"} 
                              cbPressed = {this.pressedBtn}> в студёную зимнюю </DoubleButton>
                <br/>
                <DoubleButtonWithCB caption1 = {"я из лесу"} 
                                    caption2 = {"мороз" } 
                                    cbPressed = {this.pressedBtn}> вышел, был сильный </DoubleButtonWithCB>
            </Fragment>
        );
    }
}

export default Frame;