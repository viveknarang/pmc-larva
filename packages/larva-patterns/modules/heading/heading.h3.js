const clonedeep = require( 'lodash.clonedeep' );

const heading = clonedeep( require( './heading.prototype' ) );

heading.heading_classes = 'lrv-a-font-secondary-l';
heading.heading_level_text = '3';

module.exports = heading;