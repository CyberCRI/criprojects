import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .toggle-soon'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { soon: ! this.soon },
    });
  },
  'click .toggle-important'() {
    Tasks.update(this._id, {
      $set: { important: ! this.important },
    });
  },
  'click .delete'() {
    Tasks.remove(this._id);
  },
});
