import npm from 'rollup-plugin-npm';
import babel from 'rollup-plugin-babel';

export default {
	plugins: [
		npm({
			// for index.js:
			main: true
		}),
		babel({
			sourceMap: true,
			loose: 'all',
			blacklist: ['es6.tailCall'],
			exclude: 'node_modules/**'
		})
	]
};
