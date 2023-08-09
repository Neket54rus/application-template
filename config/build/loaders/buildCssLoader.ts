import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => ({
	test: /\.s[ac]ss$/i,
	use: [
		isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				modules: {
					auto: (resPath: string) =>
						Boolean(resPath.includes('.module.')),
					localIdentName: isDev
						? '[name]__[local]'
						: '[hash:base64:8]',
				},
			},
		},
		'sass-loader',
	],
	exclude: /node_modules/,
});