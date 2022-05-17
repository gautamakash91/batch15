import React, { useState } from "react";
import myimage from "./logo.svg"

var a = 10;

var style = {
    width: 200,
    backgroundColor: "yellow",
    border: "1px solid black"
}
// export default class Akash extends React.Component{
//     render(){
//         return(
//             <div>
//                 this is the Class Akash component
//                 <img 
//                     src={myimage}
//                     style={{width: 200}}
//                 />
//             </div>
//         )
//     }
// }

export default function AkashFunction() {
    const [name, setName] = useState("Nextstacks");

    return (
        <div>
            this is the function Akash component
            <img 
                src={myimage}
                style={style}
            />
            {name}
        </div>
    )
}