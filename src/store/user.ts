import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Group } from "./generator";
import { User } from "@/app/_lib/group";

export type GroupUser = {
  name: User[];
  group: Group;
}

type UserState = {
  required: GroupUser[];
  clear: () => void;
};

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set, _get) => ({
        required: [],

        clear() {
          set(() => ({ required: [] }));
        }
      }),
      {
        name: "user",
      },
    )
  )
);

export default useUserStore;
