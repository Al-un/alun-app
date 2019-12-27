import { API_BASE_URL, getHeaders } from "./utils";

export const memosApi = {
  getList: async () => {
    const resp = await fetch(`${API_BASE_URL}/v1/memos/`, {
      headers: getHeaders()
    });
    return await resp.json();
  },

  get: async id => {
    const resp = await fetch(`${API_BASE_URL}/v1/memos/${id}`, {
      headers: getHeaders()
    });
    return await resp.json();
  },

  create: async memo => {
    const resp = await fetch(`${API_BASE_URL}/v1/memos/`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(memo)
    });

    return await resp.json();
  },

  update: async memo => {
    const resp = await fetch(`${API_BASE_URL}/v1/memos/${memo.id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify({ ...memo, unknownField: "123456" })
    });

    return await resp.json();
  },

  delete: async id => {
    await fetch(`${API_BASE_URL}/v1/memos/${id}`, {
      method: "DELETE",
      headers: getHeaders()
    });
    // const resp = await fetch(`${API_BASE_URL}/v1/memos/${id}`, {
    //   method: "DELETE",
    //   headers: getHeaders()
    // });
    // return await resp.json();
  }
};
