import React,{Component} from "react";
import ReactDOM from "react-dom";
import {DatePicker} from "antd";

class Text extends Component{
    render(){
        return(
            <div>
                hello from react
                <DatePicker/>
            </div>
        );
    }
}
//var e = React.createElement("p",null,"hello from react");
ReactDOM.render(<Text/>,document.getElementById("main"))