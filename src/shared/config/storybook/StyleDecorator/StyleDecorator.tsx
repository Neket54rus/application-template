// import { StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';

// eslint-disable-next-line neket54-plugin/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (StoryComponent: StoryFn) => <StoryComponent />;
