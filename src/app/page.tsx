import DisplayList from "./_components/displayList/DisplayList";
import GroupInput from "./_components/groupInput/GroupInput";
import MainButtons from "./_components/mainbuttons/MainButtons";
import PersonInput from "./_components/personInput/PersonInput";
import styled from "./page.module.css";

export default function Home() {
  return (
    <main className={styled.main}>
      <div className={styled['main_input-container']}>
        <PersonInput />
        <GroupInput />
      </div>
      <DisplayList />
      <MainButtons />
    </main>
  );
}
