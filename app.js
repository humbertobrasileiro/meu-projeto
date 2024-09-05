let resultadoHeader = document.getElementById("resultado-header");
let composicaoItem = document.getElementById("composicao-item");
let exibeAlbum = document.getElementById("exibe-album");

resultadoHeader.innerHTML = `
  <div class="resultado-header">
    <h2>${banda}</h2>
    <p>${historia}</p> 
  </div>
`;

composicaoItem.innerHTML = '';

componentes.forEach(componente => {
  composicaoItem.innerHTML += `
    <div class="composicao-item">
      <h5>${componente.nome}:</h5> 
      <p>${componente.instrumento}</p>
    </div>
  `;
});

exibeAlbum.innerHTML = '';

dados.forEach(dado => {
  exibeAlbum.innerHTML += `
    <div class="exibe-album">
      <img src="${dado.cover}" alt="Cover do album ${dado.titulo}">
      <div style="width: 40vw">
        <h4>${dado.titulo}</h4>
        <p>${dado.descricao}.</p>
        <a href="${dado.link}" target="_blank">Saiba mais...</a>
      </div>
    </div>
  `;
});
