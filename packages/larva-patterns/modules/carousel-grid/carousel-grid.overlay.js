const clonedeep = require( 'lodash.clonedeep' );

const carousel_grid_prototype = require( './carousel-grid.prototype' );

const carousel_grid_overlay = clonedeep( carousel_grid_prototype );

carousel_grid_overlay.o_card_large.o_card_classes = 'lrv-a-carousel-grid__overlay--primary';
carousel_grid_overlay.o_card_large.o_card_content_classes += ' lrv-a-carousel-grid__overlay--primary-content';

carousel_grid_overlay.o_card_large.c_lazy_image.c_lazy_image_classes = 'lrv-a-carousel-grid__overlay--primary-img';
carousel_grid_overlay.o_card_large.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-2x3';

carousel_grid_overlay.carousel_grid_overlay_layout_classes = 'lrv-a-carousel-grid__overlay';
carousel_grid_overlay.carousel_grid_overlay_secondary_classes = 'lrv-a-carousel-grid__overlay--secondary';

const o_card_item = clonedeep( carousel_grid_overlay.o_card_items[0] );

carousel_grid_overlay.o_card_items = [o_card_item, o_card_item, o_card_item];

o_card_item.o_card_classes += ' lrv-a-carousel-grid__overlay--secondary-card lrv-u-align-items-center';

o_card_item.c_title.c_title_classes = 'lrv-a-font-secondary-m';

o_card_item.c_lazy_image.c_lazy_image_classes += ' lrv-u-width-100p';
o_card_item.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';

module.exports = carousel_grid_overlay;
