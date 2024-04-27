import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Group } from "./generator";

type RegisterState = {
  persons: string[];
  group: Group[];
  addPerson: (name: string) => boolean;
  deletePerson: (index: number) => void;
  addGroup: (props: Group) => boolean;
  deleteGroup: (index: number) => void;
};

const useRegisterStore = create<RegisterState>()(
  devtools(
    persist(
      (set, get) => ({
        persons: [],
        group: [],
        addPerson: (name) => {
          const result = get().persons.includes(name);

          if (result) return false;

          set((state) => ({ persons: [...state.persons, name].toSorted() }));
          return true;
        },

        deletePerson: (index) => (
          set((state) => ({ persons: state.persons.toSpliced(index, 1) }))
        ),
        addGroup: (group) => {
          const result = get().group.some(({ name: groupName }) => group.name === groupName);

          if (result) return false;

          set((state) => ({
            group: [...state.group, group].toSorted((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            })
          }));
          return true;
        },

        deleteGroup: (index) => (
          set((state) => ({ group: state.group.toSpliced(index, 1) }))
        ),
      }),
      {
        name: "register-storage",
      },
    ),
  )
);

export default useRegisterStore;