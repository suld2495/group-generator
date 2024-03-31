import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { } from '@redux-devtools/extension';

export type Group = {
  name: string;
  count: number;
}

interface Result {
  [k: string]: string[];
}

type GeneratorState = {
  persons: string[];
  groups: Group[];
  result: Result;
  addPerson: (name: string) => boolean;
  addGroup: (group: Group) => boolean;
  deletePerson: (index: number) => void;
  deleteGroup: (index: number) => void;
  isReady: () => boolean;
  save: (result: Result) => void;
  reset: () => void;
};

const useGeneratorStore = create<GeneratorState>()(
  devtools(
    (set, get) => ({
      persons: [],
      groups: [],
      result: {},

      addPerson: (name) => {
        const result = get().persons.includes(name);

        if (result) return false;

        set((state) => ({ persons: [...state.persons, name] }));
        return true;
      },

      deletePerson: (index) => (
        set((state) => ({ persons: state.persons.toSpliced(index, 1) }))
      ),

      addGroup: (group) => {
        const result = get().groups.includes(group);

        if (result) return false;

        set((state) => ({ groups: [...state.groups, group] }))
        return true;
      },

      deleteGroup: (index) => (
        set((state) => ({ groups: state.groups.toSpliced(index, 1) }))
      ),

      isReady: () => !!Math.min(get().persons.length, get().groups.length),

      save: (result) => set({ result }),

      reset: () => set({ persons: [], groups: [], result: {} }),
    }),
    {
      name: "generator-storage",
    },
  )
);

export default useGeneratorStore;
