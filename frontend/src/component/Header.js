import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"

const Header = () =>{
    const Navigate = useNavigate();
    const [Image, setImage] =useState([]);
    const [business, setBusiness] = useState("")
    const [tagLine, setTagLine] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleImage = (e) =>{
        const files = e.target.files
        const file_data = new FormData()
        file_data.append("file", files[0])
        file_data.append('upload_preset','image_upload');
        file_data.append("cloud_name", "dxqgehmg9");
        fetch("https://api.cloudinary.com/v1_1/dxqgehmg9/image/upload", {
            method: "post",
            body:file_data
        }).then((res)=>res.json()).then((data) => setImage(data.url))
    }

    const handleSave =(e) =>{
        e.preventDefault()
        if(Image === "" || business === "" || tagLine=== "" || email === "" || phone === ""){
            alert("Enter Data")
        } else {
        localStorage.setItem("Image", Image)
        localStorage.setItem("business", business)
        localStorage.setItem("tagLine", tagLine)
        localStorage.setItem("email", email)
        localStorage.setItem("phone", phone)
        Navigate("/Head")
        }
    }

    console.log(Image)
    console.log(business)
    console.log(tagLine)
    console.log(email)
    console.log(phone)
    return(
        <>
        <div className="App">
           <div className="container">
            <div className="Head">
          <Link to={"/"}> <span class="material-symbols-outlined">
arrow_back
</span></Link> <h1 className="H">Header</h1></div>
                <div className="Input">
                <label>Logo Image</label><br/>
                <input type="file" className="addfile" placeholder="Add your Shop Logo" onChange={(e)=>{handleImage(e)}}/>
                </div>
                <div className="Input">
                <label>Business Name</label><br/>
                <input type="text" className="addtext" placeholder="Enter your Business Name" onChange={(e) =>{setBusiness(e.target.value)}}/>
                </div>
                <div className="Input">
                <label>Tag Line</label><br/>
                <input type="text" className="addtext" placeholder="Enter Tag Line"onChange={(e) =>{setTagLine(e.target.value)}}/>
                </div>
                <div className="Input">
                <label>Email Address</label><br/>
                <input type="text" className="addtext" placeholder="Enter your Email" onChange={(e) =>{setEmail(e.target.value)}}/>
                </div>
                <div className="Input">
                <label>Phone Number</label><br/>
                <input type="text" className="addtext" placeholder="+91  Enter your contact" onChange={(e) =>{setPhone(e.target.value)}}/>
                </div>
                <button className="buton" onClick={(e)=>{handleSave(e)}}>Save</button>
           </div>
        </div>
        </>
    )
}
export default Header;