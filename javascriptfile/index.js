const text = document.querySelector(".sec-text");

const textLoad =  ()=>{
    setTimeout(() => {
        text.textContent = "FIT";
    }, 0);
    setTimeout(() => {
        text.textContent = "HEALTHY";
    }, 2000);
    setTimeout(() => {
        text.textContent = "ACTIVE";
    }, 4000);
}

textLoad();
setInterval(textLoad,6000);