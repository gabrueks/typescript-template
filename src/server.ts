import app from './AppConfig';

import * as mongoose from 'mongoose';

const PORT: Number = Number(process.env.PORT) || 8080;

let dbUsername: string;
let dbPassword: string;
let DBURI: string;

// If you have any problem with http requests certificate, otherwise do not uncomment the next line
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

// If you're running mongo with environment variables
if (process.env.DB_MONGODB_USER && process.env.DB_MONGODB_PASS) {
    dbUsername = process.env.DB_MONGODB_USER;
    dbPassword = process.env.DB_MONGODB_PASS;
}

(process.env.DATABASE_HOST && process.env.DATABASE_NAME && process.env.DB_MONGODB_USER && process.env.DB_MONGODB_PASS)
    ? DBURI = `mongodb://${dbUsername}:${dbPassword}@${process.env.DATABASE_HOST}` +
    `:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
    : DBURI = `mongodb://localhost:27017/typescript-database`;

app.listen(PORT, async () => {
    await mongoose.connect(
        DBURI,
        {
            useNewUrlParser: true,
            useCreateIndex: true
        },
    )
        .catch(async (err: mongoose.Error) => {
            console.error(err);
            // If the mongo is not running localhost, it is supposed to be in a docker container
            await mongoose.connect(
                'mongodb://mongodb:27017/typescript-database',
                {
                    useNewUrlParser: true,
                    useCreateIndex: true
                }
            )
        });
});
