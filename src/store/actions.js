const actions = {

  setFileName: ({ commit }, fileName) => {
    return commit('set_fileName', fileName)
  },
  setMenuVisible: ({ commit }, value) => {
    return commit('set_menuVisible', value)
  },
  setSettingVisible: ({ commit }, value) => {
    return commit('set_settingVisible', value)
  },

  setDefaultFontSize: ({ commit }, value) => {
    return commit('set_defaultFontSize', value)
  },

  setCurrentBook: ({ commit }, currentBook) => {
    return commit('set_currentBook', currentBook)
  },
  setDefaultFontFamily:({commit},defaultFontFamily)=>{
    return commit('set_defaultFontFamily',defaultFontFamily)
  },

  setFontFamilyVisible:({commit},fontFamilyVisible)=>{
    return commit('set_fontFamilyVisible',fontFamilyVisible)
  },

}

export default actions
