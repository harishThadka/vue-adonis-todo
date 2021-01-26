'use strict';

const AuthorizationService = require('../../Services/AuthorizationService');

const Project = use('App/Models/Project');
const Task = use('App/Models/Task');

class TaskController {


    async create({ auth, request, params }) {

        const user = await auth.getUser();
        const { id } = params;
        const { description, completed } = request.all();
        console.log(completed, "---completed");
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project, user);

        const task = new Task();
        task.fill({
            description,
            completed
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

    async destroy({ auth, params }) {
        const user = await auth.getUser();
        const { id } = params;
        const task = await Task.find(id);
        const project = await task.project().fetch();
        AuthorizationService.verifyPermission(project, user);
        await task.delete();
        return task;
    }

    async update({ auth, request, params }) {
        const user = await auth.getUser();
        const { id } = params;
        // const { description, completed } = request.all();
        const task = await Task.find(id);
        const project = await task.project().fetch();
        AuthorizationService.verifyPermission(project, user);
        await task.merge(request.only([
            'description',
            'completed'
        ]));
        await task.save();
        return task;
    }
}

module.exports = TaskController;
