<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;
/*
 * Template Name: Thank you Page Template
 *
 * @package WordPress
 * @subpackage bermondseyelectronics
 * @since bermondseyelectronics 1.0
 */

get_header(); ?>

<section class="thank-you-section">
    <div class="container container-small">
        <div class="thanks-content para24">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/check-mark.png" alt="">
            <h1>Thank You</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </div>
</section>
<?php get_footer(); ?>