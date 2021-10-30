/*
=========================================================
* Short Link Maker - v1.0.
=========================================================
* Project Page: https://www.github.com/AttackerAlireza/ShortLinkMaker
* Copyright 2021 AttackerAlireza (https://www.github.com/AttackerAlireza)
Coded by www.tiktakcode.com
 =========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* License : "MIT License"
*/

/*
 Json End Point Here for To Add as Jason
 For Example : https://api.npoint.io/385fa25df55c550341cfd8e1
*/
var endpoint = "";

// This function first checks the protocol and if it is not correct, it creates a correct link, otherwise it replaces the same link.
function geturl(){
    var url = document.getElementById("urlInput").value;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if(!protocol_ok){
        newurl = "http://"+url;
        return newurl;
        }else{
            return url;
        }
}
// This function creates a random string of numbers and letters with a loop whose number is known.
function randomMaker() {
    var text = "";
    // This value can be changed and can be customized. Our suggestion is not to change this value as much as possible.
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
// This function performs cryptographic operations.
function hashMaker(){
    // Element display result
    let responseUrl = document.getElementById('responseUrl');
    if (window.location.hash == ""){
        let resultUrl = window.location.hash = randomMaker() ;
       responseUrl.value = window.location.href;
    }
}
// Submit a request by Ajax
function sendRequest(url) {
    this.url = url;
    $.ajax({
        'url': endpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}
// Link Shortener
function shortLink(){
    var longurl = geturl();
    console.log(longurl);
    hashMaker();
    sendRequest(longurl);
}

var hashh = window.location.hash.substr(1)

if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + hashh , function (data) {
        data = data["result"] ;

        if (data != null) {
            window.location.href = data ;
        }

    });
}

