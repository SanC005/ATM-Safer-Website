const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    acc_no:{
        type: String,
        required: true,
        // minLength:12,
        // maxlength:12,
    },
    pin:{
        type: S,
        required: true
    },

    balance:{
        type: 'string',
        required: true
    }

})