
// const key = `https://api.dictionaryapi.dev/api/v2/entries/en/ ${word}`
const search = document.getElementById("search");
const meaning = document.getElementById("meaning");
const wordBox = document.getElementById("word");
const phonetics = document.getElementById("phonetics");
const antonyms = document.getElementById("antonyms");
const audio = document.getElementById("audio");
const submit = document.getElementsByClassName("fa-search")[0];


const getWord = async ()=>{
        
    word = search.value;
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/ ${word}`);
    const data = await response.json();
    try
    {
        wordBox.innerText =`Word: ${word}`;
    }catch(error)
    {

    }
    if (data[0]!=undefined)
    {
        audio.src = data[0].phonetics[0].audio;
    }
    else
    {
        audio.src = ""
    }
    if (data[0]!=undefined)
    {
        meaning.innerText = `Meaning:  ${data[0].meanings[0].definitions[0].definition}`;
    }
    else
    {
        meaning.innerText = "";
    }   
    
    if (data[0]!=undefined)
    {
        phonetics.innerText = `Phonetics: ${data[0].phonetics[0].text}`;
    }
    else
    {
        phonetics.innerText = "";
    

    if (data[0]!=undefined)
    {
        if (data[0].meanings[2]!=undefined)
        {   
            antonyms.innerText = `Antonyms: ${data[0].meanings[2].antonyms.join(",")}`;
        }
        else
        {
            antonyms.innerText = "";
        }
    }

    search.value = ""
}

}


// Call when clicked on search button   
submit.addEventListener("click", ()=>{
   getWord();
});

window.addEventListener("keydown", (e)=>{
    if (e.key == "Enter")
    {
        getWord();
    }
});