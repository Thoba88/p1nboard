window.onload = function()
{
	console.log('script active');

	Add.onclick = function()
	{
		for(var i = 0; i < 5; i++)
		{
			createEntry();
		}
	};

	var postId = 1;

	function createEntry()
	{
		var div = document.createElement('div');
		div.setAttribute('class', 'post');
		div.setAttribute('id', postId);
		
		var row = Math.floor((Math.random() * 480) + 1);		
		var column = Math.floor((Math.random() * 850) + 1);
		var row_end = row + 140;
		var column_end = column + 190;

		var grid = row + '/' + column + '/' + row_end + '/' + column_end;

		div.style.setProperty("grid-area", grid);
		
		document.getElementById("content").appendChild(div);

		document.getElementById(postId).addEventListener("click", postClick);
		
		postId = postId + 1;
	};

	function postClick()
	{
		console.log('post: ' + this.id + ' clicked');
	}
}