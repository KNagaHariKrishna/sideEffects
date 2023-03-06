import React, { useEffect, useState } from "react";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpeg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpeg";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/img6.webp";

export default function Parent(){
    const img=new Set([img1,img2,img3,img4,img5,img6])
const arr=[...img.entries()]
const i=arr.map(e=>e[0])[Math.floor(Math.random()*6)]
img.delete(i)
return <img src="i" alt="imgs"/>
}

