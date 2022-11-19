import { withInstall, withNoopInstall } from '@/core/utils'

import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'

export const HxRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup,
})
export default HxRadio
export const HxRadioGroup = withNoopInstall(RadioGroup)
export const HxRadioButton = withNoopInstall(RadioButton)

export * from './src/radio'
export * from './src/radio-group'
export * from './src/radio-button'
