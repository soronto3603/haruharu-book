import React, { Component } from 'react';

import Img from 'react-image'

class BookItem1 extends React.Component {
  static defaultProps={
    info:{
      id:-1,
      name:"가장 빨리 만나는 Go 언어",
      image:"https://bookthumb-phinf.pstatic.net/cover/091/029/09102978.jpg?type=m140&udate=20160218",
      author:"이재홍",
      publisher:"길벗",
      publishDate:"2015.06.01",
      price:"25,200",
      dePrice:"28,000"
    }
  }
    render() {
      const {
        id,name,image,author,publisher,publishDate,price,dePrice
      } = this.props.info;

      return (
        <div className="container">
          <div className="title-container">
            {name}
          </div>
          <div className="image-container">
            <Img src={image} />
          </div>
          <div className="info-container">
            <div>{author}
              <font className="gray-font">|</font> {publisher}
              <font className="gray-font">|</font> {publishDate}
            </div>
            <div>
              <font className="price-font">{price}</font><font style={{fontWeight:"Bold"}}>원</font>
              <font className="de-price-font"> {dePrice}원</font>
              <font className="percent-font"> -10%</font>
            </div>
          </div>

        </div>
      );
    }
}

export default BookItem1;
