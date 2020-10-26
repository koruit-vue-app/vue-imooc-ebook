import WebStorageCache from 'web-storage-cache'

const localStore = new WebStorageCache()

export function setLocalStorage (key, value) {
  return localStore.set(key, value)
}

export function getLocalStorage (key) {
  return localStore.get(key)
}

export function removeLocalStorage (key) {
  return localStore.delete(key)
}

export function clearLocalStorage () {
  return localStore.clear()
}

export function setBookObject (fileName, key, value) {
  let book = getLocalStorage(`${fileName}-info`)
  if (!book) {
    book = {}
  }
  book[key] = value
  return setLocalStorage(`${fileName}-info`, book)
}

export function getBookObject (fileName, key) {
  let book = getLocalStorage(`${fileName}-info`)
  if (book) {
    return book[key]
  } else {
    return null
  }
}

export function setFontFamily (fileName, font) {
  return setBookObject(fileName, 'fontFamily', font)
}

export function getFontFamily (fileName) {
  return getBookObject(fileName, 'fontFamily')
}

export function setFontSize (fileName, size) {
  return setBookObject(fileName, 'fontSize', size)
}

export function getFontSize (fileName) {
  return getBookObject(fileName, 'fontSize')
}

export function setLocale (locale) {
  return setLocalStorage('locale', locale)
}

export function getLocale () {
  return getLocalStorage('locale')
}

