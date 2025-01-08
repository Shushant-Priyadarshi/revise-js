
const addItem = (langName)=>{
    let list = document.querySelector("#lang-list")
    const listItem = document.createElement("li");
    listItem.innerText = langName;
    list.appendChild(listItem);

}

const addOptimizeWay = (langName) =>{
    const li =  document.createElement("li");
    li.appendChild(document.createTextNode(langName))
    document.querySelector("#lang-list").appendChild(li)

}




addItem("Java")
addItem("Python")
addItem("Ruby")
addItem("Sql")

addOptimizeWay("Prisha")

//Edit
const secondName =document.querySelector("li:nth-child(2)")
secondName.innerHTML="Shushant"
