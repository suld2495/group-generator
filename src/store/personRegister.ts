import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type PersonRegisterState = {
  persons: string[];
  addPerson: (name: string) => boolean;
  deletePerson: (index: number) => void;
};

const usePersonRegisterStore = create<PersonRegisterState>()(
  devtools(
    persist(
      (set, get) => ({
        persons: [],
        addPerson: (name) => {
          const result = get().persons.includes(name);

          if (result) return false;

          set((state) => ({ persons: [...state.persons, name] }));
          return true;
        },

        deletePerson: (index) => (
          set((state) => ({ persons: state.persons.toSpliced(index, 1) }))
        ),
      }),
      {
        name: "person-register-storage",
      },
    ),
  )
);

export default usePersonRegisterStore;