function pic_shape() {
    //$('.shape').shape('flip up');
    setTimeout(pic_shape, 10000);
    $('.shape').shape('flip up');
}

pic_shape();

$("#sanofi_a").hover(
    function () {
        $("#sanofi_i").animate({margin:"0px 50px"}, 200);
    },
    function () {
        $("#sanofi_i").animate({margin:"0px 0px"}, 200);
    }
);

$("#chenzhu_a").hover(
    function () {
        $("#chenzhu_i").animate({margin:"0px 50px"}, 200);
    },
    function () {
        $("#chenzhu_i").animate({margin:"0px 0px"}, 200);
    }
);

//
$("#learn_more_i").hover(
    function () {
        $("#learn_more_p").animate({opacity: 100});
        $("#learn_more_i").animate({opacity: 0});
    },
    function () {
        $("#learn_more_p").animate({opacity: 0});
        $("#learn_more_i").animate({opacity: 100});
    }
)