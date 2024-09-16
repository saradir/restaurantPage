export function loadAbout(){
    const contentElement = document.querySelector("#content");

    const headline = document.createElement("h1");
    const para = document.createElement("p");
    headline.textContent = "How it all began...";
    para.textContent = "In 1969, in  a small town in the south of...";

    contentElement.appendChild(headline);
    contentElement.appendChild(para);
}