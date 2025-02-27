import { BasePage } from '@zeppos/zml/base-page'
import { log as Logger } from '@zos/utils'
import { layout } from 'zosLoader:./index.[pf].layout.js'

const logger = Logger.getLogger('ble-http-proxy.page')

Page(
  BasePage({
    name: 'ble-http-proxy.page',
    state: {},
    build() {
      logger.log('page build invoked')
      layout.render(this)
    },

    onInit() {
      logger.log('page onInit invoked')
    },

    readAsync() {
      return this.httpRequest({
        method: 'get',
        url: 'https://bible-api.com/john%203:16',
      })
        .then((result) => {
          layout.updateTxtSuccess(result.body.text)
          logger.log('result=>%j', result)
        })
        .catch((error) => {
          layout.updateTxtError(error.message)
          logger.error('error=>%j', error)
        })
    },

    onDestroy() {
      logger.log('page onDestroy invoked')
    },
  }),
)
