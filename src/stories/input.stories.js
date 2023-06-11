import MyInput from '../components/Input/Input.js'

export default {
  title: 'Common components/Input',
  component: MyInput
}

const Template = {
  args: {
  },
  render: (args) => <MyInput {...args} />
}

export const Input = {
  ...Template
}

export const InputDisabled = {
  ...Template,
  args: {
    disabled: true
  }
}

export const InputError = {
  ...Template,
  args: {
    error: true
  }
}

export const InputDisabledError = {
  ...Template,
  args: {
    disabled: true,
    error: true
  }
}