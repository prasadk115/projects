var index =0;

function changeColours(){
    var colours = ["red", "blue", "green", "yellow", "purple"];
    document.body.style.backgroundColor = colours[index];
    index++;
    if(index >= colours.length -1){
        index = 0;
    }
}