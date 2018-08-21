import React, { Component } from 'react';
import InputForm from './InputForm'
import BookInfoList from './BookInfoList'

class Search extends React.Component {
    static defaultProps={
      data:[]
    }
    id=0
    state={
      information: [
        {
          id: 0,
          name: '가장 빨리 만나는 Go 언어',
          image:"https://bookthumb-phinf.pstatic.net/cover/091/029/09102978.jpg?type=m140&udate=20160218",
          author:"이재홍",
          publisher:"길벗",
          publishDate:"2015.06.01",
          price:"25,200",
          dePrice:"28,000"
        },
        {
          id: 1,
          name: '가장 빨리 만나는 Go 언어',
          image:"https://bookthumb-phinf.pstatic.net/cover/091/029/09102978.jpg?type=m140&udate=20160218",
          author:"이재홍",
          publisher:"길벗",
          publishDate:"2015.06.01",
          price:"25,200",
          dePrice:"28,000"
        }
      ]
    }
    handleChange(event){
      this.setState({value:event.target.value});
    }
    handleCreate=(data)=>{
      this.setState({id:this.id++,...data});
      console.log(this.state)
    }
    render() {
        return (
            <div id="contents">
              <InputForm onCreate={this.handleCreate} />
              <BookInfoList data={this.state.information} />
            </div>
        );
    }
}

export default Search ;
