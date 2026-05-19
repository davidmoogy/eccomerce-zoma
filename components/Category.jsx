
import React from "react";

export default function Category({Setselectedcategory}){
    return(
        <div className="categoty-buttons">
            <button onClick={() => Setselectedcategory("Cleaning")} className="cleaning">Cleaning</button>
            <button onClick={() => Setselectedcategory("Kitchen")} className="kitchen">Kitchen</button>
            <button onClick={() => Setselectedcategory("Bathroom")} className="Bathroom">Bathroom</button>
            <button onClick={() => Setselectedcategory("Paper")} className="paper">Paper</button>
            <button onClick={() => Setselectedcategory("Rags")} className="rags">Rags</button>
       </div>
    )
}