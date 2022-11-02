import React from "react";


const AddTrsaction = () =>{
    return(

        <div className="from-wiappei">
            <form >
                <div className="input-group income">
                    <input type="text" placeholder="Enter Name" autoComplete="off"/>
                    <input placeholder="Amount" type="number" autoComplete="off"/>
                    <input  type="submit" value="Submit"/>
                </div>
            </form>
            <form >
                <div className="input-group expense">
                    <input type="text" placeholder="Enter Name" autoComplete="off"/>
                    <input placeholder="Amount" type="number" autoComplete="off"/>
                    <input  type="submit" value="Submit"/>
                </div>
            </form>

        </div>
    )

}
export default AddTrsaction;
