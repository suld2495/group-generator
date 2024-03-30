import { Group } from "@/store/generator";

type GroupProps = {
  persons: string[];
  groups: Group[];
}

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const group = (props: GroupProps) => {
  const { persons, groups } = props;
  const result: { [key: string]: string[] } = {};

  shuffleArray(persons);

  let index = 0;
  for (let j = 0; j < groups.length; j++) {
    const count = groups[j].count || Math.ceil(persons.length / groups.length);
    result[groups[j].name] = [];
    for (let i = 0; i < count; i++) {
      if (index === persons.length) break;
      result[groups[j].name].push(persons[index]);
      index++;
    }
  }

  return result;
}