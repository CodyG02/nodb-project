import React, {Component} from 'react';
import History from './components/History'
import DeckLog from './components/DeckLog'
import Header from './components/Header'
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      deckList: []
    }
    this.newDeck = this.newDeck.bind(this)
    this.updateDeck = this.updateDeck.bind(this)
    this.deleteDeck = this.deleteDeck.bind(this)
  }

  componentDidMount(){}

  newDeck(decks){}

  updateDeck(id, changeDeck){}

  deleteDeck(id){}



  render(){
    return(
      <div>
        <Header/>
        App.js
        <History/>
        <DeckLog/>
      </div>
    )
  }

}

export default App;
