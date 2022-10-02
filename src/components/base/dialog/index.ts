import { withInstall } from '@/core/utils'
import Dialog from './src/dialog.vue'

export const HxDialog = withInstall(Dialog)
export default HxDialog

export * from './src/use-dialog'
export * from './src/dialog'
