
    var magicCards =[[],[],[],[],[],[]];
    function initNumbers(){
    var lastNmr = 63;
    var lenOfNmr = (lastNmr).toString(2).length;

    for(var k=1;k<=lastNmr;k++){
    var binary = k.toString(2).padStart(lenOfNmr,'0');

    for(var j=5;j>=0;j--){
    if(binary[j]==1) magicCards[5-j].push(k);
    }

}
    createPageStruct();

}

    function createPageStruct(){

    for(var k=1;k<=2;k++){
    const container = document.createElement("div");
    container.id ="container"+k.toString();
    container.setAttribute("class","Row");
    document.getElementById("mainDiv").appendChild(container)
}

    for(var k=1;k<=magicCards.length;k++){


    const el = document.createElement("div");
    el.id = "cardCorner"+k.toString();
    el.setAttribute("class","box Column");

    const dataEl = document.createElement("div");
    dataEl.id ="datas"+k.toString();
    dataEl.innerHTML = magicCards[k-1].join(" ");
    dataEl.setAttribute("class","data");

    const cbDiv = document.createElement("div");
    cbDiv.id="cbDiv"+k.toString();
    cbDiv.style.setProperty("text-align","center");
    const checkBox = document.createElement("input");
    checkBox.id="checkBox"+k.toString();
    checkBox.type="checkbox";
    const label = document.createElement("label");
    label.innerHTML = "Select";

    document.getElementById("container"+(k<4?1:2).toString()).appendChild(el);
    document.getElementById(el.id).appendChild(dataEl);
    document.getElementById(el.id).appendChild(cbDiv);
    document.getElementById(cbDiv.id).appendChild(checkBox);
    document.getElementById(cbDiv.id).appendChild(label);
}

}

    function guessAnswer(){
    var answers =[];
    for(var k=magicCards.length;k>=1;k--){
    answers.push(document.getElementById("checkBox"+k.toString()).checked?"1":"0");
}
    alert("Your number is: "+parseInt(answers.join(""),2).toString())
    console.log(answers);
    console.log(answers.join(""));
    console.log();
}