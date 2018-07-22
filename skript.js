window.onload = function()
{
	console.log('script active');

	Add.onclick = function()
	{
		for(var i = 0; i < 5; i++)
		{
			pinCreate();
		}
	};

	var pinId = 1;

	function pinCreate()
	{
		var div = document.createElement('div');
		div.setAttribute('class', 'pin');
		div.setAttribute('id', pinId);
		
		//Random Pin Zeile
		var row = Math.floor((Math.random() * 480) + 1);		
		//Random Pin Spalte
		var column = Math.floor((Math.random() * 850) + 1);
		
		var row_end = row + 140; //Pin Höhe
		var column_end = column + 190; //Pin Breite

		var grid = row + '/' + column + '/' + row_end + '/' + column_end;

		div.style.setProperty("grid-area", grid);
		
		document.getElementById("content").appendChild(div);

		document.getElementById(pinId).addEventListener("click", pinClick);
		
		pinId = pinId + 1;
	};

	function pinClick()
	{
		console.log('pin: ' + this.id + ' clicked');
	}
}
