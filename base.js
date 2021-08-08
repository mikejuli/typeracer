var textIn = 'An external style sheet holds all the style rules in a separate document that you can link from any HTML file on your site. External style sheets are the most flexible because with an external style sheet, you can change the look of an entire website by changing just one file.';

document.getElementById("text").innerHTML = textIn;

textTyped = '';
textErr = '';

document.addEventListener('keydown', function (event) {
 console.log(textErr);
  if(event.key === 'Backspace'){

    if (textErr.length !==0)
    {
      textErr = textErr.substring(0, textErr.length - 1);
    }

    else
    {
      textIn = textTyped[textTyped.length-1] + textIn;
      textTyped = textTyped.substring(0, textTyped.length - 1);

    }

  }

  else if(event.key === textIn[0] && textErr.length === 0){

    textTyped = textTyped + textIn[0];
    textIn = textIn.substring(1);
    textErr = '';
    console.log(textTyped);

  }

  else if(event.key !== 'Shift'){

    textErr = textErr + event.key;

  }


  document.getElementById("text").innerHTML = '<span style = "color:#0ad12c">' + textTyped +'</span>' + '<span style = "background-color: #d197a5 ; color: red; margin-right: -2px">'+ textErr +'</span><span class="blinking-cursor">|</span>' + textIn;


});

console.log('Hello!!!');