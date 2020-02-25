const http = require("http");
const petshop = require("./petshop");
const url = require("url");


const server = http.createServer((req, res) => {
    // quando faço requisição no navegador
    res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query; // parametros
    let rota = urlCompleta.pathname; // ex: pets/add

    // console.log(queryString);

    switch (rota) {
      case "/pets":
        let conteudo = petshop.listarPets();
        if (conteudo.length > 0) {
          res.write(conteudo);
        } else {
          res.write("Nenhum pet cadastrado");
        }
        break;
      //http://localhost:3000/pets/add?nome=Toto&&idade=2&&tipo=dog&&raca=alemao&&genero=M
      case "/pets/add":
        let novoPet = queryString;
        petshop.adicionarPet(novoPet)
        res.write(`Pet ${novoPet.nome} adicionado com sucesso! Veja-o na lista abaixo:`)
        res.write(petshop.listarPets());
        break;
      case "/pets/buscar":
        let nomePet = queryString.nome;
        let petsEncontrados = petshop.buscarPet(nomePet);
        if (petsEncontrados.length > 0) {
          res.write(
            `Encontramos ${petsEncontrados.length} pets com o nome ${nomePet}`
          );
        } else {
          res.write("Ops, nenhum pet cadastrado com esse nome!");
        }
        break;
      case "/pets/vacinados":
        let vacina = petshop.contarVacinados()
        res.write(vacina);
        break;
      //http://localhost:3000/pets/vacinar?nome=Tom
      case "/pets/vacinar":
        let nomevac = queryString.nome;
        let resultado = petshop.vacinarPet(nomevac);
        if (resultado > 0) {
          res.write(`Pet ${nomevac} vacinado com sucesso!`)
          res.write(petshop.listarPets())
        } else {
          res.write(`Ops, pet ${nomevac} já vacinado`)
        };
        break;
      case "/pets/campanha":
        let campanha = petshop.campanhaVacina();
        res.write(campanha);
        res.write(petshop.listarPets())
        break;
      case "/pets/banho":
        let petnome = queryString.nome;
        res.write(petshop.darBanhoPet(petnome))
        res.write(petshop.listarPets())
        break;
      case "/pets/tosa":
        let petnome2 = queryString.nome;
        res.write(petshop.tosarPet(petnome2));
        res.write(petshop.listarPets());
        break;
      case "/pets/unhas":
        let petnome3 = queryString.nome;
        res.write(petshop.apararUnhasPet(petnome3));
        res.write(petshop.listarPets());
        break;
      //http://localhost:3000/pets/atender?nome=Tom
      //Dúvida: se quero executar uma função que recebe um nome e um array como parâmetros, por exemplo (nome, serviços),
      //como a executo na url por meio do http?
      case "/pets/atender":
        let petAtendido = queryString.nome;
        res.write(petshop.atenderPet(petAtendido));
        res.write(` Volte sempre!`);
        break;
      default:
        res.write("tô perdido");
    }
    // req = request, res = responses
    res.end();
  })
  .listen(3000, "localhost", () => {
    // quando ligo servidor
    console.log("Servidor rodando :)");
  });
