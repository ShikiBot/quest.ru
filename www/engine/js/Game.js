var counter=0;
var back = -1;
var progress = 0;
var jsondata;
var answer = "";
var win = 'false';

jQuery('document').ready(function()
{
	loadScene();
});

function BackImage(imagepath)
{
	document.body.style.backgroundImage = 'url(assets/images/Background/'+imagepath+')';
	/*
	if ( back > 0 && imagepath!=jsondata[String(back)].imagepath)
	{
		document.body.style.backgroundImage = 'url(assets/images/Background/'+imagepath+')';		
	}
	else if(back <= 0)
	{		
		document.body.style.backgroundImage = 'url(assets/images/Background/'+imagepath+')';
	}*/
}

function GetText(textpath)
{	
	if (textpath=='')
	{
		jQuery('.text').load("assets/text/empty.txt");	
	}
	else //if (back > 0 && textpath != jsondata[String(back)].textpath)
	{
		jQuery('.text').load("assets/text/"+textpath);
	}
	/*else if(back <= 0)
	{		
		jQuery('.text').load("assets/text/"+textpath);
	}	*/
}

function GetChar(charpath)
{
	if (charpath=='')
	{
		jQuery('.char').html('<img id="img" src="assets/images/Characters/None.png">');		
	}
	else// if (charpath != jsondata[String(back)].charpath)
	{
		jQuery('.char').html('<img id="img" src="assets/images/Characters/'+charpath+'">');
	}
}

function DrawButtons()
{
	var j = '';
	for (var i=0; i<jsondata[String(counter)].buttontext.length; i++)
	{
		j+='<button id="'+i+'">';
		j+=jsondata[String(counter)].buttontext[i];		
		j+='</button>' + '<br>';
	}
	jQuery('.buttons').html(j);
}

function UpdateScene(plus)
{
	//Берется значение plus сцены на которой мы	
	if(back == -1)
	{
		back++;
	}
	else
	{
		back = counter;
	}
	if (counter==0)
	{
		counter++;
	}
	else
	{		
		counter+=plus;
	}
	//Берутся элементы следующей сцены
	GetText(jsondata[String(counter)].textpath);
	GetChar(jsondata[String(counter)].charpath);
	BackImage(jsondata[String(counter)].imagepath);	
	DrawButtons();
	localStorage.setItem('Scene',counter);	
	localStorage.setItem('Back',back);	
}

jQuery('body').on("click",function(e) 
{
	soundClick();
    if(e.target.tagName != 'BUTTON')
	{
		if(counter==0)
		{
			UpdateScene(1);
		}
		else if(counter == 64)
		{
			localStorage.setItem('Win', 'true');
			document.location.href = "http://quest.ru/result";
		}
		else
		{
			UpdateScene(jsondata[String(counter)].plus);
		}		
		
	}
	else
	{
		var i = e.target.id;		
		answer+=jsondata[String(counter)].buttonanswer[i];
		progress+=parseFloat(jsondata[String(counter)].buttonprogress[i]);
		console.log(progress);
		localStorage.setItem("Answer", answer);		
		localStorage.setItem("Progress", progress);	
		UpdateScene(jsondata[String(counter)].buttonjump[i]);
	}	
});

function setzero()
{
	localStorage.setItem('Scene', 0);
	localStorage.setItem('Back', -1);
	localStorage.setItem('Answer', '');
	localStorage.setItem('Win', 'false');
	localStorage.setItem('Progress', 0);
	counter=0;
	back = -1;
	answer = "";
	win = 'false';
	progress = 0.0
	document.location.reload(true);
}

function soundClick() 
{
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'assets/sounds/pop.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

function loadScene()
{
	jQuery.getJSON('assets/Scenes.json', function(data)
	{
		jsondata=data;
		if(localStorage.getItem('Scene') == null)
		{
			localStorage.setItem('Scene', 0);
			localStorage.setItem('Back', -1);
			localStorage.setItem('Answer', '');
			localStorage.setItem('Win', 'false');
			localStorage.setItem('Progress', 0);
		}
		counter = parseInt(localStorage.getItem('Scene'), 10);
		back = parseInt(localStorage.getItem('Back'), 10);
		answer = localStorage.getItem('Answer');
		win = localStorage.getItem('Win');	
		progress+=parseFloat(localStorage.getItem('Progress'))	
		UpdateScene(0);
	});
}
