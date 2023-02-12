'use strict';

const d = new Date();
document.getElementById("demo").innerHTML = d;

function goAgain() {
    location.reload(); 
    return false;
}

function getInputValues(){
    document.getElementById("story").style.display = "inline";

    var pluralNoun= document.getElementById("pluralNoun").value; 
    if (pluralNoun == "") {
        alert("pluralNoun must be filled out");
        return false;
    }

    var noun1=document.getElementById("noun1").value;
    if (noun1 == "") {
        alert("Noun1 must be filled out");
        return false;
    }
    
    var noun2 = document.getElementById("noun2").value;
    if (noun2 == "") {
        alert("Noun2 must be filled out");
        return false;
    }

    var song=document.getElementById("song").value;
    if (song == "") {
        alert("Song must be filled out");
        return false;
    }

    var verb =document.getElementById("verb").value;
    if (verb == "") {
        alert("Verb must be filled out");
        return false;
    }

    document.getElementById("outputPluralNoun").innerText = pluralNoun.toUpperCase();
    document.getElementById("outputNoun1").innerText = noun1.toUpperCase();
    document.getElementById("outputNoun2").innerText = noun2.toUpperCase();
    document.getElementById("outputsong").innerText = song.toUpperCase();
    document.getElementById("outputVerb").innerText = verb.toUpperCase();

    document.getElementById("pluralNoun").value='';
    document.getElementById("noun1").value='';
    document.getElementById("noun2").value='';
    document.getElementById("song").value='';
    document.getElementById("verb").value='';

    enableBtn();
}

