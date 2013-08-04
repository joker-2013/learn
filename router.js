var TodoRouter=Backbone.Router.extend({
        routes:{
                'about':'showAbout',
                'search/:query':'searchTodos',
                'search/:query/p:page':'searchTodos'
        },
        showAbout:function(){
                console.log('show about Page!');
        },
        searchTodos:function(query,page){
                var pageNum=page||1;
                console.log('Page number : '+pageNum +'of the results for todos containing the word: '+ query);
        }
})
var todoRouter=new TodoRouter();
Backbone.history.start();
