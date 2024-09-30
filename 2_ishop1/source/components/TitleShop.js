import React from "react";

import "./TitleShop.css";

class TitleShop extends React.Component {

  render() {
    return (
      <div className="title-box">
        <h1 className="title-box__text">
            {this.props.title}
        </h1>
        <address className="title-box__address">
            {"Адрес: " + this.props.address}
        </address>
      </div>
    );
  }

}

export default TitleShop;
