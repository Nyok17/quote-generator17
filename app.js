const api_url= "https://api.quotable.io/random"
const quote= document.getElementById("quote")
const author= document.getElementById("author")

async function getQuote(){
    const response= await fetch(api_url)
    const data= await response.json()

    quote.innerHTML= data.content
    author.innerHTML= data.author

    console.log(data)
}

getQuote()