import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [StyleDecorator],
};

export default preview;
