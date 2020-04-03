const express = require('express')

const PORT = 4001

const deckListCtrl = require('./controllers/deckListController')

const app = express()

app.use(express.json())

app.get('/api/decks', deckListCtrl.getDecks)
app.post('/api/decks', deckListCtrl.newDeck)
app.put('/api/decks/:id', deckListCtrl.updateDeck)
app.delete('/api/decks/:id', deckListCtrl.deleteDeck)

app.listen(PORT, () => console.log(`My decks destroy you at PORT: ${PORT}`))