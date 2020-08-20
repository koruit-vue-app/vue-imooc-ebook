const book = {
  state: {
    fileName: '',
    menuVisible: false,
  },
  mutations: {
    'set_fileName': (state, newFileName) => {
      state.fileName = newFileName
    },
    'set_menuVisible': (state, value) => {
      state.menuVisible = value
    }
  },

}

export default book
