import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [
                {x: 'y'},
                {y: 'jfld'},
                {x: 'z'}
            ],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({
            userInput: val
        })
    }
    sort(e) {
        let letters = this.state.unfilteredArray;
        let filteredLetters = [];

        for (let i = 0; i < letters.length; i++) {
            if (letters[i].hasOwnProperty(e)) {
                filteredLetters.push(letters[i]);
            }
        }
       this.setState({
            filteredArray: filteredLetters
        })
    }

    render() {
        return (
            <div className='puzzleText'>
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.sort(this.state.userInput)}></button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;