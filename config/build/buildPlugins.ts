import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
	DefinePlugin,
	HotModuleReplacementPlugin,
	ProgressPlugin,
	WebpackPluginInstance,
} from 'webpack';

import { BuildOptions } from './types/config';

export const buildPlugins = (
	options: BuildOptions,
): WebpackPluginInstance[] => {
	const pluginsList = [
		new ProgressPlugin(),
		new HTMLWebpackPlugin({
			template: options.paths.html,
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(options.isDev),
		}),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true,
				},
				mode: 'write-references',
			},
		}),
	];

	if (options.isDev) {
		pluginsList.push(
			new HotModuleReplacementPlugin(),
			new ReactRefreshWebpackPlugin({
				overlay: false,
			}),
		);
	}

	if (!options.isDev) {
		pluginsList.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:9].css',
				chunkFilename: 'css/[name].[contenthash:9].css',
			}),
			new CopyPlugin({
				patterns: [
					{
						from: options.paths.locales,
						to: options.paths.buildLocales,
					},
				],
			}),
		);
	}

	return pluginsList;
};
