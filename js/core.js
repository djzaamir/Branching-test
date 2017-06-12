window.onload = function(){
    var parent_box =  document.getElementById("parent-box");
    var box        =  document.getElementById("box");
        parent_box.addEventListener('mouseenter' , inhandler(box));
        parent_box.addEventListener('mouseleave' , outhandler(box));

}


function inhandler(element){
    element.classList.add("addEffect");
}

function outhandler(element){
  element.classList.remove("addEffect");
}
