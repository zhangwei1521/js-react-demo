import React,{Component} from "react";
import ReactDOM from "react-dom";
import {DatePicker} from "antd";
import moment from "moment";

class Text extends Component{
    render(){
        return(
            <div>
                <DatePicker className={"calendar"} defaultValue={moment(new Date())}/>
                <ul className={"navigate"}>
                    <li><a href="#home">主页</a></li>
                    <li><a href="#news">新闻</a></li>
                    <li><a href="#contact">联系</a></li>
                    <li><a href="#about">关于</a></li>
                </ul>
                <div className={"content"}>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
            </div>
        );
    }
}
//var e = React.createElement("p",null,"hello from react");
ReactDOM.render(<Text/>,document.getElementById("main"))