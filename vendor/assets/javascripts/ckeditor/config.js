/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.contentsCss = 'css/font.css';
	config.font_names = 'mitubachi Regular/mitubachi;' + config.font_names;
	config.font_names = 'AhahaMojimoji Regular/AhahaMojimoji;' + config.font_names;
	config.font_names = 'Pacifico Regular/Pacifico;' + config.font_names;
	config.font_names = 'Frijole/Frijole;' + config.font_names;
	config.font_names = 'ヒラギノ角ゴ Pro W3;' + config.font_names;
	config.font_names = 'ヒラギノ角ゴ Pro W6;' + config.font_names;
};
