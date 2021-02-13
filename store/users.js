export const state = () => {
  return {
    listUsers: [],
    detail: {
      id: "",
      name: "",
      address: "",
      phone: "",
      gender: "",
    },
  };
};

export const mutations = {
  SET_LIST(state, data) {
    state.listUsers = data;
  },
};

export const actions = {
  SET_LIST({ commit }, data) {
    commit("SET_LIST", data);
  },
};
