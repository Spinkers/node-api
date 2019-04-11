import app from './app';

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Express server listening in port ' + PORT + ` - http://localhost:${PORT}`);
})
