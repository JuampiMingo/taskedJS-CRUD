import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/taskeddb'

mongoose.connect(uri)
.then(db => {
    console.log('database connected succesfully');
})
.catch(err => {
    console.log(`Database Error: ${err}`);
})
