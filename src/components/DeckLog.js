import React from 'react'
import Decks from './Decks'

function DeckLog(props){
    const deckList = props.yourDecks.map(decks => {
        return (
            <Decks
            key={decks.id}
            decks={decks}
            updateDeck={props.updateDeck}
            deleteDeck ={props.deleteDeck}
            />
        )
    })
    return(
        <div classname='deck-list'>
           
            {deckList}
        
        </div>
    )
}

export default DeckLog