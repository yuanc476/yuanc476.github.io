// $(".education").hover(function(){
//     $(".edutext").addClass(".show")
// });

// $(document).ready(function(){
//     $(".education").hover(function(){
//         $("#edutext").addClass("show");
//     });
// });


$(".education").on({
    mouseover: function() {
        $(".edutext").stop().show();
    },

    mouseout: function() {
        $(".edutext").stop().hide();
    }
})

$(".poverty").on({
    mouseover: function() {
        $(".povtext").stop().show();
    },

    mouseout: function() {
        $(".povtext").stop().hide();
    }
})

$(".consummerism").on({
    mouseover: function() {
        $(".context").stop().show();
    },

    mouseout: function() {
        $(".context").stop().hide();
    }
})

$(".politics").on({
    mouseover: function() {
        $(".poltext").stop().show();
    },

    mouseout: function() {
        $(".poltext").stop().hide();
    }
})