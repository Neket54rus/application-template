import { ResolveOptions } from 'webpack';

export const buildResolvers = (srcPath: string): ResolveOptions => ({
	extensions: ['.tsx', '.ts', '.js'],
	preferAbsolute: true,
	modules: [srcPath, 'node_modules'],
	mainFiles: ['index'],
	alias: {
		'@': srcPath,
	},
});
