const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1,//-1不显示，0字号，1主题，2进度，3目录
    defaultFontSize: 16,
    currentBook: null,
    defaultFontFamily:'Default'
  },
  mutations: {
    'set_fileName': (state, newFileName) => {
      state.fileName = newFileName
    },
    'set_menuVisible': (state, value) => {
      state.menuVisible = value
    },
    'set_settingVisible': (state, value) => {
      state.settingVisible = value
    },
    'set_defaultFontSize': (state, value) => {
      state.defaultFontSize = value
    },
    'set_currentBook': (state, currentBook) => {
      state.currentBook = currentBook
    },

    'set_defaultFontFamily': (state, defaultFontFamily) => {
      state.defaultFontFamily = defaultFontFamily
    }


  },

}

export default book
