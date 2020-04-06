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
            <div className='hero-boxes'>
                {this.state.editing ?
                <div className='intial-display'>
                    <input className='box' name='heroClass' onChange={event =>this.handleChange(event)} placeholder='Class' />
                    <input className='box' name='deckName' onChange={event =>this.handleChange(event)} placeholder='Deck Name'/>
                    <input className='box' name='winRate'onChange={event =>this.handleChange(event)} placeholder='Win Rate'/>
                    <input className='box' name='deckCode' onChange={event =>this.handleChange(event)} placeholder='Deck Code'/>
                    <button className='button' onClick={this.toggleEdit}>Cancel</button>
                    <button className='button' onClick={this.handleSaveChanges}>Update</button>
                </div> 
                : 
                    <div className='parent-display' onDoubleClick={this.toggleEdit}>
                        <p className='display-box'>{this.props.decks.heroClass}</p>
                        <p className='display-box'>{this.props.decks.deckName}</p>
                        <p className='display-box'>{this.props.decks.winRate}</p>
                        <p className='display-box'>{this.props.decks.deckCode}</p>
                         
                    </div>
                }
                
                <button className='delete-button' onClick={() => this.props.deleteDeck(this.props.decks.id)}> Delete Deck</button>

               
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