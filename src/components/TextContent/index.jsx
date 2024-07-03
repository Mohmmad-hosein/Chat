import React, { useEffect, useState } from "react";
import "../css/Content.css";
import { TextWarper } from "./TextWarper";
import axios from "axios";

export const Content = () => {
  const [Mas, setMas] = useState([]);

  const GetMas = async () => {
        const res = await axios.get("https://660eb36b356b87a55c4fd0f9.mockapi.io/card/Chat")
        setMas(res.data)
  } 

  useEffect(() => {
    GetMas()
  }, [])
  

  return (
    <div dir="rtl" className="contentoftext">
      <TextWarper Mas={Mas} />
    </div>
  );
};
