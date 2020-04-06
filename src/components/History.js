import React, {Component} from 'react'


class History extends Component{
    constructor(){
        super()

        this.state = {
            userDeckInfo:{

                heroClass: '',
                deckName: '',
                winRate: '',
                deckCode: ''
            },
            addingDeck: false
        }
        this.toggleAdd = this.toggleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSaveNew = this.handleSaveNew.bind(this)
    }

    toggleAdd(){
        this.setState({
            addingDeck: !this.state.addingDeck
        })
    }

    handleChange(event){
        // const {heroClass, deckName, winRate, deckCode} = this.state
        this.setState({
        // heroClass:event.target.value
            [event.target.name]:  event.target.value

            // userDeckInfo:[...this.props.yourDecks, {
            //     heroClass,
            //     deckName,
            //     winRate,
            //     deckCode
            // }]
        })
    }

    handleSaveNew(){
        const heroClass= this.state.heroClass
        const deckName= this.state.deckName
        const winRate= this.state.winRate
        const deckCode= this.state.deckCode
        const addDeck = {addDeck:{
            'heroClass': heroClass,
            'deckName': deckName,
            'winRate': winRate,
            'deckCode': deckCode
        }}
        // console.log(heroClass)
        this.props.newDeck( addDeck )
        this.toggleAdd()
    }

 
    

    render(){
        // const {heroClass, deckName, winRate, deckCode} = req.body
        return(
        <div className='history'>
                {this.state.addingDeck ?
                <div>
                    <input className='add-box' type='text' name='heroClass' onChange={this.handleChange} placeholder='Class'></input>
                    <input className='add-box' type='text' name='deckName'onChange={this.handleChange} placeholder='Deck Name'></input>
                    <input className='add-box' type='text'name='winRate'onChange={this.handleChange} placeholder='Win Rate'></input>
                    <input className='add-box' type='text'name='deckCode'onChange={this.handleChange} placeholder='Deck Code'></input>
                    <button className='button' onClick={this.toggleAdd}>cancel</button>
                    <button className='button' onClick={this.handleSaveNew}>Add</button>
                </div> 
                : 
                 <div>
                    <button className='add-button' onClick={this.toggleAdd}>Add Deck</button>
                </div>
                }

        </div>
        )
    }
}

export default History

// {this.props.decks.winRate}
// {this.props.decks.deckName}
// {this.props.decks.heroClass}
// {this.props.decks.deckCode}