import React, {Component} from 'react'
import axios from 'axios'

class History extends Component{
    constructor(){
        super()

        this.state = {
            userDeckInfo: '',
            addingDeck: false
        }
        // this.toggleAdd = this.toggleAdd.bind(this)
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSaveNew = this.handleSaveNew.bind(this)
    }

    // toggleAdd(){
    //     this.setState({
    //         addingDeck: !this.state.addingDeck
    //     })
    // }

    // handleChange(event){
    //     this.setState({
    //         userDeckInfo: event.target.value
    //     })
    // }

    // handleSaveNew(){
    //     const freshDeck = {
    //         heroClass: this.props.decks.heroclass,
    //         deckName: this.props.decks.deckName,
    //         winRate: this.props.decks.winRate,
    //         deckCode:this.props.decks.deckCode
    //     }
    //     this.props.newDeck(freshDeck)
    //     this.toggleAdd()
    // }

 
    

    render(){
        // const {heroClass, deckName, winRate, deckCode} = req.body
        return(
        <div className='history'>
                {/* {this.state.addingDeck ?
                <div>
                    <input onChange={this.handleChange}></input>
                    <input onChange={this.handleChange}></input>
                    <input onChange={this.handleChange}></input>
                    <input onChange={this.handleChange}></input>
                    <button onClick={this.toggleAdd}>cancel</button>
                    <button onClick={this.handleSaveNew}>Add</button>
                </div> 
                : 
                 <div>
                    <button onClick={this.toggleAdd}>Add Deck</button>
                </div>
                } */}

        </div>
        )
    }
}

export default History

// {this.props.decks.winRate}
// {this.props.decks.deckName}
// {this.props.decks.heroClass}
// {this.props.decks.deckCode}