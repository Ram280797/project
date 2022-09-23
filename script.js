let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","books");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);

let name=document.createElement("div");
name.setAttribute("id","name");
div.append(input,button,name);
document.body.append(div);

let isbn=document.createElement("div");
isbn.setAttribute("id","isbn");
div.append(input,button,isbn);
document.body.append(div);

let pages=document.createElement("div");
pages.setAttribute("id","pages");
div.append(input,button,pages);
document.body.append(div);

async function foo(){
    let booksname=document.getElementById("books").value;
    console.log(booksname);
    let url= `https://www.anapioficeandfire.com/api/books/${booksname}`;
    let data1=await fetch(url);
    let data2=await data1.json();
    console.log(data2);
    let index=data2.length-1;
    console.log(data2[index].name);
    name.innerHTML=`name:${data2[index].Name}`;
    console.log(data2[index].isbn);
    isbn.innerHTML=`isbn:${data2[index].isbn}`;
    console.log(data2[index].pages);
    pages.innerHTML=`number of pages:${data2[index].pages}`;
}
foo();