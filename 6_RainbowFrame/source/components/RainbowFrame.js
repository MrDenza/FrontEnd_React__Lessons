import React, {Fragment} from "react";

import "./RainbowFrame.css";

class RainbowFrame extends React.Component {

    render() {
        let RainbowElem = this.props.colors.reduce( (acc, c, i) => {
            return (
                <div key={i} style={{border: `5px solid ${c}`, padding: "10px"}}>{acc}</div>
            );   
        }, this.props.children);

        return (
            <Fragment>
                {RainbowElem}
            </Fragment>
        );
    }
}

export default RainbowFrame;