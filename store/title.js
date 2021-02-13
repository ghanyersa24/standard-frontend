export const state = () => {
  return {
    title: "Judul Halaman",
  };
};

export const mutations = {
  SET_TITLE(state, data) {
    state.title = data;
  },
};

export const actions = {
  SET_TITLE({ commit }, data) {
    commit("SET_TITLE", data);
  },
};
