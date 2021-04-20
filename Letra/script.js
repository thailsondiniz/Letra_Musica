function findLyrics(artist, song){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el =>{
    el.preventDefault();
    doSubmit();
})

async function doSubmit(){
    const lyrics_el = document.querySelector("#lyrics");
    const artist = document.querySelector("#artista");
    const song = document.querySelector("#song");

    //async await
    //caso nao ache a musica utilizasse try e catch
    try{
    const lyricsResponse = await findLyrics(artist.value, song.value);
    const data = await lyricsResponse.json();
    if(data.lyrics)
        lyrics_el.innerHTML = data.lyrics;
    else
        lyrics_el.innerHTML = data.error;
    } catch (err){
        console.log(err);
    }
}