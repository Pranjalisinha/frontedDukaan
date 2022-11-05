import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeadComponent.css"

const HeadComponent = () =>{
    const Navigate = useNavigate()
    const Business = localStorage.getItem("business")
    const TagLine = localStorage.getItem("tagLine")
    const Email = localStorage.getItem("email")
    const Phone = localStorage.getItem("phone")

    console.log(Business)
    console.log(TagLine)
    console.log(Email)
    console.log(Phone)
    const handleBack = (e) =>{
        e.preventDefault()
        localStorage.setItem("Image", "")
        localStorage.setItem("business", "")
        localStorage.setItem("tagline", "")
        localStorage.setItem("email", "")
        localStorage.setItem("phone", "")
        Navigate("/Home")
    }

    return (
        <>
        <div className="app">
            <div>
                <img src={"logo.PNG"} alt="Logo" width={70} height={70} className="img"/>
            </div>
            <div>
           <h2>{Business}</h2>
           <p>{TagLine}</p>
           </div>
           <div>
           <h3>{Email}</h3>
           <p>{Phone}</p>
           </div>
        </div>
        <button className="buton1" onClick={(e)=>handleBack(e)}>Go Back</button>
        </>
    )
}
export default HeadComponent;