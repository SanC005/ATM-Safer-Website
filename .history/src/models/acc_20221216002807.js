const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: true
    }
    acc_no:{
        type: 'string',
        required: true,
        minLength:
    }
    pin:{
        type: 'string',
        required: true
    }

    balance:{
        type: 'string',
        required: true
    }

})