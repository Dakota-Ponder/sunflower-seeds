document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    alert('Thank you, ' + name + '. Your appointment is scheduled for ' + date + '.');
});
