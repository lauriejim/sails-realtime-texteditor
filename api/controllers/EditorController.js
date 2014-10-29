/**
 * EditorController
 *
 * @description :: Server-side logic for managing editors
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function (req, res) {
    var delta = req.param('delta');
    sails.sockets.blast('newPush', delta, req.socket);
  }
};

