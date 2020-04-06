import React, {Component} from 'react';
import History from './components/History'
import DeckLog from './components/DeckLog'
import Header from './components/Header'
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(){
    super()

    this.state = {
      yourDecks: []
    }
    this.newDeck = this.newDeck.bind(this)
    this.updateDeck = this.updateDeck.bind(this)
    this.deleteDeck = this.deleteDeck.bind(this)
  }

  componentDidMount(){
    axios.get('/api/decks').then(res => {
      this.setState({
        yourDecks: res.data
      })
    })
  }

  newDeck(addDeck){
    console.log(addDeck)
    axios.post('/api/decks', addDeck).then(res => {
     const mapDeck = res.data.map(deck => {
       console.log(deck)
       return deck
     })
     
    // console.log('response' + mapDeck)
      this.setState({
        yourDecks: mapDeck
      })
    })
  }

  updateDeck(id, changeDeck){
    console.log(changeDeck)
    axios.put(`/api/decks/${id}`,  changeDeck).then(res =>{
      this.setState({
        //  this.yourDecks = this.userInput
        yourDecks: res.data
      })
      console.log(res.data)
      console.log('update deckers ' + this.state)
    })
  }

  deleteDeck(id){
    axios.delete(`/api/decks/${id}`).then(res =>{
      this.setState({
        yourDecks: res.data
      })
    })
  }



  render(){
    return(
      <div className='App'>
        <Header/>
        
        <History
        yourDecks={this.state.yourDecks}
         newDeck={this.newDeck}
         />
        <DeckLog 
        yourDecks= {this.state.yourDecks}
        updateDeck={this.updateDeck}
        deleteDeck={this.deleteDeck}
        />
      </div>
    )
  }

}

export default App;
