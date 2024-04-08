let elDiv  = document.querySelectorAll('div');
elDiv.addEventListener('mouseover', ratonSobre)

function ratonSobre(elevento) {
    
    let elh1 = this.querySelector('h1');

    //let elh1 = this.firstElementChild;
    
    //let elh1 = this.children[0];

    //let elh1 = elevento.currenTarget.firstElementChild;

    elh1.hidden = false;

}