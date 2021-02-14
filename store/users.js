export const state = () => {
  return {
    listUsers: [],
    detail: {
      id: "",
      name: "",
      address: "",
      phone: "",
      gender: "M",
    },
  };
};

export const mutations = {
  SET_LIST(state, data) {
    state.listUsers = data;
  },
  SET_DETAIL(state, data) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        state.detail[key] = data[key];
      }
    }
  },
  UPDATE_LIST(state, data) {
    state.listUsers = data;
  },
};

export const actions = {
  SET_LIST({ commit }, data) {
    commit("SET_LIST", data);
  },
  SET_DETAIL({ commit }, data) {
    commit("SET_DETAIL", data);
  },
  UPDATE_LIST({ commit, state }, data) {
    const tmpListUsers = state.listUsers.map((user) => {
      if (user.id == data.id) return data;
      else return user;
    });
    console.log(data, tmpListUsers);
    commit("UPDATE_LIST", tmpListUsers);
  },
};
