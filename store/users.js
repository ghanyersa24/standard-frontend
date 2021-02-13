export const state = () => {
  return {
    listUsers: [
      {
        id: "1",
        name: "name",
        address: "address",
        phone: " phone",
        gender: "gender",
      },
      {
        id: "2",
        name: "name 2",
        address: "address 2",
        phone: " phone 2",
        gender: "gender 2",
      },
    ],
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
