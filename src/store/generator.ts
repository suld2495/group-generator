import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { } from '@redux-devtools/extension';

type GeneratorState = {
  persons: string[];
  groups: string[];
  result: string[];
  addPerson: (name: string) => boolean;
  addGroup: (name: string) => boolean;
  isReady: () => boolean;
  save: (result: string[]) => void;
  reset: () => void;
};

const useGeneratorStore = create<GeneratorState>()(
  devtools(
    (set, get) => ({
      persons: [],
      groups: [],
      result: [],

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

      save: (result) => set({ result }),

      reset: () => set({ persons: [], groups: [], result: [] }),
    }),
    {
      name: "generator-storage",
    },
  )
);

export default useGeneratorStore;
