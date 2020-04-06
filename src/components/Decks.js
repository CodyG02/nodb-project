import React, {Component} from 'react'

class Decks extends Component{
    constructor(){
        super()

        this.state ={
            
            editing: false,
            
                heroClass: '',
                deckName: '',
                winRate: '',
                deckCode: ''
            
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
        console.log('handle changes')
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSaveChanges(){
        const heroClass= this.state.heroClass
        const deckName= this.state.deckName
        const winRate= this.state.winRate
        const deckCode= this.state.deckCode
        const userInput = {updatedInfo:{
            'heroClass': heroClass,
            'deckName': deckName,
            'winRate': winRate,
            'deckCode': deckCode
        }}
        // console.log('WTF ' + this.state.userInput)
        console.log(userInput)
        this.props.updateDeck(this.props.decks.id, userInput)
        this.toggleEdit()
    }

    render(){
        // const {heroClass, deckName, winRate, deckCode} = req.body
        // const {id} = req.params
        return(
            <div>
                {this.state.editing ?
                <div>
                    <input name='heroClass' onChange={event =>this.handleChange(event)} />
                    <input name='deckName' onChange={event =>this.handleChange(event)}/>
                    <input name='winRate'onChange={event =>this.handleChange(event)}/>
                    <input name='deckCode' onChange={event =>this.handleChange(event)} />
                    <button onClick={this.toggleEdit}>cancel</button>
                    <button onClick={this.handleSaveChanges}>update</button>
                </div> 
                : 
                    <div onDoubleClick={this.toggleEdit}>
                         {`${this.props.decks.heroClass}, ${this.props.decks.deckName}, ${this.props.decks.winRate}, ${this.props.decks.deckCode}`}
                    </div>
                }
                
                <button onClick={() => this.props.deleteDeck(this.props.decks.id)}> delete deck</button>

               
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