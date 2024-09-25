import React from 'react';

import './TitleShop.css';

class TitleShop extends React.Component {

  render() {
    return (
      <div className='TitleBox'>
        <h1 className='TitleBox_text'>
            {this.props.title}
        </h1>
        <address className='TitleBox_address'>
            {"Адрес: " + this.props.address}
        </address>
      </div>
    );
  }

}

export default TitleShop;
