import React from 'react';

import './TitleShop.css';

class TitleShop extends React.Component {

  render() {
    return (
      <div className='TitleShop'>
        <h1 className='TitleShop_Text'>
          {this.props.question}
        </h1>
      </div>
    );
  }

}

export default TitleShop;
