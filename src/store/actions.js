const actions={

  setFileName: ({ commit }, fileName) => {
    return commit('set_fileName', fileName)
  },
  setMenuVisible: ({ commit }, value) => {
    return commit('set_menuVisible', value)
  }
}

export default actions
