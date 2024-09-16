export function loadHome(){
    const contentElement = document.querySelector("#content");

    const headline = document.createElement("h1");
    const para = document.createElement("p");
    headline.textContent = "Mario's pizza place";
    para.textContent = "It's the best pizza place in town";

    contentElement.appendChild(headline);
    contentElement.appendChild(para);

}