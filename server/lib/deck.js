const TOTAL_CARDS = 6; //implementar -> Checar o total de Cartas criadas no DB

export class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  get numberOfCards() {
    return this.cards.length;
  }

  shuffle(){
    for (let i = this.numberOfCards - 1; i>0; i--){
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

export class Card {
  constructor(id) {
    this.id = id;
    // Implementar -> Usar o ID da Carta para checar o DB e carregar as outras informações (nome, custo, textos)
  }
}

function freshDeck(){
  const cards = []
  for (let i=0; i<TOTAL_CARDS; i++){
    cards.push(new Card(i))
  }
  return cards;
}

export function startGame () {
  const deck = new Deck()

}