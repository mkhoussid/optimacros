module.exports = {
	apps: [
		{
			name: `temp_backed`,
			node_args: '-r ts-node/register -r tsconfig-paths/register',
			script: 'build/index.js',
			env: {
				PORT: 8700,
				MONGODB_USER: 'root',
				MONGODB_PASSWORD: 'toor',
				COLLECTION_VEHICLES: 'vehicles',
				TS_NODE_BASEURL: './build',
			},
		},
	],
};
