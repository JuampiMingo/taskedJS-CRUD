import Task from '../models/Task.js'

export default {
    async getTasks(req,res){
        try{
            const tasks = await Task.find();
            return  res.json(tasks)
        }catch(err){
            return res.status(400).json({
                "message":`BadRequest: ${err}`
            })
        }
    },

    async createTask(req, res){

        try {
            const {title, description} = req.body

        const newTask = new Task({
            title,
            description
        })

        const taskCreated = await newTask.save();

        return res.status(201).json({
            taskCreated
        })
        }catch(err){
            return res.status(400).json({
                "message":`BadRequest: ${err}`
            })
        }

    },

    async getTaskById(req, res){
       try{
        const {id} = req.params

        const taskFounded = await Task.findById(id)

       return res.status(200).json({
            taskFounded
        })
       }catch(err){
        return res.status(400).json({
            "message":`RequestError: ${err}`
        })
       }

    },

    async updateTaskById(req, res){

        try{
            const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body,{
                new: true
            })
            return res.status(200).json({
                taskUpdated
            })
        }catch(err){
            return res.status(400).json({
                message:`BadRequest: ${err}`
            })
        }
                  

    },

    async deleteTaskById(req,res){
        try{

            await Task.findByIdAndDelete(req.params.id)
            return res.status(204).json({
                "message":"task deleted successfully"
            })

        }catch(err){
            return res.status(400).json({
                "message":`BadRequest: ${err}`
            })
        }
    }
}