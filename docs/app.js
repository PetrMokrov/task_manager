/*var PageBody = document.getElementById("pageBody");
if(PageBody.attachEvent)
{
	PageBody.attachEvent("load",showTasks()); 
}
else
{
	PageBody.addEventListener("load",showTasks());
}

function showTasks(){
	$("root").html(function(){
		
	})
	var list = document.createElement("UL");
	var lineList = createElement("LI");
	var botton = createElement("BUTTON");
	var element = document.getElementById("root");
	element.appendChild(paragraph);
}

$(document).ready(function(){
	$("#root").
});*/

$(document).ready(function(){
	$('#root').html('<input type="text" id="add_task_input"/>');
	$('#root').append('<button id="add_task">Добавить задачу</button>');
	$('#root').append('<ul id="tasksTable"></ul>');
	$('#tasksTable').html("<li><span>Сделать задание #3 по web-программированию</span><button class='listButton'> Удалить </button></li>");
	$("#add_task").click(function(){
		$("#tasksTable").append("<li><span></span><button class='listButton'> Удалить </button></li>");
		$("#tasksTable li").last().children("span").text($('#add_task_input').val());
		$(".listButton").click(function(){
        $(this).parent().remove();
	    });
	});
	$(".listButton").click(function(){
        $(this).parent().remove();
	});
});
