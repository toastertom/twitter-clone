$(document).ready(function() {
// User Info
  var user = {
    avatar: '<img class="avatar" src="img/alagoon.jpg" />',
    name: 'Thomas',
    username: '@ToasterTom'
  };





//Text Box dynamic Functionality
  $('#tweet-controls').hide();

  $('.tweet-compose').on('click', function() {
    $(this).css('height', '5em');
    $('#tweet-controls').show();

    $('.tweet-compose').keyup(updateCount);
    $('.tweet-compose').keydown(updateCount);


      function updateCount() {
        var cs = 140 - ($(this).val().length);
        $('#char-count').text(cs);

        if (cs < 11) {
          $('#char-count').css('color', 'red');
        }else{
          $('#char-count').css('color', 'black');
        }
      }
// Push tweet to twitter stream
function createTweet() {
  var tweetContent = $('.tweet-compose').val();
  var newTweet =
  '<div class="tweet">' +
    '<div class="content">' +
       user.avatar +
    '<strong class="fullname">' + user.name + '</strong>'+
      '<span class="username">' + user.username + '</span>' +
      '<p class="tweet-text">' + tweetContent + '</p>' +
      '<div class="tweet-actions">' +
        '<ul>' +
          '<li><span class="icon action-reply"></span> Reply</li>' +
          '<li><span class="icon action-retweet"></span> Retweet</li>' +
          '<li><span class="icon action-favorite"></span> Favorite</li>' +          '<li><span class="icon action-more"></span> More</li>' +
        '</ul>' +
      '</div>' +
      '<div class="stats">' +
        '<div class="retweets">'+
          '<p class="num-retweets">30</p>'+
        '<p>RETWEETS</p>' +
        '</div>' +
        '<div class="favorites">' +
          '<p class="num-favorites">6</p>' +
          '<p>FAVORITES</p>' +
        '</div>' +
        '<div class="users-interact">' +
          '<div>' +
            '<img src="img/jennyshen.jpg" />' +
            '<img src="img/damenleeturks.jpg" />' +
          '</div>'+
        '</div>' +
        '<div class="time">'+
          '1:04 PM - 19 Sep 13' +
        '</div>' +
      '</div>' +
      '<div class="reply">' +
        '<img class="avatar" src="img/alagoon.jpg" />' +
        '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
      '</div>' +
    '</div>' +
  '</div>'
  return newTweet;

}

$('#tweet-submit').on('click', function() {
  $('#stream').prepend(createTweet());
  })
})

 $('.tweet-actions').hide();

$('.tweet').hover(function () {
  $(this).find('.tweet-actions').show();
}, function() {
  $(this).find('.tweet-actions').hide();
})

$('.retweets').hide();
$('.reply').hide();
$('.time').hide();

$('.tweet').on('click', function () {
  $(this).find('.retweets').show().slidedown(1000);
})

$('.tweet').on('click', function () {
  $(this).find('.time').show().slidedown(1000);
})

})
