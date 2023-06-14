import { useState } from "react"

import MyInput from '../components/Input/Input.js'

export default {
  title: 'Common components/Input',
  component: MyInput,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
      description: 'Значение в поле'
    },
    setValue: {
      description: 'Функция, устанавливающая значение в поле'
    },
    attrs: {
      description: 'Любые параметры, которые работают с тегом input',
      type: {
        name: 'any'
      }
    }
  },
}

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? '')

  return <MyInput
    value={value}
    setValue={(e) => {
      setValue(e)
    }}
    {...args}
  />
}

export const Input = Template.bind({})

export const InputDisabled = Template.bind({})
InputDisabled.args = {
  disabled: true
}

export const InputError = Template.bind({})
InputError.args = {
  error: true
}


export const InputDisabledError = Template.bind({})
InputDisabledError.args = {
  disabled: true,
  error: true
}
