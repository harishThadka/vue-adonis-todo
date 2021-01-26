'use strict';

const AuthorizationService = require('../../Services/AuthorizationService');

const Project = use('App/Models/Project');
const Task = use('App/Models/Task');

class TaskController {


    async create({ auth, request, params }) {

        const user = await auth.getUser();
        const { id } = params;
        const { description } = request.all();
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project, user);

        const task = new Task();
        task.fill({
            description
        });
        await project.tasks().save(task);
        return task;

    }

    async index({ auth, request, params }) {
        const user = await auth.getUser();
        const { id } = params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project, user);
        const tasks = await project.tasks().fetch();
        return tasks;
    }
}

module.exports = TaskController;
