$(document).ready(function(){
  resizeSectionHeights();
  resizeOverlays();
  startGradientChanging();
  var s = skrollr.init({
    constants: {
      //fill the box for a "duration" of 150% of the viewport (pause for 150%)
      //adjust for shorter/longer pause
      box: '150p'
    }
  });
});

//-------------------------------
window.onresize = function(event) {
  resizeOverlays();
  resizeSectionHeights();
}

//-------------------------------
function resizeOverlays() {
  resize_width = $('img.reward-img')[0].clientWidth;
  $('.reward-overlay').css({
    'width':resize_width,
    'height':resize_width
  });

  resize_width = $('img.team-img')[0].clientWidth;
  $('.faceshot-overlay').css({
    'width':resize_width,
    'height':resize_width
  });
}

//-------------------------------
function resizeSectionHeights() {
  var nSections = 8;
  viewport_w = $(window).width();
  viewport_h = $(window).height();

  row_height = (viewport_h < 600) ? 600 : viewport_h; //-- min height
  for ( var i = 0; i < nSections; ++i ) {
    if (i == 5) {
	    $('.section-' + i).css({'height': row_height*1.5});
    } else {
      $('.section-' + i).css({'height': row_height});
    }
  }
  $('.section-empty').css({'height': row_height});

}

var red = 0;
var green = 0;
var blue = 0;

var r_increment = Math.floor(3*Math.random() + 1);
var g_increment = Math.floor(3*Math.random() + 1);
var b_increment = Math.floor(3*Math.random() + 1);


function startGradientChanging() {
  setInterval(function(){
    red += r_increment;
    green += g_increment;
    blue += b_increment;
    if ( red >= 255 || red <= 0 ) r_increment *= -1;
    if ( green >= 255 || green <= 0 ) g_increment *= -1;
    if ( blue >= 255 || blue <= 0 ) b_increment *= -1;

    $('.section-0').css('background','linear-gradient(rgb(' + red + ',' + green + ',' + blue + '), #4A65B6)');
    $('.faceshot-overlay:hover').css('background-color','rgba(' + red + ',' + green + ',' + blue + ',0.7)');
  }, 50);

}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-50388495-1', 'foldhaus.com');
ga('send', 'pageview');
