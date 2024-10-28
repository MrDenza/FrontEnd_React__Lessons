// import React, { Fragment } from "react";

// import "./ImgView.css";

// class ImgView extends React.Component {
    
//     state = {
//         srcForImg: '',
//         returnMsg: false,
//     }

//     checkImage(imageSrc, oldThis, firstStep) {
//         let img = new Image();
//         img.src = imageSrc;
//         img.onload = () => {
//             oldThis.setState({srcForImg: imageSrc});
//         };
//         (firstStep) ? img.onerror = () => {oldThis.checkImage('img/0.jpeg', oldThis, false);} 
//                     : img.onerror = () => {oldThis.setState({returnMsg: true});}
//     }

//     returnElem = () => {
//         console.log('test');   
//         if (this.state.returnMsg === true) {
//             return <span>Изображение недоступно!</span>;
//         } else if (this.state.srcForImg.length === 0) {
//             return "";
//         } else {
//             return <img src={this.state.srcForImg} alt={this.props.alt}></img>;
//         }
//     }

//     componentDidMount() { 
//         this.checkImage(this.props.src, this, true);
//     }

//     render() {
//         return (
//             <Fragment>
//                 {this.returnElem()}
//             </Fragment>
//         );
//     }
// }

// export default ImgView;



// in jsx : <ImgView src={("photo" in this.state.infoPosition) ? this.state.infoPosition["photo"] : this.props.objInfo.photo}
//                   alt={`Внешний вид ${("title" in this.state.infoPosition) ? this.state.infoPosition["title"] : this.props.objInfo.title}`}
//                   key={Math.random()}
//                   />