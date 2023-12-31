import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
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

	// @ts-ignore
	config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});

	config!.module!.rules!.push(buildCssLoader(true));

	return config;
};
