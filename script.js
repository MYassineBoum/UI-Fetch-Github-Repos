let input = document.getElementById("input");
let grab = document.getElementById("grab");
let content = document.querySelector(".content");
let h2Text = document.getElementById("h2Text");

grab.addEventListener("click", function() {
 
    h2Text.remove();
    content.innerHTML = "";

    fetch(`https://api.github.com/users/${input.value}/repos`)

    .then((response) => response.json())

    .then((repositories) => {

        repositories.forEach(repository => {

            //infosDiv
            let infosDiv = document.createElement("div");

            let title = document.createElement("p");
            let description = document.createElement("p");
            let stars = document.createElement("p");
            let watchers = document.createElement("p");

            let url = document.createElement("a");
            url.href = repository.html_url;

            let titleText = document.createTextNode(`Name: ${repository.name}`);
            let descriptionText = document.createTextNode(`Description: ${repository.description}`);
            let starsText = document.createTextNode(`Stars: ${repository.stargazers_count}`);
            let watchersText = document.createTextNode(`Watchers: ${repository.watchers_count}`);

            title.appendChild(titleText);
            description.appendChild(descriptionText);
            stars.appendChild(starsText);
            watchers.appendChild(watchersText);

            url.appendChild(title);
            url.setAttribute("target", "_blank");

            infosDiv.appendChild(url);
            infosDiv.appendChild(description);
            infosDiv.appendChild(stars);
            infosDiv.appendChild(watchers);

            //Naming a class for each div
            infosDiv.className = "infosDiv";

            //Appending to content div (main div)
            content.appendChild(infosDiv);

        });

    });

    if(response == null){
        alert("Error!");
    }

    input.value = "";
    content.innerHTML = "";
});