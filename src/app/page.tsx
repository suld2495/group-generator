import GroupInput from "./_components/groupInput/GroupInput";
import GroupList from "./_components/groupList/GroupList";
import MainButtons from "./_components/mainbuttons/MainButtons";
import PersonInput from "./_components/personInput/PersonInput";
import PersonList from "./_components/personList/PersonList";
import styled from "./page.module.css";

export default function Home() {
  return (
    <main className={styled.main}>
      <div className={styled['main_input-container']}>
        <PersonInput />
        <GroupInput />
      </div>
      <div className={styled['main_list']}>
        <PersonList />
        <GroupList />
      </div>
      <MainButtons />
    </main>
  );
}
