var skillsListEl = $('#skills-list')

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var reformatDate = dayjs()
var exactDate = reformatDate.format('MMM DD, YYYY  [at]' + 'h:mm:ss a');
$('#time').text(exactDate);