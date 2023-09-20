import Navbar from "@/app/components/Navbar";
import React from "react";

import "./style.css";
import ForgetpasswordCompo from "./ForgetpasswordCompo";
type Props = {};

export default function ForgetPassword({}: Props) {
  return (
    <>
      <Navbar />
      <ForgetpasswordCompo/>
      
    </>
  );
}
