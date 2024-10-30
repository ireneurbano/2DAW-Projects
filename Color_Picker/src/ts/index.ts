function getButtonColor(buttonId: string){
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}

let buttonCollection: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

for (let i = 0; i < buttonCollection.length; i++) {
    buttonCollection[i].addEventListener("click", () => {
        let targetDiv: HTMLElement = document.getElementById("targetDiv")!;

        targetDiv.style.backgroundColor = buttonCollection[i].value;
        }
    );
}