<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;
/**
 * Register Use Cases Types
 */
function bermondseyelectronics_register_post_types() {
    $custompost_labels = array(
                            'name'               => _x( 'Use Cases', 'use_cases', 'bermondseyelectronics' ),
                            'singular_name'      => _x( 'Use Cases', 'use_cases', 'bermondseyelectronics' ),
                            'menu_name'          => _x( 'Use Cases', 'use_cases', 'bermondseyelectronics' ),
                            'name_admin_bar'     => _x( 'Use Cases', 'use_cases', 'bermondseyelectronics' ),
                            'add_new'            => _x( 'Add New', 'use_cases', 'bermondseyelectronics' ),
                            'add_new_item'       => __( 'Add New Use Cases', 'bermondseyelectronics' ),
                            'new_item'           => __( 'New Use Cases', 'bermondseyelectronics' ),
                            'edit_item'          => __( 'Edit Use Cases', 'bermondseyelectronics' ),
                            'view_item'          => __( 'View Use Cases', 'bermondseyelectronics' ),
                            'all_items'          => __( 'All Use Cases', 'bermondseyelectronics' ),
                            'search_items'       => __( 'Search Use Cases', 'bermondseyelectronics' ),
                            'parent_item_colon'  => __( 'Parent Use Cases:', 'bermondseyelectronics' ),
                            'not_found'          => __( 'No Use Cases Found.', 'bermondseyelectronics' ),
                            'not_found_in_trash' => __( 'No Use Cases Found In Trash.', 'bermondseyelectronics' ),
                        );

    $custompost_args = array(
                            'labels'             => $custompost_labels,
                            'public'             => true,
                            'publicly_queryable' => true,
                            'show_ui'            => true,
                            'show_in_menu'       => true,
                            'query_var'          => true,
                            'rewrite'            => array( 'slug'=> 'use_cases', 'with_front' => false ),
                            'capability_type'    => 'post',
                            'has_archive'        => false,
                            'hierarchical'       => false,
                            'menu_position'      => null,
                            'menu_icon'          => 'dashicons-pressthis',
                            'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes' )
                        );

    register_post_type( BERMONDSEYELECTRONICS_USE_CASES_POST_TYPE, $custompost_args );
    
    // Add new taxonomy, make it hierarchical (like categories)
    $labels = array(
                    'name'              => _x( 'Categories', 'taxonomy general name', 'bermondseyelectronics'),
                    'singular_name'     => _x( 'Category', 'taxonomy singular name','bermondseyelectronics' ),
                    'search_items'      => __( 'Search Categories','bermondseyelectronics' ),
                    'all_items'         => __( 'All Categories','bermondseyelectronics' ),
                    'parent_item'       => __( 'Parent Category','bermondseyelectronics' ),
                    'parent_item_colon' => __( 'Parent Category:','bermondseyelectronics' ),
                    'edit_item'         => __( 'Edit Category' ,'bermondseyelectronics'), 
                    'update_item'       => __( 'Update Category' ,'bermondseyelectronics'),
                    'add_new_item'      => __( 'Add New Category' ,'bermondseyelectronics'),
                    'new_item_name'     => __( 'New Category Name' ,'bermondseyelectronics'),
                    'menu_name'         => __( 'Categories' ,'bermondseyelectronics')
                );

    $args = array(
                    'hierarchical'      => true,
                    'labels'            => $labels,
                    'show_ui'           => true,
                    'show_admin_column' => true,
                    'query_var'         => true,
                    'rewrite'           => array( 'slug'=> 'custom_tax' )
                );
	
    // register_taxonomy( BERMONDSEYELECTRONICS_CUSTOM_POST_POST_TAX, BERMONDSEYELECTRONICS_CUSTOM_POST_POST_TYPE, $args );
    //flush rewrite rules
    flush_rewrite_rules();
}
//add action to create Use Cases type
add_action( 'init', 'bermondseyelectronics_register_post_types' );