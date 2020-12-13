import Card from './Card.js'

const Cardlist=({robots})=>{

    const CardArray=robots.map((user,i)=>{
        return (<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>); //adding key because reacts wants to keep track of components

    });

    return(
        <div>
              {CardArray}
        </div>
    );
}

export default Cardlist;