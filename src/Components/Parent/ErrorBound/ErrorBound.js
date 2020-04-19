import React from 'react'

class ErrorBound extends React.Component{
    constructor(props){
        super(props);
        this.state={
            didCatch :false
        }
    }

    componentDidCatch=(error)=>{
        this.setState({didCatch : true})
    }
    render(){
        const {didCatch} = this.state;
        return didCatch?<h3>something went wrong</h3>: this.props.children
        
    }

}

export default ErrorBound;