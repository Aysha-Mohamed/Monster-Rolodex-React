import { Component } from 'react';
import './search-box.styles.css';

const SearchBox =({className,placeholder,onSearchChangeHandler}) => {
    return <input type="search" 
        className={`search-box ${className}`}
         placeholder={placeholder}
          onChange={onSearchChangeHandler}></input>
}


// class SearchBox extends Component{
// render(){
//     return <input type="search" 
//     className={`search-box ${this.props.className}`}
//      placeholder={this.props.placeholder}
//       onChange={this.props.onSearchChangeHandler}></input>
// }
// }

export default SearchBox;