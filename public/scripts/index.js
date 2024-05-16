function openSidebar(){
    let sidebar = $(".sidebar");
    let shade = $(".shade");

    if(sidebar.css("display") === "none"){
        shade.show();
        sidebar.css("display","flex");
    }else{
        shade.hide();
        sidebar.css("display","none");
    }
}
function closeSidebar(){
    let sidebar = $(".sidebar");
    let shade = $(".shade");

    if(sidebar.css("display") != "none"){
        shade.hide();
        sidebar.css("display","none");
    }
}

function expand(id){
    let dom = $(id);

    if(dom.attr("value") === "hide"){
        dom.attr({"value":"show"});
        dom.show();
    }else{
        dom.attr({"value":"hide"})
        dom.hide();
    }
}