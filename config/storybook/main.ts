import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';

import { StorybookConfig } from '@storybook/react-webpack5';

import { BuildPaths } from '../build/types/config';

const config: StorybookConfig = {
	stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config: Configuration) => {
		const paths: BuildPaths = {
			build: '',
			html: '',
			entry: '',
			src: path.resolve(__dirname, '..', '..', 'src'),
			buildLocales: '',
			locales: '',
		};

		config!.resolve!.modules!.push(paths.src);
		config!.resolve!.extensions!.push('.ts', '.tsx');

		config!.resolve!.alias = {
			...config!.resolve!.alias,
			'@': paths.src,
		};

		config!.module!.rules = config.module!.rules!.map(
			// @ts-ignore
			(rule: RuleSetRule) => {
				if (/svg/.test(rule.test as string)) {
					return { ...rule, exclude: /\.svg$/i };
				}

				return rule;
			},
		);

		config.module?.rules.push({
			test: /\.s[ac]ss$/i,
			use: ['style-loader', 'sass-loader'],
			include: path.resolve(__dirname, 'src'),
		});

		return config;
	},
};
export default config;
