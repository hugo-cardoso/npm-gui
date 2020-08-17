import { remote } from 'electron'

export default {
  minimizeWindow () {
    remote.BrowserWindow.getFocusedWindow().minimize()
  },
  maximizeWindow ({ getters }) {
    const window = remote.getCurrentWindow()

    if (getters.isMacSystem) {
      return window.setFullScreen(!window.isFullScreen())
    }

    const { width: currentWidth, height: currentHeight } = window.getBounds()

    const {
      width: maxWidth,
      height: maxHeight
    } = remote.screen.getPrimaryDisplay().workAreaSize

    const isMaximized = currentWidth === maxWidth && currentHeight === maxHeight

    if (!isMaximized) {
      window.maximize()
    } else {
      window.unmaximize()
    }
  },
  closeWindow () {
    remote.BrowserWindow.getFocusedWindow().close()
  },
  moveWindow () {
    remote.BrowserWindow.getFocusedWindow().setMovable()
  }
}
