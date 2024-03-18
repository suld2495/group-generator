import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { } from '@redux-devtools/extension';

type GeneratorState = {
  persons: string[];
  groups: string[];
  addPerson: (name: string) => void;
  addGroup: (name: string) => void;
};

const useGeneratorStore = create<GeneratorState>()(
  devtools(
    persist(
      (set) => ({
        persons: [],
        groups: [],
        addPerson: (name) => set((state) => ({ persons: [...state.persons, name] })),
        addGroup: (name) => set((state) => ({ groups: [...state.groups, name] })),
      }),
      {
        name: "generator-storage",
      },
    )
  )
);

export default useGeneratorStore;
