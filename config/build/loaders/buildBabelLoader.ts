import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps {
	isTsx: boolean;
	isDev: boolean;
}

export const buildBabelLoader = (props: BuildBabelLoaderProps) => ({
	test: props.isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			presets: ['@babel/preset-env'],
			plugins: [
				[
					'@babel/plugin-transform-typescript',
					{
						isTsx: props.isTsx,
					},
				],
				'@babel/plugin-transform-runtime',
				props.isTsx &&
					!props.isDev && [
						babelRemovePropsPlugin,
						{
							props: ['data-testid'],
						},
					],
			].filter(Boolean),
		},
	},
});
