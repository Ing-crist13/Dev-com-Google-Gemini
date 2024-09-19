
function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa){
        section.innerHTML = "Nenhum resultado encontrado. Digite sua dúvida"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        tag = dado.tags.toLowerCase()
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa) ){
            // Constrói uma string de HTML para cada resultado, formatando os dados do objeto 'dado'
            resultados += `
            <div class="item-resultado">
            <h2> ${dado.titulo}</h2>
            <p class="descricao">${dado.descricao} </p>
            <a href=${dado.link} target="_blank"> Saber mais</a>
            </div>       
            `;

        }
      
    }

        if(!resultados){
            resultados =  "<p>Nenhum resultado encontrado</p>"
        }
  
    // Atribui a string com todos os resultados formatados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }




