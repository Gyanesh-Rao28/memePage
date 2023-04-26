// variables
const img = document.getElementById("meme")
const btn = document.getElementById("btn")
// url
const url = "https://programming-memes-images.p.rapidapi.com/v1/memes";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "fe9d5a02eemshd1ca2130d4567bcp17f241jsna594477ebe0c",
    "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
  },
};

// getting meme

function getMeme(){
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let random = Math.floor(Math.random() * data.length);
            console.log(random);
            img.src = data[random].image
        }
        )
}

getMeme()


addEventListener("click",getMeme)