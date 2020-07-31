var attrColor = function () {
	var x = document.title;
	if (x == "AUM CSE")
	{
		document.getElementById("cse").style.background = "#d3461e";
	}
	else if (x == "AUM MATHS")
	{
		document.getElementById("maths").style.background = "#d3461e";
	}
	
};
window.onload = function () {
	attrColor();
};
