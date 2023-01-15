function ListItems(){ 

    //arrow function that adds an item to the list with id tage 'list'
    const addItem = () => {

        //if theres nothing in the textbox, stop the function (no list item will be added)
        if(document.getElementById("text").value === ""){
            return;
        }

        //creates a list node
        const node = document.createElement("li");

        //creates an input node then makes the type 'checkbox'
        const nodetype = document.createElement("input");
        nodetype.type = "checkbox";

        //appends the checkbox to the list node
        node.appendChild(nodetype);

        //gets the text from the textbox
        const textnode = document.createTextNode(document.getElementById("text").value);

        //appends the text to the list node
        node.appendChild(textnode);

        //adds the node to the list 
        document.getElementById("list").appendChild(node);

        //removes the text from the textbox
        document.getElementById("text").value = "";

    }

    //arrow function to remove all items in the list
    const reset = () => {
    
        const items = document.getElementById("list");
        items.innerHTML = "";
    }

    return(
        <div className = "task-container">
            <div className = "enter-item">
            <p className = "todotext">Enter To-Do Item</p> <input id = "text"></input>
            <ul id = "list" style = {{listStyle: 'none'}}> </ul>
            </div>
            <div className = "button-container">
            <button className = "addButton" onClick = {addItem}>Add</button>
            <button className = "resetButton" onClick = {reset}>Reset</button>
            </div>
        </div>
    )
}

export default ListItems;