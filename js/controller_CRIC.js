window.addEventListener("load", bindEvents);
function bindEvents() {
    document.querySelector("#get").addEventListener("click", apicall);
}
function pTag(val) {
    var div = document.querySelector("#result");
    var p = document.createElement("p");
    p.innerText = val;
    div.appendChild(p);
}
function print(data) {
    var div = document.querySelector("#result");
    div.innerHTML = "";
    var img = document.createElement("img");
    img.src = data.imageURL;
    div.appendChild(img);
    pTag(data.fullName);
    pTag(data.profile);
}
function apicall() {    
    console.log("i m apicall");
    if (player.value != "-1") {
        var pid = document.querySelector("#player").value;
        var url = "http://cricapi.com/api/playerStats?pid=" + pid + "&apikey=F7go6GsqHAP45kqORbZGWvX8XrD2";
        var promise = fetch(url);
        promise.then(response => {
            response.json().then(data => {
                console.log("JSON is ", data);
                print(data);
            }).catch(err => {
                console.log("Invalid Json!");
            }).catch(err => {
                console.log("Network or Connecton Error!");
            })
        })
    }
}
