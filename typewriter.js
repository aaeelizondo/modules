var c_sentences = passed_object.sentences.trim().split(',');
var c_speed = passed_object.speed;

var options = {
    strings: c_sentences,
    typeSpeed: c_speed, 
    backSpeed: 200,
    loop: true
  };
  
var typed = new Typed('.typewriter_wrapper', options);
