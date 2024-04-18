import express from 'express';

import taskCtrl from '../controllers/tasks.controller.js'
import { validatorHandler } from '../middlewares/validatorTask.js';
import Task from '../models/Task.js';

import { validateTask } from '../models/Task.js';

const router = express.Router();



router.get('/', taskCtrl.getTasks);
router.get('/:id',taskCtrl.getTaskById);
router.post('/',validatorHandler(validateTask),taskCtrl.createTask);
router.put('/:id', validatorHandler(validateTask) ,taskCtrl.updateTaskById);
router.delete('/:id',taskCtrl.deleteTaskById);





export default router