import React, { Component } from 'react';
import BookItem1 from './BookItem1';



class BookInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    const list = data.map(
      info => (<BookItem1 key={info.id} info={info}/>)
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default BookInfoList;
