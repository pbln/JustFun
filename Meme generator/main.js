const btn = document.querySelector(".generate")
const memeimage = document.querySelector(".img")
const title = document.querySelector(".meme-title")
const author = document.querySelector(".author")
const doo = document.querySelector(".do")
const tb = document.querySelector("#tb")

const generate_image= async()=>{
   const  URL =  "https://meme-api.com/gimme/wholesomememes"
    const response = await fetch(URL)
    const data = await response.json()
    const url = data.url ;
    memeimage.setAttribute("src" , url)
    title.innerHTML=data.title;
    author.innerHTML=data.author ; 
    btn.style.backgroundColor = "black" ;
    btn.style.color = "white" ;
}


btn.addEventListener("click",()=>{
generate_image();
})

function showt(th) {
let toast = document.createElement('div');
toast.classList.add('tt')
toast.innerHTML= th.innerHTML
tb.appendChild(toast);

}