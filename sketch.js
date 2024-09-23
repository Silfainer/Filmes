let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("Cyan");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Lua Negra";
    } else {
      if (idade >= 1) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Pânico na Floresta 6";        
        } else{
         return "Armadilha";
        }
      } else {
        if (gostaDeFantasia) {
          return "Triângulo do Medo";
        } else {
          return "A Origem do Medo";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Arcadian";
    } else {
      return "Os Observadores";
    }
  }
}
