import { Form, Formik, Field } from "formik";
import React from "react";
import "../css/PostMes.css";
import axios from "axios";

export const SendMas = () => {
  const Submit = async (vlaue) => {
    if (vlaue.Mes == "") alert("لطفا فیلد خالی نزن");
    else {
      const Obj = { massege: vlaue.Mes, userid: 1 };
      const Post = await axios.post(
        "https://660eb36b356b87a55c4fd0f9.mockapi.io/card/Chat",
        Obj
      );
    }
  };

  return (
    <Formik initialValues={{ Mes: "" }} onSubmit={(vlaue) => Submit(vlaue)}>
      <Form>
        <div className="content">
          <button type="submit" className="Sub">
            {" "}
            ارسال{" "}
          </button>
          <Field
            dir="rtl"
            name="Mes"
            className="PostMas"
            placeholder="اضافه کردن پیام....."
          />
        </div>
      </Form>
    </Formik>
  );
};
