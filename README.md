
# Projeto de Noticías Tesla

Este projeto foi desenvolvido para coletar e exibir notícias diárias sobre a Tesla, usando arquivos JSON. A aplicação utiliza HTML, CSS e JavaScript para construir a interface e manipular os dados. A seguir, descrevo em detalhes os principais aspectos e funcionalidades do projeto, com base em todas as conversas e implementações discutidas.

## Sumário

1. [Descrição do Projeto](#descrição-do-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Configuração e Execução](#configuração-e-execução)
5. [Exibição dos Dados](#exibição-dos-dados)
6. [Problemas Conhecidos e Soluções](#problemas-conhecidos-e-soluções)
7. [Contribuições](#contribuições)

## Descrição do Projeto

O objetivo deste projeto é criar uma aplicação web que coleta e exibe notícias sobre a Tesla, separadas por dia. Cada notícia contém informações detalhadas, incluindo o título, autor, descrição, conteúdo e contagem de palavras específicas relacionadas à Tesla e Elon Musk.

## Funcionalidades

- Carregar notícias de arquivos JSON.
- Exibir notícias separadas por dia.
- Adicionar um cabeçalho indicando o dia das notícias.
- Manipulação de dados assíncrona para garantir a exibição correta.

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
/
├── index.html
├── style.css
├── script.js
├── noticias_tesla_dia_0.json
├── noticias_tesla_dia_1.json
├── noticias_tesla_dia_2.json
...
└── noticias_tesla_dia_14.json
```

## Configuração e Execução

Para configurar e executar o projeto, siga os passos abaixo:

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. **Abra o arquivo `index.html` em seu navegador:**

Você pode simplesmente clicar duas vezes no arquivo `index.html` ou usar uma extensão do Visual Studio Code como "Live Server" para abrir o arquivo em um servidor local.

## Exibição dos Dados

O arquivo `script.js` é responsável por carregar e exibir os dados das notícias. A função `loadNewsData(dia)` carrega o arquivo JSON correspondente ao dia e exibe as notícias no contêiner principal da página.

### Código Principal

```javascript
const newsData = [];

// Função para carregar o JSON
async function loadNewsData(dia) {
    const response = await fetch(`noticias_tesla_dia_${dia}.json`);
    
    // Verifica se a requisição foi bem-sucedida
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    // Converte a resposta para JSON
    const data = await response.json();
    
    // Armazena os dados no array newsData
    newsData.push(...data);
    console.log(newsData); // Exibe os dados no console

    // Aqui você vai inserir os dados das notícias.
    const container = document.getElementById('noticias-container');

    // Adiciona o título do dia das notícias
    const diaNoticia = document.createElement('h1');
    diaNoticia.innerHTML = `Notícias do dia ${dia}`;
    container.appendChild(diaNoticia);

    newsData.forEach(news => {
        const newsItem = document.createElement('div');

        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h2>${news.Titulo}</h2>
            <p><strong>Autor:</strong> ${news.Autor}</p>
            <p><strong>Descrição:</strong> ${news.Descrição}</p>
            <p>${news.Conteudo}</p>
            <p><strong>Contagem Palavra Tesla:</strong> ${news['Contagem Palavra Tesla']}</p>
            <p><strong>Contagem Palavra Elon Musk:</strong> ${news['Contagem Palavra Elon Mushen']}</p>
            <p><strong>Contagem Palavra Carro:</strong> ${news['Contagem Palavra Carro']}</p>
        `;
        container.appendChild(newsItem);
    });
}

let i = 0;

while (i <= 14) {
    loadNewsData(i);
    i++;
}
```

## Problemas Conhecidos e Soluções

1. **Erro de Network:**
   - Certifique-se de que os arquivos JSON estão corretamente nomeados e no local correto.
   - Verifique a resposta do fetch para garantir que os dados estão sendo carregados corretamente.

2. **Problemas de Estilização:**
   - Use a propriedade `box-sizing: border-box` no CSS para ajustar problemas de dimensionamento.
   - Centralize verticalmente o conteúdo dentro de contêineres flexíveis usando `flex-direction: column`.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias e correções.

---

Espero que este README seja útil e ofereça todas as informações necessárias para configurar, executar e entender o projeto de notícias da Tesla. Se você tiver qualquer dúvida ou sugestão, por favor, entre em contato.
