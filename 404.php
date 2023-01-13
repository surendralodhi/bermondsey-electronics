<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage BERMONDSEYELECTRONICS
 * @since Bermondsey Electronics 1.0
 */

get_header(); ?>

  <section class="section-404">
    <div class="container container-small">
        <div class="error-content para24">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/755014.png" alt="">
            <h1>Oops, page not found</h1>
            <div class="btn-block text-center">
                <a class="btn btn-bordered btn-white" href="<?php echo home_url(); ?>" target="">Back to Homepage</a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>