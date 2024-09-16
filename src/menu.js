export function loadMenu(){
    const contentElement = document.querySelector("#content");

    // Data for menus
    const pizzaData = [
        {name: "Pizza with something", price: "$10"},
        {name: "Pizza with something else", price: "$20"},
        {name: "Pizza with another thing", price: "$40"},
    ];

    const toppingData = [
        {name: "Some VEG", price: "$5"},
        {name: "Some Cheese", price: "$5"},
        {name: "Some Meat", price: "$5"},
        {name: "Some Fish", price: "$5"},        
    ];

    const beverageData = [
        {name: "beverage1", price: "$3"},
        {name: "beverage2", price: "$3"},
        {name: "beverage3", price: "$3"},
        {name: "beverage4", price: "$3"},
    ];
    

    // create headline
    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";
    contentElement.appendChild(headline);
    
    // build pizza menu
    const pizzaDiv = document.createElement('div');
    pizzaDiv.className = "pizza menu";
    const pizzaHeadline = document.createElement('h2');
    pizzaHeadline.textContent = "Our Pizza Selection:";
    pizzaDiv.appendChild(pizzaHeadline);

    const pizzaMenu = buildMenu(pizzaData);
    pizzaDiv.appendChild(pizzaMenu);
    contentElement.appendChild(pizzaDiv);

    // build topping menu
    const toppingDiv = document.createElement('div');
    toppingDiv.className = "topping menu";
    const toppingHeadline = document.createElement('h2');
    toppingHeadline.textContent = "Our Toppings:";
    toppingDiv.appendChild(toppingHeadline);

    const toppingMenu = buildMenu(toppingData);
    toppingDiv.appendChild(toppingMenu);
    contentElement.appendChild(toppingDiv);

    // build beverage menu
    const beverageDiv = document.createElement('div');
    beverageDiv.className = "beverage menu";
    const beverageHeadline = document.createElement('h2');
    beverageHeadline.textContent = "Our Beverage Selection:";
    beverageDiv.appendChild(beverageHeadline);

    const beverageMenu = buildMenu(beverageData);
    beverageDiv.appendChild(beverageMenu);
    contentElement.appendChild(beverageDiv);
};


function buildMenu(menuData){

    const ul = document.createElement('ul');
    menuData.forEach(item => {
        const li = document.createElement("li");
        li.className = "menu-item";

        const leftSpan = document.createElement("span");
        leftSpan.className = "left-item";
        leftSpan.textContent = item.name;

        const rightSpan = document.createElement("span");
        rightSpan.className = "right-item";
        rightSpan.textContent = item.price;

        li.appendChild(leftSpan);
        li.appendChild(rightSpan);
        ul.appendChild(li);
    });
    return ul;
};
