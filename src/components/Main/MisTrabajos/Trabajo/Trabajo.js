import React from "react";

import "./Trabajo.css";

const Trabajo = (trabajo)=>{

    return(
        <a className="trabajos__list__trabajo" href="#">
            <div style={{backgroundImage:`url(${trabajo.image})`}} className="trabajos__list__trabajo__figure">
            </div>
        </a>
    );
}

export default Trabajo;