const book = {
  state: {
    fileName: '',
    menuVisible: false,
    //-1不显示，0字号，1主题，2进度，3目录
    settingVisible: -1,
    defaultFontSize: 16,
    currentBook: null,
    defaultFontFamily: 'Default',
    fontFamilyVisible: false
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
    },

    'set_fontFamilyVisible': (state, fontFamilyVisible) => {
      state.fontFamilyVisible = fontFamilyVisible
    }

  }

}

export default book
