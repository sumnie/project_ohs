// var scrollEvent=false;
// var count=0;

// $(document).ready(function(){
//     var didScroll;
//     var seclength=$(".section").length;
//     console.log(seclength);
//     $(window).scroll(function(e){
//         didScroll = true; 
//         e.preventDefault();
//     })
//     setInterval(function(){
//         if (didScroll){
//             hasScrolled();
//             didScroll = false; 
//         }
//     }, 250);

//     function hasScrolled() {
//         $("html,body").on("mousewheel",function(e){
//             // e.preventDefault();
//             var m=e.originalEvent.wheelDelta;
//             var sb=$(".section").height();
        
//             if(m>0 && scrollEvent ==false && count >=1){
//                 scrollEvent=true;
//                 count--;
//                 $("html,body").stop().animate({scrollTop:sb*count},
//                     {duration:300,complete:function(){
//                         scrollEvent=false;
//                     }});
//             }
//             else if(m<0&&scrollEvent ==false&&count<seclength){
//                 console.log(count);
//                 scrollEvent=true;
//                 count++;
//                 $("html,body").stop().animate({scrollTop:sb*count},
//                     {duration:300, complete:function(){
//                         scrollEvent=false;
//                     }});
//             }
//         });
//     }
// });

var win_h=$(window).height();
$('.section').each(function(index){
    $(this).attr("data-index",win_h*index);
})
$('.section').on("mousewheel",function(e){
    var sectionPos=parseInt($(this).attr("data-index"));
    if(e.originalEvent.wheelDelta>=0){
        $("html,body").stop().animate({scrollTop:sectionPos-win_h});
        return false;
    }
    else if(e.originalEvent.wheelDelta<0){
        $("html,body").stop().animate({scrollTop:sectionPos+win_h});
        return false;
    }
});