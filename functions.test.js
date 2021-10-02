const functions = require('./functions')

test('recognize poker hand', () => {
expect(functions.checkPairs(['DAce', 'HAce', 'SAce', 'DKing', 'C8'],['Ace', 'Ace', 'Ace', 'King', '8'],
['D','H','S','D','C'])).toBe("Three of a kind");
})