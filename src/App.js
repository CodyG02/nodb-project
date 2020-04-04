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

  newDeck(decks){
    axios.post('/api/decks', decks).then(res => {
      this.setState({
        yourDecks: res.data
      })
    })
  }

  updateDeck(id, changeDeck){
    axios.put(`/api/decks/${id}`, { changeDeck}).then(res =>{
      this.setState({
        yourDecks: res.data
      })
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
      <div>
        <Header/>
        
        <History
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
