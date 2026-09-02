let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let p3 = document.createElement("p");
p3.textContent = "NOVO PARAGRAFO";
document.body.append(p3);

let div = document.createElement("div");
document.body.append(div);

let novop = document.createElement("p");
novop.textContent = "NOVO PARAGRAFO";
div.append(novop);

let h1 = document.createElement("h1");
h1.textContent = "Novo titulo";
p1.before(h1);

let h2 = document.createElement("h2");
h2.textContent = "Segundo titutlo";
p2.replaceWith(h2);

