import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { } from '@redux-devtools/extension';

type GeneratorState = {
  persons: string[];
  groups: string[];
  addPerson: (name: string) => boolean;
  addGroup: (name: string) => boolean;
  isReady: () => boolean;
};

const useGeneratorStore = create<GeneratorState>()(
  devtools(
    persist(
      (set, get) => ({
        persons: [],
        groups: [],
        addPerson: (name) => {
          const result = get().persons.includes(name);

          if (result) return false;

          set((state) => ({ persons: [...state.persons, name] }));
          return true;
        },
        addGroup: (name) => {
          const result = get().groups.includes(name);

          if (result) return false;

          set((state) => ({ groups: [...state.groups, name] }))
          return true;
        },
        isReady: () => !!Math.min(get().persons.length, get().groups.length),
      }),
      {
        name: "generator-storage",
      },
    )
  )
);

export default useGeneratorStore;
