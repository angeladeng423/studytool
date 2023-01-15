import React, {useState, useEffect} from 'react';

function Notes(){
    const [text, setText] = useState("This is a note!");
    const [updated, setUpdated] = useState('');

    const handleChange = (event) =>{
        setText(event.target.value);
        console.log("3");
    }
    
    const handleKeyDown = (event) =>{
        if(event.key === 'Enter'){
            setUpdated(text)
            console.log("hello");
        }
    }

    function userInput({type}){
        const input = <input
            type="text"
            id="text"
            name="text"
            value={updated}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
        return input;
    }

    return(
        <div className = "note">
            <span onClick={()=>{
                setText(userInput("text"))
            }}>{text}</span>
            <div className = "note-footer">
                <small>space for notes!</small>
            </div>
        </div>
    )
}

export default Notes;