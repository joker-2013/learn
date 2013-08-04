var TodoModel=Backbone.Model.extend({
        defaults:{
                title:'',
                completed:false,
                name:''
        }
});
var TodoCollection=Backbone.Collection.extend({
        model:TodoModel,
        url:'/todos'
});
var todos=new TodoCollection();
todos.fetch();
//var todo1=todos.get('1');

