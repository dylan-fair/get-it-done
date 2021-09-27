let userFormEl = document.querySelector("#user-form");
let nameInputEl = document.querySelector("#username");
let getUserRepos = function(user){
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        })
    })

}
let formSubmitHandler = function(event){
    event.preventDefault();
    let username = nameInputEl.value.trim();
    if(username){
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
}
userFormEl.addEventListener("submit", formSubmitHandler);