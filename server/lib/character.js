class playableCharacter {
  constructor(id, name, bio){
    this.id = id,
    this.name = name,
    this.bio = bio,
    this.selected = false
  }
}

// I'm hardcoding below, but ideally you should get the playable character info from MYSQL:
const charList = [
  { id: 1,
    name: "Snades",
    bio: "No início do seu turno, cagar regras adicionais igual a sua raiva!"
  },

  { id:2,
    name: "Helio",
    bio: "Começa o jogo tendo uma idéia genial"
  },

  { id: 3,
    name: "Lucas",
    bio: "Caga 1 regra adicional no início do seu turno."
  },

  { id:4,
    name: "Jonas",
    bio: "Pode gastar uma regra para irritar outro jogador. Só se acalma desde que deidades egípcias estejam presentes."
  },

  { id:5,
    name: "André",
    bio: "Wild Card! Pode escolher comprar da pilha de descarte ao invés da pilha normal."
  }
]

module.exports = { charList }