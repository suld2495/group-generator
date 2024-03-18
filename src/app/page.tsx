import GroupInput from "./_components/groupInput/GroupInput";
import PersonInput from "./_components/personInput/PersonInput";
import styled from "./page.module.css";

export default function Home() {
  return (
    <main className={styled.main}>
      <div className={styled['main_input-container']}>
        <PersonInput />
        <GroupInput />
      </div>
    </main>
  );
}
