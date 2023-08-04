import React,{Component} from "react";
import Gamebox from "./Gamebox";
import './Game.css'
class Game extends Component{

    render(){

        return(
            <div className="Game">
                <h1 className="Game-head">Light Out</h1>
                <Gamebox />
            </div>
        );
    }
}

export default Game;