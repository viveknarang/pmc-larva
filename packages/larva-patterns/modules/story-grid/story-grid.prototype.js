const clonedeep = require( 'lodash.clonedeep' );

const story_card = clonedeep( require( '../story/story.vertical' ) );

story_card.c_dek.c_dek_classes = 'lrv-a-font-body-s lrv-a-hidden@mobile-max lrv-u-margin-a-00';
story_card.c_title.c_title_classes = 'lrv-a-font-primary-xxs lrv-u-display-block lrv-u-margin-b-050';
story_card.c_tagline_author_wrapper_classes += ' lrv-u-align-items-center';
story_card.c_tagline_author.c_tagline_classes += ' lrv-u-margin-tb-00 lrv-u-padding-l-050';
story_card.c_tagline_author.c_tagline_text = 'John Doe';
story_card.story_grid_secondary_classes = 'lrv-a-span2';
story_card.story_links_classes += ' lrv-u-margin-t-050';
story_card.story_nav_classes = 'lrv-a-font-secondary-m';

module.exports = {
	story_grid_classes: '',
	story_grid_grid_classes: 'lrv-a-grid lrv-a-cols2 lrv-a-cols4@desktop',
	story_grid_story_cards: [
		story_card,
		story_card,
		story_card,
		story_card,
		story_card,
		story_card,
		story_card,
		story_card,
	],
};
