function pic_shape() {
    //$('.shape').shape('flip up');
    setTimeout(pic_shape, 10000);
    $('.shape').shape('flip up');
}

window.onload = function() {
    pic_shape();
}