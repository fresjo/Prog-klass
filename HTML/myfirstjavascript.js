//game
var pos_x;
pos_x = 0;
pos_y = 0;

function start()
{
checkvalues();
reset();
render();
}

function checkvalues()
{
var kanal;
kanal=document.getElementById("value");
kanal.childNodes[0].nodeValue='X=' + ' ' + pos_x + '    ' + 'Y=' + ' ' + pos_y;
}

function reset()
{
pos_x = 1;
pos_y = 1;
render();
checkvalues();
}

function render()
{
var kanal;
kanal=document.getElementById("gubbediv");
kanal.style.left=pos_x + 'px';
kanal.style.top=pos_y + 'px';
}

// X

function increasex1()
{
pos_x = pos_x+10;
gamebox();
checkvalues();
render();
kanal.src="bildhöger"
}

function decreasex1()
{
pos_x = pos_x-10;
gamebox();
checkvalues();
render();
}


// Y

function increasey1()
{
pos_y = pos_y+10;
gamebox();
checkvalues();
render();
}

function decreasey1()
{
pos_y = pos_y-10;
gamebox();
checkvalues();
render();
}

//annat



//spelplanens storlek och form

function gamebox()
{
if (pos_x<0)
 pos_x = 0
if (pos_x>840)
 pos_x = 840
if (pos_y<0)
 pos_y = 0
if (pos_y>440)
 pos_y = 440
}

//färgbyten av text & bakgrund

function backgroundGreen()
{
var channel;
channel=document.getElementById("backgroundGreen");
body.style.background="green";
}

function backgroundBlue()
{
var channel;
channel=document.getElementById("backgroundBlue");
body.style.background="blue";
}

function backgroundBlack() 
{
var channel;
channel:document.getElementById("backgroundBlack");
body.style.background="black";
}

function textBlack()
{
var channel;
channel=document.getElementById("textcolor");
channel.style.color="black";
}

function textWhite()
{
var channel;
channel=document.getElementById("textcolor");
channel.style.color="white";
}

function textRed()
{
var channel;
channel=document.getElementById("textcolor");
channel.style.color="red";
}

// skiftande bilder

function swopimages1()
{
var channel;
channel=document.getElementById("image1")
document.image1.src="Bilder till Prog/images skola/bf4schopper.jpg";
}

function swopimages2()
{
var channel;
channel=document.getElementById("image1")
document.image1.src="Bilder till Prog/images skola/steg1_BF4_bild.jpg";
}


