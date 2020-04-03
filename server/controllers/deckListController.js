const decks = require('../../dummyData.json')

let id = decks[decks.length -1].id +1

module.exports = {
    getDecks: (req, res) => {
        res.status(200).send(decks)
    },

    newDeck: (req, res) => {
        const {newDeck} = req.body
        const addedDeck = {
            ...newDeck,
            id
        }

        decks.push(addedDeck)

        id++
        res.status(200).send(decks)

    },

    updateDeck: (req,res) =>{
        const {id} =req.params
        const {updatedInfo} =req.body

        const index = decks.findIndex(decks => {
            return decks.id === +id
        })

        if(index === -1){
            return res.status(404).send('Deck Not Found')
        }

        decks[index] = {...decks[index], ...updatedInfo}
        
        res.status(200).send(decks)
    },

    deleteDeck: (req, res) => {
        const {id} = req.params

        const index = decks.findIndex(decks => {
            return decks.id === +id
        })

        if(index === -1){
            return res.status(404).send('Deck Not Found')
        }

        decks.splice(index, 1)

        res.status(200).send(decks)
    }

}