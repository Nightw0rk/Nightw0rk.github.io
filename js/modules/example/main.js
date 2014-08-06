function initModule()
{
	putCss('/css/example.css');
	loadView('/js/modules/example/views/example.json',$('body'));
}

function clickOnDiv(item)
{
	alert("Hello world");
}
