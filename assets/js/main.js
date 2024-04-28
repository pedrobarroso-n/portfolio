addEventListener('load', ()=> {
    let year = new Date().getFullYear();
    document.getElementById('creditos').innerText += ` ${year}`;
})