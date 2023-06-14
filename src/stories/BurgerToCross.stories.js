import { useState } from "react"

import MyBurgerToCross from '../components/BurgerToCross/BurgerToCross.js'

export default {
  title: 'Common components/BurgerToCross',
  component: MyBurgerToCross
}

const Template = (args) => {
  const [active, setActive] = useState(args.active ?? false)

  return <
    MyBurgerToCross
    active={active}
    setActive={(e) => {
      setActive(e)
    }}
    {...args}
  />
}

export const BurgerToCross = Template.bind({})
