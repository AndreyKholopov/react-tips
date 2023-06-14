import MyBubble from '../components/Bubble/Bubble.js'

export default {
  title: 'Common components/Bubble',
  component: MyBubble
}

const Template = (args) => {
  return <MyBubble{...args}/>
}

export const Bubble = Template.bind({})

export const BlurBubble = Template.bind({})
BlurBubble.args = {
  blur: true
}
