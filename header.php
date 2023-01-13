<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage BERMONDSEYELECTRONICS
 * @since Bermondsey Electronics 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) { ?>
            <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <?php } ?>
        <?php
            if( class_exists('acf') ) {
                $favicon = get_field( 'bermondseyelectronics_options_favicon', 'option' );
                if( !empty( $favicon ) ) {
        ?>
            <!-- Favicon -->
            <link rel="shortcut icon" href="<?php echo $favicon['url']; ?>" type="image/x-icon" />
        <?php
                }
            }
        ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php 
    if(class_exists('acf')){
        $site_logo = get_field('bermondseyelectronics_options_site_logo','option');
        $header_white_and_black = get_field('header_white_and_black', get_the_ID());
    }
    ?>
    <div class="loader"></div>
    <header id="header" <?php if ($header_white_and_black) { ?> class="black-header" <?php } ?>>
        <div class="header-wrap">
            <div class="logo">
                <a href="<?php echo home_url(); ?>"><img src="<?php echo $site_logo['url']?>" alt=""></a>
                <?php if(!is_front_page()) { ?>
                    <div class="breadcrumbs-nav">
                        <?php bcn_display(); ?>
                    </div>
                <?php } ?>
            </div>
            
            <div class="nav-menu">
                <a class="menulinks"><i></i></a>
                <?php if ( has_nav_menu( 'primary' ) ) : ?>
                    <?php
                        wp_nav_menu( array(
                            'theme_location' => 'primary',
                            'menu_class'     => 'mainmenu',
                            'container'      => '',
                         ) );
                    ?>
                 <?php endif; ?>
            </div>
        </div>
    </header>
