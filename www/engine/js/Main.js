jQuery('document').ready(function()
{
	localStorage.setItem('Reg',false);
	localStorage.setItem('Auth',false);
	loadMenu(false,false);
});

function loadMenu(btn1,btn2)
{
	var j = '';
	if(btn1)
	{		
		j+= '<button id=1>Начать игру</button><br>';
	}
	else
	{
		j+= '<button id=1 disabled>Начать игру</button><br>';
	}
	if(btn2)
	{		
		j+= '<button id=2>Продолжить игру</button><br>';
	}
	else
	{
		j+= '<button id=2 disabled>Продолжить игру</button><br>';
	}
	j+= '<button id=3>Зайти за свой аккаунт</button><br>';
	j+= '<button id="4">Зарегистрировать новый аккаунт</button><br>';
	jQuery('.centre').html(j);
	jQuery(document.getElementById(1)).on('click', NewGame );
	jQuery(document.getElementById(2)).on('click', LoadGame );
	jQuery(document.getElementById(3)).on('click', Authorization );
	jQuery(document.getElementById(4)).on('click', Registration );	
}

function NewGame()
{
	localStorage.setItem('Scene',0);
	document.location.href = "/game";
}
function LoadGame()
{
	document.location.href = "/game";
}
function Authorization()
{
	var j ='<p align="center" style="font-size:24px"><b>Авторизация</b><hr></p><br>';
	j+='Введите логин<br>';
	j+='<input type="text" id = 1><br>';
	j+='Введите пароль<br>';
	j+='<input type="text" id = 2><br>';
	j+='<button id=3>Войти</button><br>';
	jQuery('.centre').html(j);
	localStorage.setItem('Reg',false);
	localStorage.setItem('Auth',true);
	jQuery(document.getElementById(3)).on('click', OpenButtons );
}
function Registration()
{
	var j ='<p align="center" style="font-size:24px"><b>Регистрация</b><hr></p><br>'
	j+='Впишите логин<br>';
	j+='<input type="text" id = 1><br>';
	j+='Создайте пароль<br>';
	j+='<input type="text" id = 2><br>';
	j+='<button id=3>Зарегестрировать</button><br>';
	jQuery('.centre').html(j);
	localStorage.setItem('Auth',false);
	localStorage.setItem('Reg',true);
	jQuery(document.getElementById(3)).on('click', OpenButtons );
}
function OpenButtons()
{
	if(localStorage.getItem('Auth')=='true')
	{		
		loadMenu(true,true);
	}
	if(localStorage.getItem('Reg')=='true')
	{		
		loadMenu(true,false);
	}
}
