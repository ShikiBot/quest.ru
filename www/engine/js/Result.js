var answer = "";
var win = 'false';
var progress = 0.1;

jQuery('document').ready(function()
{
	loadScreen();
});

jQuery('button').on("click",function(e) 
{
	setzero();
});

function loadScreen()
{	
	answer = localStorage.getItem('Answer');
	win = localStorage.getItem('Win');
	progress = parseFloat(localStorage.getItem('Progress'))/8*100;
	if (win == 'false') document.location.href = "http://quest.ru";
	jQuery('.text').html(answer);
	alert('Поздравляем!\nВы успешно прошли квест по Информационной Безопасности!\nВаш результат: '+progress+'%');		
}

function setzero()
{
	localStorage.setItem('Scene', 0);
	localStorage.setItem('Back', -1);
	localStorage.setItem('Answer', '');
	localStorage.setItem('Win', 'false');
	localStorage.setItem('Progress', 0);
	answer = "";
	win = 'false';
	progress = 0.0
	document.location.href = "http://quest.ru";
}