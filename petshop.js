const nomePetshop = "Petshop DH";

console.log(`** ${nomePetshop} **`);

let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "labrador",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Costelinha",
    tipo: "cão",
    raca: "vira-lata",
    idade: 10,
    genero: "M",
    vacinado: true,
    servicos: ["banho"]
  },
  {
    nome: "Scooby Doo",
    tipo: "cão",
    raca: "Dogue Alemão",
    idade: 51,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "poodle",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["corte de unhas"]
  },
  {
    nome: "Ada",
    tipo: "iguana",
    raca: "albina",
    idade: 5,
    genero: "F",
    vacinado: true,
    servicos: ["banho"]
  }
];

const listarPets = () => {
  let conteudo = "";
  for (let pet of pets) {
    conteudo += `
    ------------------------
    Nome: ${pet.nome}
    Tipo: ${pet.tipo}
    Raça: ${pet.raca}
    Idade: ${pet.idade} anos
    Genero: ${pet.genero == "F" ? "femea" : "macho"}
    Vacinado: ${pet.vacinado ? "sim" : "não"}
    Serviços: ${pet.servicos}
    ------------------------`;
  }
  return conteudo;
};

const validarDados = novoPet => {
  return (
    novoPet.nome &&
    novoPet.idade &&
    novoPet.tipo &&
    novoPet.raca &&
    novoPet.genero
  );
};

const adicionarPet = novoPet => {
  if (typeof novoPet == "object" && validarDados(novoPet)) {
    // adiciona o pet
    novoPet.nome = String(novoPet.nome);
    novoPet.idade = parseInt(novoPet.idade);

    if (!novoPet.servicos) {
      novoPet.servicos = [];
    }
    pets.push(novoPet);
  } else {
    console.log("Ops, insira um argumento valido!");
  }
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome == nomePet)
  return petsEncontrados
 };

const contarVacinados = () => {
  let vacinados = pets.filter(pet => pet.vacinado).length;
  let naoVacinados = pets.filter(pet => !pet.vacinado).length;

  return(`
  ------------------------
  Temos ${vacinados} pets vacinados.
  Temos ${naoVacinados} pets NÃO vacinados.
  ------------------------
  `);
};

const vacinarPet = nomevac => {
  let array = []
  let petnome = pets.filter(pet => {
    if(pet.nome == nomevac && !pet.vacinado){
      pet.vacinado = true
      array.push(pet)
    }
    })
  let resultado = array.length
    return resultado
    };

const campanhaVacina = () => {
  console.log("Campanha de vacina 2020");
  console.log("vacinando...");

  let petVacinadosCampanha = 0;
  for (let pet of pets) {
    if (!pet.vacinado) {
      pet.vacinado = true;
      petVacinadosCampanha++;
    }
  }
  return (`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
};

const darBanhoPet = petnome => {
  for(let pet of pets) {
    if (pet.nome == petnome) {
      pet.servicos.push("banho");
    }
  }
  return(`${petnome} está de banho tomado!`);
};

const tosarPet = petnome2 => {
  for(let pet of pets) {
    if (pet.nome == petnome2) {
      pet.servicos.push("tosa")
    }
  }
  return (`${petnome2} está tosado :)`);
};

const apararUnhasPet = petnome3 => {
  for(let pet of pets) {
    if (pet.nome == petnome3) {
      pet.servicos.push("corte de unhas")
    }
  }
  return (`${petnome3} está de unhas aparadas!`);
};

const atenderPet = (petAtendido) => {
  for(let pet of pets) {
    if (pet.nome == petAtendido) {
      if (pet.servicos.length > 0) {
      return (`Realizamos ${pet.servicos} no pet ${petAtendido}!`)
    } else {
      return (`Até o momento, o pet ${petAtendido} não possui serviços cadastrados.`)
    }
  }
}
}

module.exports = {listarPets, adicionarPet, buscarPet, contarVacinados, vacinarPet, campanhaVacina, darBanhoPet, tosarPet, apararUnhasPet, atenderPet};
