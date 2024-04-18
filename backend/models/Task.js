import {Schema, model} from 'mongoose';
import Joi  from  'joi'

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "something to do"        
    }
});


export const validateTask = (task) => {
    const schema = Joi.object({
        title: Joi.string().trim().required(),
        description: Joi.string().empty('something to do').trim()
    })

    return schema.validate(task)
}

export default model('Task', taskSchema);