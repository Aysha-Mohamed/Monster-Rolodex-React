import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';



const CardList = ({ monsters }) =>(
        <div className='card-list'>
                 {monsters.map((monster) => {
                    return <Card monster = {monster}/>
                })}
            </div>
);

// class CardList extends Component{


//     render(){
//         console.log("render from cardlist");
//         const { monsters } = this.props;
//         return (

//             <div className='card-list'>
//                 {monsters.map((monster) => {
//                     // const { name, email, id } = monster;
//                     return <Card monster = {monster}/>
//                 })}
//             </div>
           
//         )
//     }
// }

export default CardList;