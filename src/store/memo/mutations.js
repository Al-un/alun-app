export const mutationsName = {
  addMemos: "addMemos",
  setMemos: "setMemos",
  updateMemos: "updateMemos",
  removeMemo: "removeMemo"
};

export const mutations = {
  /**
   * Append new memos to the already loaded one
   */
  [mutationsName.addMemos]: (state, memos) => {
    state.memos =
      state.memos && state.memos.length
        ? [...state.memos, ...memos]
        : [...memos];
  },

  /**
   * Replace the memos list with the provided one
   */
  [mutationsName.setMemos]: (state, memos) => {
    state.memos = memos;
  },

  /**
   * Update a specific memo, if exist
   */
  [mutationsName.updateMemos]: (state, { id, memo }) => {
    state.memos = state.memos.map(m => {
      return m.id === id ? memo : m;
    });
  },

  /**
   * Bye bye
   */
  [mutationsName.removeMemo]: (state, id) => {
    state.memos = state.memos.filter(m => m.id !== id);
  }
};
