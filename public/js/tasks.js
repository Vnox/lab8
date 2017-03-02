exports.addTask = function(req, res){
var taskName = req.body.taskName;
  // This will print in your terminal when a POST is made
  console.log(taskName); 

  data.tasks.push(taskName); // Add to current data

  // Lets send our task name back so our browser knows it worked out!
  res.send(taskName);
}// Your code goes here

$(document).ready(function() {
$('#taskForm').submit(function(e) {
    // Prevents default submit + reload (we only want the submit part)
    e.preventDefault();

    var taskName = $('#addTask').val();

    // Send the POST request
    $.post('addTask', { taskName: taskName }, postCallback);
  });
});

function postCallback(res) {
  $('.taskList').append('' + res + ''); // Add to the list

 $('#addTask').val(''); // Clear form
}