import 'reflect-metadata';
import app from './index';

const PORT = process.env.PORT || 8484;

app.listen(PORT, () => {
	console.log(`🚀 Server ready and listening at port  ${PORT} `);
});
