import DisplayList from "./_components/displayList/DisplayList";
import MainButtons from "./_components/mainbuttons/MainButtons";
import Result from "./_components/result/Result";
import styled from "./page.module.css";
import InputDisplay from "./_components/inputDisplay/InputDisplay";
import Register from "./_components/register/Register";
import Link from "next/link";
import Move from "./move/page";

export default function Home() {
  

  return (
    <main className={styled.main}>
      <Register />
      <InputDisplay />
      <DisplayList />
      <MainButtons />
      <Result />
      <Move />
    </main>
  );
}
