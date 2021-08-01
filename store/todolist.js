export const state = () => {
  return {
    list: [
      { 
        checked:false,
      note:"Belajar membuat REST API"},
      { 
        checked:true,
      note:"Belajar membuat FRONT END NUXT"}
    ],
  };
};

export const mutations = {
  DELETE(state,note){
    state.list=state.list.filter((item)=>item.note!==note)
  },
  ADD(state,note){
    const hasNote=state.list.filter(item=>item==note)
    if(!hasNote.length)
    state.list.push({checked:false,note})
    else
    alert(note+" sudah ada dalam list")
  },
  CHECK(state,note){
    state.list.map(item=>{
      if(item.note==note){
        item.checked=!item.checked
      }
    })
  }
};

export const actions = {
  DELETE({ commit }, note) {
    commit("DELETE", note);
  }, ADD({ commit }, note) {
    commit("ADD", note);
  }, CHECK({ commit }, note) {
    commit("CHECK", note);
  },
};

export const getters={
  checkedlist(state){
    return state.list.filter(item=>item.checked==true)
  },
  unchecklist(state){
    return state.list.filter(item=>item.checked==false)
  },
}
