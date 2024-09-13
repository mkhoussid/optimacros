export const validateEnvironment = () => {
	const requiredKeys = [
		'PORT',
		'MONGODB_CONNECTION_STRING',
		'MONGODB_USER',
		'MONGODB_PASSWORD',
		'COLLECTION_VEHICLES',
	];

	const difference = requiredKeys.filter(
		(key) => typeof process.env[key as keyof typeof process.env] === 'undefined',
	);

	if (difference.length) {
		throw new Error(`missing keys in \`.env\` file: ${String(difference)}`);
	}
};
