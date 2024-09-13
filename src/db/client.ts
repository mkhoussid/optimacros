import { Db, MongoClient, ServerApiVersion } from 'mongodb';

export class DbClient {
	private static _db: Db = null as unknown as Db;

	private static getMongoUri() {
		const connectionStringParts = [
			'mongodb+srv://',
			process.env.MONGODB_USER,
			':',
			process.env.MONGODB_PASSWORD,
			'@cluster0.xlf6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
		];

		const connectionString = connectionStringParts.join('');

		if (!connectionStringParts.every(Boolean)) {
			throw new Error(`invalid connection string: ${connectionString}`);
		}

		return connectionString;
	}

	static async connectDb() {
		const client = new MongoClient(this.getMongoUri(), {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});

		await client.connect();
		await client.db('admin').command({ ping: 1 });

		console.log('MongoDB connected');

		this._db = client.db();
	}

	static db() {
		if (!this.db) {
			throw new Error(`db client is not configured`);
		}

		return this._db.collection(process.env.COLLECTION_VEHICLES as string);
	}
}
