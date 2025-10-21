function  searchVideo (event) {
    const search = event.target.value.toLowerCase();    
    // toda vez que digitamos, dispara um evento
    const videos = document.querySelectorAll(".video-card");   

    // loop de iteracao para validar se o termo é existente: nome da categoria, nome do canal e o titulo do video

    // Array, lista, map: se escreve o nome da variavel em plural
    // o elemento se escreve no singular
    for (const video of videos) {
        console.log("Video:: ", video)
        // desestruturar objeto
        const [title] = video.getElementsByTagName("h3");
        const [channelName, category] = video.getElementsByTagName("p");
        // const [, category] = video.getElementsByTagName("p"); caso queria apenas o segundo

        // capturar as informações e armazenar em um objeto        
        const videoInfo = {
            title: title.innerText.toLowerCase(), // title: video.getElementsByTagName("h3")[0].innerText,
            channelName: channelName.innerText.toLowerCase(), // channelName: video.getElementsByTagName("p")[0].innerText,
            category: category.innerText.toLowerCase() // category: video.getElementsByTagName("p")[1].innerText        
            // innerHTML também funciona
        }

        // reverte qualquer estilização colocada no elemento
        video.style.display = 'revert';

        if(!matches(videoInfo, search)) video.style.display ='none'
            
    }
}

function matches (videoInfo, searchTerm) {
    return (
        videoInfo.title.includes(searchTerm) ||
        videoInfo.channelName.includes(searchTerm) ||
        videoInfo.category.includes(searchTerm)
    );
}