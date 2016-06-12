(function(win, doc) {
    $(function(){
        var $js_mainvis = $("#js-mainvis");
        var w = $js_mainvis.width();
        var h = $js_mainvis.height();
        var $rect = $('.rect');
        var rect_w = 20;
        var rect_h = 20;
        var w_num =  Math.floor(w / rect_w);
        var h_num =  Math.floor(h / rect_h);
        var all_num = w_num * h_num;
        var row_arr = [];
        var col_arr = [];
        for(var i = 0; i < all_num; i++) {
            var txt = '<p class="rect rect'+ i + '"></p>';
            row_arr.push(txt);
            // if(i === w_num-1) {
            //     for(var j =0; j < h_num; j++) {
            //         var warp = '<div class="wrap' +j +'">' + row_arr.join('') + '</div>';
            //         col_arr.push(warp);
           
            //     }
            // }
        }
        
        
        $js_mainvis.append(row_arr);
        for(var k = 0; k < all_num; k++) {
        var color = '#' + ("00000"+Math.floor(Math.random() * 0x1000000).toString(16)).substr(-6);
                $('.rect' + k).css({
                    'background-color' : color
                });
        }
    });
    
})(this, document);