import React from 'react'
import Decks from './Decks'

function DeckLog(props){
    const deckList = props.yourDecks.map(decks => {
        return (
            <Decks
            decks={decks}
            updateDeck={props.updateDeck}
            deleteDeck ={props.deleteDeck}
            />
        )
    })
    return(
        <div>
           
            {deckList}
        
        </div>
    )
}

export default DeckLog