import React, {Component, Fragment} from 'react'

class Rank extends Component{
    constructor(props){
        super(props);
        this.state={
            rank : 5
        }
    }
    componentWillMount=()=>{

    }
    render(){
        return(
            <Fragment>
        <h2>Your Rank: #{this.state.rank}</h2>
        <p>Detect more faces on images to increase your <u>Rank!</u></p>
        </Fragment>
        )
    }
}

export default Rank;