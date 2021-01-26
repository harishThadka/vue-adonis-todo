'use strict';

const Project = use('App/Models/Project');
const AuthorizationService = use('App/Services/AuthorizationService');

class ProjectController {


    async index({ auth }) {

        const user = await auth.getUser();
        const projects = await user.projects().fetch();
        return projects;

    }

    async create({ auth, request }) {

        const user = await auth.getUser();
        const { title } = request.all();

        const project = new Project();
        project.fill(
            {
                title,
            }
        );
        await user.projects().save(project);
        return project;
    }

    async destroy({ auth, request, params }) {

        // console.log("-------destroy controller");
        const user = await auth.getUser();
        const { id } = params;
        // console.log(id,"---id");
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project, user);
        await project.delete();
        // console.log(project);
        return project;

    }
}
``
module.exports = ProjectController;
