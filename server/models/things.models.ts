import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;


const thingSchema = new Schema({
    thing: {
        type: String,
        required: 'Thing is required'
    },
    complete:{

        type:Boolean,
        default:false,
        required: 'Complete is required'
    },
    created_date: {
        type: Date,
        default: Date.now
    }

})



export default mongoose.model('Things', thingSchema)