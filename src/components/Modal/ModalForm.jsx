import React,{ useState } from "react"
import Close  from "../../assets/images/cancel.png";
import "./ModalForm.css"

export function Modal ({
    show, close
}) {
    const [formDetails,setFormDetails] = useState ({
        fname: "",
        url: "",
        api: ""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormDetails({...formDetails,[name]:value});
    }

    return (<>
            <div className={`modalContainer ${show? "show":""}`} onClick={() => close()}>
                <div className={`modal ${ show? "show":""}`} onClick={(e) => e.stopPropagation()}> 
                    <header className="modalHeader">
                        <h2 className="headerTitle"> Event Form</h2>
                            <button className="buttonClose" onClick={() => close()}>
                                <img src={Close} alt="Close" /> 
                            </button>
                    </header>
                        <form autoComplete="off">
                            <div className="nameInput">
                                <div className="form-section">
                                    <input type="text" value={formDetails.fname} onChange={handleInput} name="fname" required/>
                                    <label className="formLable">
                                        <span className="formSpan">Name</span>
                                    </label>
                                </div>
                            </div>
                            <div className="nameInput">
                                <div className="form-section">
                                    <input type="url" value={formDetails.url} onChange={handleInput} name="url" required/>
                                    <label className="formLable">
                                        <span className="formSpan">URL</span>
                                    </label>
                                </div>
                            </div>
                            <div className="nameInput">
                                <div className="form-section">
                                    <input type="url" value={formDetails.api} onChange={handleInput} name="api" required/>
                                    <label className="formLable">
                                        <span className="formSpan">API Key</span>
                                    </label>
                                </div>
                            </div>
                            <footer className="modalFooter">
                                <div className="Button">
                                    <button className="submitButton" type="Submit">Submit</button>
                                </div>
                            </footer>
                           {/* </>*/}
                        </form>
                   </div>
                </div>
            
        </>
    );
}