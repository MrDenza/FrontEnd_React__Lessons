import React from "react";

function withRainbowFrame(colors) {
    return (
        (Comp) => {
            class UpdateComp extends React.Component {
                render() {

                    let RainbowElem = colors.reduce( (acc, c) => {
                        return <div style={{border: `5px solid ${c}`, padding: "10px"}}>{acc}</div>    
                    }, <Comp {...this.props}/>);

                    return <div> {RainbowElem} </div>
                }
            }
        return UpdateComp;
        }
    );   
}

// let withRainbowFrame = (colors) => (Comp) => (props) => 
//     <div> {
//         colors.reduce( (acc, c, i) => {
//             return <div key={i} style={{border: `5px solid ${c}`, padding: "10px"}}>{acc}</div>   
//         }, <Comp {...props}/>)
//     } </div>;

export { withRainbowFrame };