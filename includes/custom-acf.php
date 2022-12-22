<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;
/*
 * Custom Theme Options
 */
if( function_exists('acf_add_options_page') ) {
    // Bermondsey Electronics General Settings
    $general_settings   = array(
                                'page_title' 	=> __( 'Bermondsey Electronics Settings', 'bermondseyelectronics' ),
                                'menu_title'	=> __( 'Bermondsey Electronics Settings', 'bermondseyelectronics' ),
                                'menu_slug' 	=> 'bermondseyelectronics-general-settings',
                                'capability'	=> 'edit_posts',
                                'redirect'      => false,
                                'icon_url'      => 'dashicons-admin-customizer'
                            );
    acf_add_options_page( $general_settings );
}