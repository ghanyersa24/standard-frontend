export const state = () => {
  return {
    list: [
      {
        checked: false,
        name: "Ghany Abdillah Ersa",
        position: "left",
      },
      {
        checked: false,
        name: "Allyvio Yonim Mahardika",
        position: "left",
      },
      {
        checked: false,
        name: "Fajri Rahman",
        position: "right",
      },
      {
        checked: false,
        name: "Jihadul Akbar",
        position: "right",
      },
    ],
  };
};

export const mutations = {
  ADD_NAME(state, data) {
    state.list.push(data);
  },
  CHECK_NAME(state, index) {
    state.list[index].checked = !state.list[index].checked;
  },
  MOVE_NAME(state, { index, position }) {
    state.list[index].position = position;
  },
};

export const actions = {
  ADD_NAME({ commit }, data) {
    commit("ADD_NAME", data);
  },
  CHECK_NAME({ commit }, index) {
    commit("CHECK_NAME", index);
  },
  MOVE_NAME({ commit }, index, position) {
    commit("MOVE_NAME", index);
  },
};
