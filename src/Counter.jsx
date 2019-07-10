import React,{Component} from 'react';


export default class Counter extends Component{
    
    constructor(){
        super(...arguments);
        this.state = {
            counter: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount(){
        this.setState({
            counter: this.state.counter+1
        });
    }

    render(){
        return(
            <div>
                {this.state.counter}
                <br />
                <button type="button" onClick={this.incrementCount}>Increase</button>
            </div>
        )
    }

}