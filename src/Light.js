import React,{Component} from "react";
import './Light.css';

class Light extends Component{
    constructor(props){
        super(props);
        this.state={
            color:'darkblue'
        }
        this.handleLightup=this.handleLightup.bind(this);
        this.Lightup=this.Lightup.bind(this);
    }
    Lightup(){
        (this.state.color==="darkblue") ?this.setState({color:"cyan"}) : this.setState({color:"darkblue"})
    }
    handleLightup(){
        this.Lightup();
    }
    render(){
        let clr=this.state.color;
        return(
            <div className="Light" onClick={this.handleLightup} style={{backgroundColor:clr}}>
                
            </div>
        );
    }

}

export default Light;