/** @type { import('@storybook/react').Preview } */
import { Title, Subtitle, Description, Primary, Controls } from '@storybook/blocks';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
        </>
      ),
    },
  },
}

export default preview
