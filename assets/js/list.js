//toggles a task's completion
$("ul").on("click", "li", (function(){
    $(this).toggleClass("done");
}))

//Non-jQuery way of doing the above, just as a reminder of syntax.
//Edit: not sure about if new <li> are added.
// var listItems = document.querySelectorAll("li");
// for(var i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener("click", function(){
//         this.classList.toggle("done");
//     })
// }

$("ul").on("click", "span", (function(event){
    //waits to remove the element after the 200ms fade-out.
    $(this).parent().fadeOut(200, function(){
        $(this).remove();
    });
    event.stopPropagation();
}))

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //get the input text
        var newTodo = ($(this).val());
        //clear the text input
        $(this).val("");
        //create a new <li> and add text
        $("ul").append("<li><span><i class=\"fas fa-eraser\"></i></span> " + newTodo + "</li>");
    }
})

//Hides text input using CSS, clears after hiding.
$(".fa-pen").click(function(){
    // $("input[type='text']").toggleClass("input-hide")
    $("input[type='text']").toggleClass("input-hide");
})
