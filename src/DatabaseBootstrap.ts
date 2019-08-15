import * as mongoose from 'mongoose';

// If you have any problem with http requests certificate, otherwise do not uncomment the next line
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

export default class DatabaseBootstrap {

    constructor() {
        this.DBURI = this.getMongoURI();
    }
    private DBURI: string;

    public async bootstrap(): Promise<void> {
        try {
            await mongoose.connect(
                this.DBURI,
                {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                },
            );
        } catch (err) {
            console.error('Unable to connect to the server. Please start the server. Error:', err);
        }
    }

    private getMongoURI(): string {
        if (process.env.ENV === 'localContainer') return 'mongodb://mongodb:27017/typescript-database';
        return (process.env.DATABASE_HOST
            && process.env.DATABASE_NAME
            && process.env.DB_MONGODB_USER
            && process.env.DB_MONGODB_PASS
            )
            // tslint:disable-next-line:max-line-length
                ? `mongodb://${process.env.DB_MONGODB_USER}:${process.env.DB_MONGODB_PASS}@${process.env.DATABASE_HOST}` +
                `:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
                : 'mongodb://localhost:27017/typescript-database';
    }
}
