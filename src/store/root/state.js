import { LS_TOKEN } from "@/api/utils";

export const initState = () => ({
  token: localStorage.getItem(LS_TOKEN)
});
