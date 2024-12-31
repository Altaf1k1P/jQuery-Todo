$(document).ready(function () {
    // Add Task
    $('#add-task').on('click', function () {
        const taskText = $('#new-task').val().trim();
        if (taskText !== '') {
            const taskItem = `
                <li>
                    <span>${taskText}</span>
                    <button class="remove">Remove</button>
                </li>`;
            $('#task-list').append(taskItem);
            $('#new-task').val('');
        }
    });

    // Mark Task as Complete
    $('#task-list').on('click', 'span', function () {
        $(this).parent().toggleClass('complete');
    });

    // Remove Task
    $('#task-list').on('click', '.remove', function () {
        $(this).parent().remove();
    });
});
