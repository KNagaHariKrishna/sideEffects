import React, { useEffect, useState } from "react";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpeg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpeg";
import img5 from "./Images/img5.jpg";
import "./App.css"

function Img() {
  const [img, setImg] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [style, setStyle] = useState("");
  const [a, seta] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const handleClick2 = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const handleClick3 = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const handleClick4 = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const handleClick5 = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const arr = [
    { id: 0, a: <img src={img1} alt="img1"    
    style={{
      border: isActive ? '5px solid black' : '',
    }}
    onClick={handleClick}
    /> },
    { id: 1, a: <img src={img2} alt="img1"    
    style={{
      border: isActive ? '5px solid black' : '',
    }}
    onClick={handleClick2}
    /> },
    { id: 2, a: <img src={img3} alt="img1"    
    style={{
      border: isActive ? '5px solid black' : '',

    }}
    onClick={handleClick3}
    /> },
    { id: 3, a: <img src={img4} alt="img1" 
    style={{
      border: isActive ? '5px solid black' : '',
    }}
    onClick={handleClick4} 
    /> },
    { id: 4, a: <img src={img5} alt="img1" 
    style={{
      border: isActive ? '5px solid black' : '',
    }}
    onClick={handleClick5}
    /> },
  ];
  useEffect(()=>{
    let i = arr[Math.floor(Math.random() * 6)];
    setImg(i)  
  },[])

  arr.splice(img.id,0,img)



  // let f = 0;
  // console.log(r);
  const Check = (id) => {
    // setb(id)
    setStyle("a")
  };
  // console.log(img.id);

  const Final = () => {
  };
  

  return (
    <div>
      
      {/* {r==1? <h3>You are a human. Congratulations!</h3> : null}
      {a?<h3>We can't verify you as a human. You selected the non-identical tiles.</h3>:null} */}
      
      {arr.map((value, index) => {
        return (
          <span key={index} onClick={() => Check(index)} >
            {value.a}
          </span>
        );
      })}
      <button onClick={Final}>Verify</button>
    </div>
  );
}
export default Img;
