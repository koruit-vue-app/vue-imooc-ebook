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
