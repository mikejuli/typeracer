var textIn = 'An external style sheet holds all the style rules in a separate document that you can link from any HTML file on your site. External style sheets are the most flexible because with an external style sheet, you can change the look of an entire website by changing just one file.';

document.getElementById("text").innerHTML = textIn;

textTyped = '';
textErr = '';

document.addEventListener('keydown', function (event) {


  if(event.key === textIn[0]){

    textTyped = textTyped + textIn[0];
    textIn = textIn.substring(1);
    textErr = '';
    console.log(textTyped);
  } else

  if(event.key !== textIn[0] && event.key !== 'Shift'){

    textErr = textErr + event.key;

  }

  document.getElementById("text").innerHTML = '<span style = "color:#0ad12c">' + textTyped +'</span>' + '<span style = "color:red">'+ textErr +'</span>' + textIn;


});

console.log('Hello!!!');