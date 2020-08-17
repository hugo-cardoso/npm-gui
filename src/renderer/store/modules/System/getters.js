import os from 'os'

export default {
  isMacSystem () {
    return os.platform() === 'darwin'
  }
}
