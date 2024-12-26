import type { Preview } from '@storybook/react';

const viewports = {
  pixel8: {
    name: 'Pixel 8',
    styles: {
      width: '412px',
      height: '915px',
    },
  },
  pixel1: {
    name: 'Pixel 1',
    styles: {
      width: '412px',
      height: '732px',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
