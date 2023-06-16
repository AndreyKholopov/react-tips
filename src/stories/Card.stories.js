import MyCard from '../components/Card/Card.js'

export default {
  title: 'Common components/Card',
  component: MyCard
}

const Template = (args) => {
  return <MyCard {...args}/>
}

export const Card = Template.bind({})
