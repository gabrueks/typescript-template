import app from './AppConfig';
import DatabaseBootstrap from './DatabaseBootstrap';

const PORT: Number = Number(process.env.PORT) || 8080;

new DatabaseBootstrap().bootstrap();

app.listen(PORT);
