var list = document.getElementById("list")

function addtask() {
    // create li tag

    var todo = document.getElementById("todo-items")
    var li = document.createElement('li')
    li.setAttribute("class", "list_li")
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)
    list.appendChild(li)




    // delete btn tag 
    var delbtn = document.createElement('button')
    var dettext = document.createTextNode("delete")

    delbtn.append(dettext)
    li.appendChild(delbtn)
    delbtn.setAttribute("class", "delete-btn")
    delbtn.setAttribute("onclick", "deleteitem(this)")

    // edit btn tag  
    var delbtn = document.createElement('button')
    var dettext = document.createTextNode("Edit")
    delbtn.setAttribute("class", "Edit-btn")
    delbtn.setAttribute("onclick", "Edititem(this)")

    delbtn.append(dettext)
    li.appendChild(delbtn)

    todo.value = ""





}


function deleteitem(e) {
    e.parentNode.remove()
}

function deleteall() {
    list.innerHTML = ""
}

function Edititem(e) {
    var val = e.parentNode.firstChild.nodeValue
    var editvalue = prompt("Enter ", val)
    e.parentNode.firstChild.nodeValue = editvalue
}