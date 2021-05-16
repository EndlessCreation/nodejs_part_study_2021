import app from './app';

app.listen('3000', 'localhost', err => {
    if(err) {
        console.log(err);
    }
    console.log('server is running on 3000');
})