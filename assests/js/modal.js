$(document).ready(function () {
    $('.view-btn').click(function () {
        var problemId = $(this).data('problem-id');
        // AJAX request to fetch data
        $.ajax({
            type: 'POST',
            url: 'fetch_data.php', // Replace with your PHP script URL
            data: { problemId: problemId },
            success: function (data) {
                // Update modal content with fetched data
                $('#exampleModal .modal-body').html(data);
                // Show the modal
                $('#exampleModal').modal('show');
            },
            error: function () {
                alert('Error fetching data.');
            }
        });
    });
});


