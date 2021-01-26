'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TasksSchema extends Schema {
  up() {
    this.create('tasks', (table) => {
      table.increments();
      table.integer('project_id').unsigned().references('id').inTable('projects');
      table.string('description', 255).notNullable();
      table.boolean('completed').defaultTo(false)
      table.timestamps();
    });
  }

  down() {
    this.drop('tasks');
  }
}

module.exports = TasksSchema;
