var listaFilmes = ['https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg', 'https://static.wixstatic.com/media/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg/v1/fill/w_640,h_998,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg', 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg'];

// Lista com os nomes
var nomes = ['Escola de Rock', 'A chegada', 'Homem-aranha verso'];

var i=0;
// Usando o while ao invés do for
while(i<listaFilmes.length) {
  // Verificando se possui .jpg na URL
  if(listaFilmes[i].includes(".jpg")){
    // O método includes retorna verdadeiro se conter a palavra desejada em alguma parte do texto
    document.write('<div class= "divfilme">');
    document.write('<img src=' + listaFilmes[i] + '>')
    document.write('<p><font color = #ffffff>' + nomes[i] + '</font></p>');
    document.write('</div>');
  } else {
    // Se não tiver a palavra ele retorna falso
    alert("Não é uma imagem válida!");
  }
  i++;
}