const main = document.querySelector('.main')
function createNode(element) {
    return document.createElement(element)
}

function append(parent, el) {
    return parent.appendChild(el)
}

fetch('https://artistas-interior-sp-api.herokuapp.com/musicistas')
    .then((response) => response.json())
    .then(function (data) {
        return data.map((artista) => {
            let div = createNode('div')

            // Set the innerHTML of backpackArticle using the backpack object.
            div.innerHTML = `
                
                <h2 class="fs-5 mt-3">${artista.name}</h2>
                <p>${artista.about}</p>
                <p><a class="btn btn-outline-info" href="./artista.html" role="button">Saiba mais</a></p>
            `

            append(main, div)
        });

    })
