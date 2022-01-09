import React,{ useState } from "react"

export function Form() {

    const [FormState,setFormState] = useState ({
        fname : "",
        url : "",
        api : ""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormState({...FormState,[name]:value});
    }


    return (
        <form>
            <div>
                <label> Name of the Form: </label>
                <input type="text" value={FormState.fname} onChange={handleInput} placeholder="text" name="fname"required autoFocus></input>
            </div>
            <div>
                <label> URL of the Form: </label>
                <input type="url" value={FormState.url} onChange={handleInput} placeholder="URL" name="url" required></input>
            </div>
            <div>
                <label> API Key: </label>
                <input type="url" value={FormState.api} onChange={handleInput} placeholder="URL" name="api" required></input>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    );
};