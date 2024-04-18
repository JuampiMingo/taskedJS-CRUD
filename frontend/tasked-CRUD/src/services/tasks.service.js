

export default {

    uri: "http://localhost:3000/tasks",
    store: [],

    async getTasks(){

        const tasks = await fetch(this.uri) || null;

        const data = await tasks.json();

        return data
        

    },

    async createTask(req){

        try{
            const newTask = await fetch(this.uri,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title: req.title, description: req.description})
            })

            return newTask
            
        }catch(err){
           return err
        }

    },

    async deleteTask(id){
        try {
            
            await fetch(`${this.uri}/${id}`,{
                method: 'DELETE'
            });

            console.log('Task deleted');

            
        } catch (error) {
            return error
        }
    },
    async getTaskById(id){
        try {
            const foundedTask = await fetch(`${this.uri}/${id}`,{
                method:"GET"
            })

            const data = await foundedTask.json();
            return data
        } catch (error) {
            return error
        }
    }
    ,

    async updateTask(id,req){
        try {
                const updated = await fetch(`${this.uri}/${id}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(req)
                })
                
                return await updated.json();

        } catch (error) {
            return error
        }
    }


}