class Cancion {
    constructor(url) {
        this.codigo = url.replace("https://", "").replace("http://", "").replace("www.", "").replace("youtube.com/watch?v=", "").replace("youtu.be/", "").split("&")[0].split("?")[0];

        let info;
        let req = new XMLHttpRequest();

        req.open('GET', 'https://noembed.com/embed?' + new URLSearchParams({ url: "https://www.youtube.com/watch?v=" + this.codigo }), false);

        req.onreadystatechange = function (aEvt) {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    info = (JSON.parse(req.responseText));
                }
            }
        };
        req.send();

        if (info.error) {
            throw new Error("Enlace inválido");
        }
        this.titulo = info.title;
        this.autor = info.author_name;
    }
}