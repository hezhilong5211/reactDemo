import React from 'react'
import {Button, message} from 'antd'

export default class App extends React.Component{

    handleClick =  () =>{
        message.success('我是何志龙！！！！')
    }

    render(){
        return(
            <div>
                <Button type="primary" onClick={this.handleClick}>何志龙</Button>
            </div>
        )
    }
}