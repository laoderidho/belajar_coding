// ini adalah file untuk register service worker
import * as WorkboxWindow from 'workbox-window'

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported in this browser')
    // eslint-disable-next-line no-useless-return
    return
  }

  const wb = new WorkboxWindow.Workbox('/sw.bundle.js')

  try {
    await wb.register()
    console.log('Service worker registered')
  } catch (error) {
    console.log('Service worker registration failed', error)
  }
}

export default swRegister
