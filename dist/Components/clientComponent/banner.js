export var banner = {
    render: function () {
        return /*html */ "\n        <div class=\"banner bg-gray-100 pb-1\">\n            <div class=\" mx-auto grid grid-cols-3 gap-1\" style=\"max-width: 1200px;\">\n                <div class=\"col-span-2 owl-carousel owl-theme slickSlider \">\n                    <div><a href=\"\"><img class=\"w-full\" src=\"https://laptopaz.vn/media/banner/23_Oct14dbe0b28fc425dfdeb57b0f33603829.jpg\" alt=\"\"></a></div>\n                </div>\n                <div class=\"col-span-1\">\n                    <div>\n                        <iframe width=\"100%\" height=\"185\" src=\"https://www.youtube.com/embed/lNbgB_PNYN8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                    </div>\n                    <div>\n                        <img src=\"https://laptopaz.vn/media/banner/12_Oct050b942f22238b15df5a5af139e7fcd5.jpg\" alt=\"\" style=\"height: 185px; width: 100%;\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
    },
    afterRender: function () {
        console.log(111111);
        var slider = window.slick();
        console.log(slider);
    }
};
