let tabuleiro;
let board;
let aviso;
let jogador;
let linha;
let coluna;

function iniciar() {
  tabuleiro = [];
  board = document.getElementById("board");
  aviso = document.getElementById("aviso");
  jogador = 1;

  for (let i = 0; i < 3; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 3; j++) {
      tabuleiro[i][j] = 0;
    }
  }

  console.table(tabuleiro);
  exibir();
}

function exibir() {
  let tabela = '<table cellpadding ="10" border="1">';

  for (let i = 0; i < 3; i++) {
    tabela += "<tr>";

    for (let j = 0; j < 3; j++) {
      tabela += "<td>_</td>";
    }

    tabela += "</tr>";
  }
  tabela += "</tabela>";
  board.innerHTML = tabela;
}

function jogar() {}

function checar() {}
