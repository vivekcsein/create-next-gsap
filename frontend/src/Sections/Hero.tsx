"use client";
import React from "react";
import dynamic from "next/dynamic";
import "@/Styles/Sections/Hero.scss";
import { createFormInput } from "@/libs/constants";
import Header from "@/Sections/Header";
import Button from "@/components/Button";
import FormInput from "@/components/core/FormInput";
import UserForm from "@/components/UserForm";
import SearchBox from "@/components/SearchBox";

// const FormInput = dynamic(() => import("@/components/core/FormInput"), {
//   ssr: false,
// });
const Hero = () => {
  const onChangehandler = () => {};
  return (
    <section className="Hero_Section">
      <div className="Hero_formSection">
        <UserForm />
      </div>
      <div className="Hero_searchBar">
        <SearchBox />
      </div>
      {/* <FormInput
        key={1}
        userFormInput={createFormInput}
        inputValue={"ok"}
        onChangehandler={onChangehandler}
      /> */}
    </section>
  );
};

export default Hero;
