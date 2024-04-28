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
};

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (_set, _get) => ({
        required: [],
      }),
      {
        name: "user",
      },
    )
  )
);

export default useUserStore;
