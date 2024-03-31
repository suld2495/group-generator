import DisplayList from "./_components/displayList/DisplayList";
import MainButtons from "./_components/mainbuttons/MainButtons";
import PersonRegister from "./_components/personRegister/PersonRegister";
import Result from "./_components/result/Result";
import styled from "./page.module.css";
import InputDisplay from "./_components/inputDisplay/InputDisplay";

export default function Home() {
  

  return (
    <main className={styled.main}>
      <PersonRegister />
      <InputDisplay />
      <DisplayList />
      <MainButtons />
      <Result />
    </main>
  );
}
