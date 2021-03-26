

let userInputs = [];

const addTask = (ev) => {
    ev.preventDefault(); // to stop the form from submitting
    let input = document.getElementById('helper').value;
    userInputs.push(input);
    // clear the first form in the document object for future entries   
    document.forms[0].reset();
    
    console.warn('added', {userInputs}); // for output purpose

    var list = document.createElement("li");
    var butt = document.createElement("span");
    butt.className = "delete";
    // butt.id = (userInputs.length).toString();

    // butt.onclick = function() {
    //     let ul = document.getElementById("unordered_list");
    //     let lis = ul.getElementsByTagName("li");
    //     // ul.removeChild(lis[parseInt(butt.id) - 1]);
    //     // ul.removeChild(ul.firstChild);
    //     for (var i = 0; i < lis.length; i++) {
    //         // lis[i].id = (parseInt(lis[i].id) - 1).toString();
    //         // if (parseInt(butt.id) === lis.length) {
    //         //     ul.removeChild(ul.lastChild); 
    //         // } else 
    //         if (lis[i].getElementsByTagName("button").id === butt.id) {
    //             ul.removeChild(lis[i]);
    //         }  
    //     }
    // };
    
    // butt.addEventListener("click", (ev) => {
    //     let ul = document.getElementById("unordered_list");
    //     let lis = ul.getElementsByTagName("li");
    //     ul.removeChild(ul.firstChild);
    // });

    var box = document.createElement("input");
    box.type = "checkbox";

    var node = document.createTextNode("x");
    butt.appendChild(node);
    
    var lab = document.createElement("label");
    var cont = document.createTextNode(userInputs[userInputs.length - 1]);
    lab.appendChild(cont);

    list.appendChild(butt);
    list.appendChild(box);
    list.appendChild(lab);


    document.getElementById("unordered_list").appendChild(list);
}

document.querySelector('ul').addEventListener('click', (ev) => {
    if (ev.target.className == 'delete') {
        let list_to_remove = ev.target.parentNode;
        let ul_parent = list_to_remove.parentNode;
        ul_parent.removeChild(list_to_remove);
        return;
    } 
    const task = ev.target.nextSibling;
    if(ev.target.checked){
        task.style.textDecoration = "line-through";
        task.style.color = "#ff0000";
    } else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
});





document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener('click', addTask);
    document.getElementById("clear").addEventListener('click', () => {
        userInputs.length = 0;
        // empty userInputs
        var ul = document.getElementById("unordered_list");
        while (ul.firstChild) ul.removeChild(ul.firstChild);
    });
    
});