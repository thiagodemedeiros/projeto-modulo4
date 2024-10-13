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
