import React,{ useState } from "react"

export function Form() {

    const [FormEvent,setFormEvent] = useState ({
        fname : "",
        url : "",
        api : ""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormEvent({...FormEvent,[name]:value});
    }


    return (
        <form>
            <div>
                <label> Name of the Form: </label>
                <input type="text" value={FormEvent.fname} onChange={handleInput} placeholder="text" name="fname"required autoFocus></input>
            </div>
            <div>
                <label> URL of the Form: </label>
                <input type="url" value={FormEvent.url} onChange={handleInput} placeholder="URL" name="url" required></input>
            </div>
            <div>
                <label> API Key: </label>
                <input type="url" value={FormEvent.api} onChange={handleInput} placeholder="URL" name="api" required></input>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    );
};