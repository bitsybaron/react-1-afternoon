import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ['I', 'Love', 'To', 'Sleep'],
            userInput: '',
            filteredArray: []
        }
    }
    sort(userInput) {
        let strings = this.state.unfilteredArray;
        let newStrings = strings.filter((e) => e.includes(userInput))
        this.setState({
            filteredArray: newStrings
        })
    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }
    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => this.sort(this.state.userInput)}></button>
                <span className='resultsBox filterStringRB'>Correct: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;