function pesquisar() {

  let idBanda = -1;
  let resultadoHeader = document.getElementById("resultado-header");
  let composicaoItem = document.getElementById("composicao-item");
  let exibeAlbum = document.getElementById("exibe-album");

  const campoPesquisa = document.getElementById("campo-pesquisa");

  let busca = campoPesquisa.value;
  
  dados.forEach(item => {
    
    let banda = item.banda.toUpperCase();
    
    if (banda.includes(busca.toUpperCase()) && busca != '') {
      idBanda = item.id;
    }
    
  });
 
  if (idBanda == -1) {
    alert('Esta é uma versão Demo, banco de dados contém dados do Queen e do Pink Floyd');
    return;
  }
  
  resultadoHeader.innerHTML = `
    <div class="resultado-header">
      <h2>${dados[idBanda].banda}</h2>
      <p>${dados[idBanda].historia}</p> 
    </div>
  `;
  
  composicaoItem.innerHTML = '<h4>Composição da Banda</h4>';
  
  dados[idBanda].componentes.forEach(componente => {
    composicaoItem.innerHTML += `
      <div class="composicao-item">
        <h5>${componente.nome}:</h5> 
        <p>${componente.instrumento}</p>
      </div>
    `;
  });
  
  exibeAlbum.innerHTML = '<h4>Álbuns de Estúdio</h4>';
  
  dados[idBanda].discografia.forEach(dado => {
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

}