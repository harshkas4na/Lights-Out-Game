import React,{Component} from "react";
import Light from "./Light";
import './Gamebox.css';
class Gamebox extends Component{
    render(){
        const lights = Array.from({length:25}).map(
            ()=> <Light />
        )

        return(
            <div className="Gamebox">
                {lights}
            </div>
        );
    }

}

export default Gamebox;