//strike through completed action
//on is for dynamic contents and click is for static contents
$("ul").on("click","li",function(){
    $(this).toggleClass("done")
})

//deleting selected action

$("ul").on("click","span",function(event){
    //removing parent element li from span element
    $(this).parent().fadeOut(200,function(){
        $(this).remove()
    })
    event.stopPropagation()
})

//adding new action

$("input").keypress(function(event){
    //value will be added to "to do" upon poressing enter key each time 
    //13 - ASCII Code for Enter
    if(event.which===13){
        var task=$("input").val()
        $("ul").append( "<li><span class='delete'><i class='far fa-trash-alt'></i></span>"+ task +"</li>")
        //setting value  of add new task to blank
        $("input").val("")
    }
})
//toggling input form using plus button
$("#plus").click(function(){
    $("input").fadeToggle()
})