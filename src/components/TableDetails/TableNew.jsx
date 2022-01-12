import React,{ useState } from "react"
import MOCKDATA from "./MOCK_DATA.json"

export function Table() {

    const [details,setDetails] = useState(MOCKDATA);

    return (
        <>
            <div>
                <label>Search: </label>
                <input type="text" placeholder="type something"></input>
                <button>ok</button>
            </div>
            <div>
                <table>
                    <thead>
                        <th>Registration No.</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Phone No.</th>
                        <th>Comments</th>
                        <th>Marked</th>
                    </thead>
                    <tbody>
                        {details.map((details) => ( 
                            <tr>
                                <td>{details.RegNo}</td>
                                <td>{details.Name}</td>
                                <td>{details.email}</td>
                                <td>{details.phone}</td>
                                <td>
                                    <textarea rows="5" cols="10"></textarea>
                                </td>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}