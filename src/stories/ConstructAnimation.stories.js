import MyConstructAnimation from '../components/ConstructAnimation/ConstructAnimation.js'
import MyCard from '../components/Card/Card.js'

export default {
  title: 'Common components/Construct animation',
  component: MyConstructAnimation,
  args: {
    startAnimation: true
  }
}

const image = 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'

const Template = (args) => {
  const stylesH1 = {
    textAlign: 'center',
    'margin': '43vh 0'
  }

  return <MyCard
    height='95vh'
    overflow='hidden'
  >
    <MyConstructAnimation {...args}>
      <h1 style={stylesH1}>Контент под анимацией</h1>
    </MyConstructAnimation>
  </MyCard>
}

export const ConstructAnimation = Template.bind({})

export const ConstructAnimationWithImage = Template.bind({})
ConstructAnimationWithImage.args = {
  image: image
}
