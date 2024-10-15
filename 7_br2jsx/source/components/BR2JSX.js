import React from "react";

import "./BR2JSX.css";

class BR2JSX extends React.Component {

    render() {
        let textAndBr = Array.from(this.props.text.split(/[<br><br/><br />]+/).reduce( (accText, elem, i) => {
                (accText.length === 0) ? accText.push(elem) : accText.push(<br key={i}/>, elem);
                return accText;

                // Ниже способ дороже по производительности? 
                // Каждый раз создание нового массива, деструктуризация,
                //    добавление в новый массив и с каждым разом объёмнее процедуры.
                // if (accText.length === 0) {
                //     return [elem];
                // }
                //return [...accText, <br key={i}/>, elem]; 
            }, [])
        )

        return (
            <div className="br2jsx">
                {textAndBr}
            </div>       
        );
    }
}

export default BR2JSX;