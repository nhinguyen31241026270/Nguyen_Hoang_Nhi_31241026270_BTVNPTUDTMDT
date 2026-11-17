var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write('<table border="1" aria-label="Lịch 30 ngày"><thead><tr>');
for (var i = 0; i < daysOfWeek.length; i++) {
    var day = daysOfWeek[i].length < 4 ? daysOfWeek[i] : "<em>" + daysOfWeek[i] + "</em>";
    document.write('<th scope="col">' + day + '</th>');
}
document.write('</tr></thead><tbody>');
var date = 1;
for (var week = 0; week < 5; week++) {
    document.write('<tr>');
    for (var weekday = 0; weekday < 7; weekday++) {
        document.write('<td>' + (date <= 30 ? date : '') + '</td>');
        date++;
    }
    document.write('</tr>');
}
document.write('</tbody></table>');
