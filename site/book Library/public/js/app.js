var app=app||{};
$(function(){
	var books=[
		{
			title:'book 1 title',
			author:'book 1 author',
			releaseDate:'book 1 releaseDate',
			keywords:'book 1 keywords'
		},
		{
			title:'book 2 title',
			author:'book 2 author',
			releaseDate:'book 2 releaseDate',
			keywords:'book 2 keywords'
		},
		{
			title:'book 3 title',
			author:'book 3 author',
			releaseDate:'book 3 releaseDate',
			keywords:'book 3 keywords'
		},	{
			title:'book 4 title',
			author:'book 4 author',
			releaseDate:'book 4 releaseDate',
			keywords:'book 4 keywords'
		}
	];
	window.myApp=new app.LibraryView(books)
})
