var QuillEditor = new Quill('#editor');
var Delta = Quill.require('delta');

QuillEditor.on('text-change', function(delta, source) {
  if (source === 'user') {
    console.log(delta);
    var obj = {delta: delta};
    io.socket.post('/post', obj);
  }
});

io.socket.on('newPush', function (ops) {
  var delta = new Delta(ops);
  console.log(delta);
  QuillEditor.updateContents(delta);
});