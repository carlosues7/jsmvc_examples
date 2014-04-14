"use strict";
APP.NoteModel = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    title: "",
    description: "",
    author: ""
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.title) errors.title = "Note's title is required";
    if (!attrs.description) errors.description = "Note's description is required";
    if (!attrs.author) errors.author = "Author's name is required";

    if (!_.isEmpty(errors)) {
      return errors;
    }
  }
});

APP.NoteCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: APP.NoteModel
});