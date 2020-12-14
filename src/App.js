import Cardlist from "./Cardlist"
import Searchbox from "./Searchbox"
import Scroll from "./Scroll";

import { Component } from "react";

class App extends Component{
    constructor(){
        super();
        this.state={
            Robots:[],
            Searchtext:""
        }
        console.log("constructor")
    }

    componentDidMount(){
        
        console.log('Componentdidmount');
        //getting users from an API 
        //and using setstate() to update Robots
        //storing users in Robots of the state
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
           return response.json();
        }).then(users=>{
            this.setState({Robots:users});
        });
    

    }

    onSearchchange=(event)=>{

        this.setState({Searchtext:event.target.value})
        console.log("onsearchchange");
    }
    
    

    render(){
        console.log("render");
        const filteredrobots=this.state.Robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.Searchtext.toLowerCase());
        })

        if(this.state.Robots.length===0){
            return(<h1 className="tc">Loading</h1>)
        }else{
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox searchchange={this.onSearchchange}/> 
                <Scroll>
                <Cardlist robots= {filteredrobots}/>
                </Scroll> 
            </div>    );}
    }
}


export default App;