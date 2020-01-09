import { LS_TOKEN } from "@/api/utils";

export const initState = () => ({
  // getItem returns null, not undefined
  token:
    localStorage.getItem(LS_TOKEN) !== null
      ? localStorage.getItem(LS_TOKEN)
      : undefined
});
