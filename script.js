const container = document.querySelector('#container');


for (let i = 0; i < 256; i++) {
    const content = document.createElement('div');
        content.classList.add('content');
        content.textContent =  i + 1;
    container.appendChild(content);
}

document.getElementById("container").style.gridTemplateColumns = "25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px";
document.getElementById("container").style.gridTemplateRows = "25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px";