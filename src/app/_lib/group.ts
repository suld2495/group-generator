type GroupProps = {
  persons: string[];
  groups: string[];
}

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const group = (props: GroupProps) => {
  const { persons, groups } = props;
  const result: string[] = [];
  const groupCount = Math.ceil(persons.length / groups.length);
  let index = 0;

  shuffleArray(persons);

  for (let i = 0; i < groupCount; i++) {
    for (let j = 0; j < groups.length; j++) {
      if (index === persons.length) break;
      result.push(`${persons[index]}: ${groups[j]}`);
      index++;
    }
  }

  return result.toSorted((a, b) => {
    const [personA, groupA] = a.split(':').map(str => str.trim());
    const [personB, groupB] = b.split(':').map(str => str.trim());

    const groupComparison = groupA.localeCompare(groupB);
    return groupComparison !== 0 ? groupComparison : personA.localeCompare(personB);
  });
};;