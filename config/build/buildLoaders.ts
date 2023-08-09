import { RuleSetRule } from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
	const cssLoader = buildCssLoader(isDev);

	const svgLoader = buildSvgLoader();

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const codeBabelLoader = buildBabelLoader({ isDev, isTsx: false });
	const tsxCodeBabelLoader = buildBabelLoader({ isDev, isTsx: true });

	return [
		fileLoader,
		svgLoader,
		codeBabelLoader,
		tsxCodeBabelLoader,
		cssLoader,
	];
};
