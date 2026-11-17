$(function () {
    $('.animLoading').hide();
    $('#consume').click(function () {
        $('.animLoading').show();
        var url = 'https://www.randyconnolly.com/funwebdev/services/travel/cities.php';
        $.get(url, null, null, 'json')
            .done(function (data) {
                $.each(data, function (index, value) {
                    var li = $('<li/>').text(value.name);
                    li.appendTo('div#results ul');
                });
            })
            .fail(function (jqXHR, status, error) {
                alert('failed loading data - status=' + status + ' error=' + error);
            })
            .always(function () {
                $('.animLoading').fadeOut('slow');
            });
    });
});
