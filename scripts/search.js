function  searchVideo (event) {
    const search = event.target.value;
    console.log(search, event.target);
    // toda vez que digitamos, dispara um evento

    const videos = document.querySelectorAll(".video-card");
    // console.log(videos);

    // loop de iteracao para validar se o termo é existente: nome da categoria, nome do canal e o titulo do video

    // Array, lista, map: se escreve o nome da variavel em plural
    // o elemento se escreve no singular
    for (const video of videos) {
        // capturar as informações e armazenar em um objeto
        const videoInfo = {
        // title: video.getElementsByTagName("h3"),
        // channelName: video.getElementsByTagName("p"),
        // category: video.getElementsByTagName("p")
        title: video.getElementsByTagName("h3")[0].innerText,
        channelName: video.getElementsByTagName("p")[0].innerText,
        category: video.getElementsByTagName("p")[1].innerText
        }
        // innerHTML também funciona
        console.log(videoInfo);
    }
}