( function( api ) {
	var cssTemplate = wp.template( 'bermondseyelectronics-color-scheme' ),
		colorSchemeKeys = [
			'background_color',
			'page_background_color',
			'link_color',
			'main_text_color',
			'secondary_text_color'
		],
		colorSettings = [
			'background_color',
			'page_background_color',
			'link_color',
			'main_text_color',
			'secondary_text_color'
		];

	api.controlConstructor.select = api.Control.extend( {
		ready: function() {
			if ( 'color_scheme' === this.id ) {
				this.setting.bind( 'change', function( value ) {
					var colors = colorScheme[value].colors;

					var color = colors[0];
					api( 'background_color' ).set( color );
					api.control( 'background_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', color )
						.wpColorPicker( 'defaultColor', color );

					color = colors[1];
					api( 'page_background_color' ).set( color );
					api.control( 'page_background_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', color )
						.wpColorPicker( 'defaultColor', color );

					color = colors[2];
					api( 'link_color' ).set( color );
					api.control( 'link_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', color )
						.wpColorPicker( 'defaultColor', color );

					color = colors[3];
					api( 'main_text_color' ).set( color );
					api.control( 'main_text_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', color )
						.wpColorPicker( 'defaultColor', color );

					color = colors[4];
					api( 'secondary_text_color' ).set( color );
					api.control( 'secondary_text_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', color )
						.wpColorPicker( 'defaultColor', color );
				} );
			}
		}
	} );

	function updateCSS() {
		var scheme = api( 'color_scheme' )(),
			css,
			colors = _.object( colorSchemeKeys, colorScheme[ scheme ].colors );

		_.each( colorSettings, function( setting ) {
			colors[ setting ] = api( setting )();
		} );

		colors.border_color = Color( colors.main_text_color ).toCSS( 'rgba', 0.2 );

		css = cssTemplate( colors );

		api.previewer.send( 'update-color-scheme-css', css );
	}

	_.each( colorSettings, function( setting ) {
		api( setting, function( setting ) {
			setting.bind( updateCSS );
		} );
	} );
} )( wp.customize );
