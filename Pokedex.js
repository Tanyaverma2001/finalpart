import React from 'react';
import './index';

function Pokecard (props) {
  return (
    
   <div>
    
      <h2 style={{color:"blue"}}>{props.name }</h2>
      <img src={props.image} alt={props.name} style={{height:"50px",width:"50px"}} />
      <p>Type: {props.type}</p>
      </div>
  );
};

class Pokedex extends React.Component {
  static defaultProps = {
    pokemon:[
 
      {
        id: 1,
        name: "Charmander",
        type: "fire",
        image: "https://i.pinimg.com/originals/4a/73/d5/4a73d540a85b5002cd4375bad778cbbb.png"
      },
      {
        id: 2,
        name: "Squirtle",
        type: "water",
        image: "https://vignette4.wikia.nocookie.net/sonic-pokemon-unipedia/images/4/4d/7-1.png/revision/latest?cb=20131031034850"
      },
      {
        id: 3,
        name: "Butterfree",
        type: "flying",
        image: "https://th.bing.com/th/id/OIP.7PCklyNf0651BoqZNXuljgHaG0?w=226&h=209&c=7&r=0&o=5&dpr=1.5&pid=1.7"
       
      },
    
      {
        id: 4,
        name: "Rattata",
        type: "normal",
        image: "https://th.bing.com/th/id/R.0c9bd492208d3deed49aa752f41c4698?rik=qDmrYzGfB8llZg&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2fgenealogy%2fimages%2fa%2fa7%2fRattata_001.png%2frevision%2flatest%3fcb%3d20141127051929&ehk=pB9ojXCreX%2bIKJeGhW3gmeUkqBpri0QQu5dfdUC9gRs%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        id: 5,
        name: "Metapod",
        type: "bug",
        image: "https://orig12.deviantart.net/cbef/f/2015/083/3/9/011_metapod_by_rayo123000-d8mxy25.png"
      }
    ]
  };

render() {
  return ( <ul>
    
      {this.props.pokemon.map((pokemon) => (
       <li className='card'> <Pokecard key={pokemon.id} name={pokemon.name} type={pokemon.type} image={pokemon.image} /></li>
      ))}
    
    </ul>
  );
}
}

  export default Pokedex;
