import { memosApi } from "../../api/memo";
import { mutationsName } from "./mutations";

export const actionsName = {
  loadMemos: "loadMemos",
  loadMemoDetail: "loadMemoDetail",
  createMemo: "createMemo",
  updateMemo: "updateMemo",
  deleteMemo: "deleteMemo"
};

export const actions = {
  [actionsName.loadMemos]: async ({ commit }) => {
    const list = await memosApi.getList();
    commit(mutationsName.setMemos, list);
  },

  [actionsName.loadMemoDetail]: async ({ commit }, { id }) => {
    const detail = await memosApi.get(id);
    commit(mutationsName.updateMemos, { id: id, memo: detail });
  },

  [actionsName.createMemo]: async ({ commit }, { entity }) => {
    const detail = await memosApi.create(entity);
    commit(mutationsName.addMemos, [detail]);
  },

  [actionsName.updateMemo]: async ({ commit }, { entity }) => {
    const detail = await memosApi.update(entity);
    commit(mutationsName.updateMemos, { id: detail.id, memo: detail });
  },

  [actionsName.deleteMemo]: async ({ commit }, { id }) => {
    await memosApi.delete(id);
    commit(mutationsName.removeMemo, id);
  }
};
