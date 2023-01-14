import { Component, useEffect, useState } from "react";
import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters,setFilterMonsters] = useState(monsters);


  console.log("rendered");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);


  useEffect(()=>{
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));
    setFilterMonsters(newFilteredMonsters);
  },[monsters,searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));
  // this line will get rendered whenever the function renders. S it is a sie effect. remember the example one with two search strings? So we are using useeffect.

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onSearchChangeHandler={onSearchChange}
        className="monsters-search-box"
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters:[],
//       searchField:''
//     }
//     // console.log("constructor");
//   }
//   componentDidMount(){
//     // console.log("componentDidMount");
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState(
//       () => {
//         return {monsters:users}
//       },
//       () => {
//         // console.log(this.state);
//       }
//     ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(
//       () => {
//         return { searchField }
//       }
//     )}

//   render(){
//     // console.log("render");

//     const {monsters,searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onSearchChangeHandler={onSearchChange} className="monsters-search-box" placeholder="search monsters"/>
//         {/* <input type='search' className='search-box' placeholder='Search Monsters' onChange={onSearchChange}/> */}
//         {/* {
//           filteredMonsters.map((monster) => {return(
//           <div key={monster.id}>
//           <h1>{monster.name}</h1>
//           </div>
//           )
//         })
//         } */}
//         <CardList monsters={ filteredMonsters } />
//       </div>
//     );

//   }
//   }

export default App;
