const clonedeep = require( 'lodash.clonedeep' );
const c_lazy_image_prototype = require( '../../components/c-lazy-image/c-lazy-image.prototype' );
const c_lazy_image = clonedeep( c_lazy_image_prototype );

module.exports = {
	o_sponsored_by_classes: 'lrv-u-flex lrv-u-align-items-center',
	o_sponsored_by_title_classes: 'lrv-u-font-size-14 lrv-u-margin-r-050 lrv-u-font-style-italic',
	o_sponsored_by_text: 'Sponsored by',
	c_lazy_image: c_lazy_image
}
