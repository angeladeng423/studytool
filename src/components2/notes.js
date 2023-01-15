import React, {useState, useEffect, useRef} from 'react';

function Notes(){
    const [text, setText] = useState("This is a note!");
    const [updated, setUpdated] = useState('');
    const ref = useRef()

    // const handleChange = (event) =>{
    //     setText(event.target.value);
    //     console.log("3");
    // }
    // console.log(ref.current.value)
    
    const handleKeyDown = (event) =>{
        if(event.key === 'Enter'){
            setUpdated(text)
            console.log("hello");
        }
    }

    function userInput(){
        const input = <input 
            className = "inputbox"
            type="text"
            id="text"
            name="text"
            // value={updated}
            // onChange={handleChange}
            ref={ref}
            onKeyDown={handleKeyDown}
        />
        return input;
    }

    return(
        <div className = "note">
            <p>+</p>
            <span onClick={()=>{
                setText(userInput())
            }}>{text}</span>
        </div>
    )
}

export default Notes;