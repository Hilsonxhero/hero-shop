import { withInstall, withNoopInstall } from '@/core/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const HxForm = withInstall(Form, {
  FormItem,
})
export default HxForm
export const HxFormItem = withNoopInstall(FormItem)

export * from './src/form'
export * from './src/form-item'
export * from './src/types'

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>
