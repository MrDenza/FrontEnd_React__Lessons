import React from "react";

import "./DoubleButton.css";

class DoubleButton extends React.Component {
    pressedBtn = (num) => {
        this.props.cbPressed(num);
    };

    render() {
        return(
            <div>
                <label htmlFor="btn-1">
                    <input type="button" id="btn-1" value={this.props.caption1} onClick={() => this.pressedBtn(this.props.caption1)}></input>
                </label>
                {this.props.children}
                <label htmlFor="btn-2">
                    <input type="button" id="btn-2" value={this.props.caption2} onClick={() => this.pressedBtn(this.props.caption2)}></input>
                </label>
            </div>
        );
    }
}

export default DoubleButton;