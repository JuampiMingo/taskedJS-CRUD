import app from './app.js'

app.listen(app.get('port'), () => {
    console.log(`Server listen on localhost:${app.get('port')}`);
})
