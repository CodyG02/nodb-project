import React, {Component} from 'react'

class Decks extends Component{
    constructor(){
        super()

        this.state ={
            
            editing: false,
            userInput: ''
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSaveChanges = this.handleSaveChanges.bind(this)

    }

    toggleEdit(){
        this.setState({
            editing: !this.state.editing
        })
    }

    handleChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    handleSaveChanges(){
        this.props.updateDeck(this.props.decks.id, this.state.userInput)
        this.toggleEdit()
    }

    render(){
        // const {heroClass, deckName, winRate, deckCode} = req.body
        // const {id} = req.params
        return(
            <div>
                {this.state.editing ?
                <div>
                    <input onChange={this.handleChange} />
                    <input onChange={this.handleChange}/>
                    <input onChange={this.handleChange}/>
                    <input onChange={this.handleChange} />
                    <button onClick={this.toggleEdit}>cancel</button>
                    <button onClick={this.handleSaveChanges}>update</button>
                </div> 
                : 
                    <div onDoubleClick={this.toggleEdit}>
                         {`${this.props.decks.heroClass}, ${this.props.decks.deckName}, ${this.props.decks.winRate}, ${this.props.decks.deckCode}`}
                    </div>
                }
                
                <button on onClick={() => this.props.deleteDeck(this.props.deck.id)}> delete deck</button>

               
            </div>
        )
    }
}

export default Decks

{/* <input onChange={this.handleChange} />
                    <input onChange={this.handleChange}/>
                    <input onChange={this.handleChange}/>
                    <input onChange={this.handleChange} />
                    <button onClick={this.toggleEdit}>cancel</button>
                    <button onClick={this.handleSaveChanges}>update</button> */}