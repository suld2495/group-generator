import { Group } from "@/store/generator";
import { GroupUser } from "@/store/user";

export type User = string;

type GroupProps = {
  persons: User[];
  groups: Group[];
  user: GroupUser[];
}

type Result = {
  [key: string]: string[]
};

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const assignUser = ({ user, persons, groups }: GroupProps) => {
  const result: Result = {};

  if (!user.length) return result;

  user
    .filter(({ name, group: { name: userGroup } }) => (
      name.every((name) => persons.includes(name)) &&
      groups.some(({ name }) => name === userGroup)
    ))
    .forEach(({ name, group }) => {
      result[group.name] = result[group.name] || [];
      result[group.name].push(...name);
      name.forEach((name) => persons.splice(persons.indexOf(name), 1));
    });

  return result;
}

export const group = (props: GroupProps) => {
  const { persons, groups } = props;
  const result: Result = assignUser(props);

  shuffleArray(persons);

  let index = 0;
  for (let j = 0; j < groups.length; j++) {
    const count = groups[j].count || Math.ceil(persons.length / groups.length);
    result[groups[j].name] = result[groups[j].name] || [];

    for (let i = result[groups[j].name].length; i < count; i++) {
      if (index === persons.length) break;
      result[groups[j].name].push(persons[index]);
      index++;
    }
  }

  Object.values(result).forEach((result) => result.sort());
  return result;
}