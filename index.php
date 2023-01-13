<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage BERMONDSEYELECTRONICS
 * @since Bermondsey Electronics 1.0
 */
get_header();
?>

<section class="news-overview-section para24">
    <div class="container container-small">
        <h4>News</h4>
        <p>Welcome to our newsroom, where you’ll find our formal press releases and other news items.</p>
    </div>
</section>
<?php if (have_posts()) { ?>
    <section class="all-news-section">
        <div class="container">
            <div class="row">
                <?php
                while (have_posts()) {
                    the_post();
                    $posts_Ids = get_the_ID();
                    $image = get_the_post_thumbnail_url();
                    $title = get_the_title();
                    $content = get_the_content();
                    $date = get_the_date('d. M Y');
                    $terms = get_the_terms($posts_Ids, 'category');
                    $link = get_permalink();
                    ?>
                    <div class="col-lg-4 col-md-6 single-post">
                        <div class="date-category">
                            <div class="date"><?php echo $date; ?></div>
                            <?php if (!empty($terms)) { ?>
                                <div class="category"><?php echo $terms[0]->name; ?></div>
                            <?php } ?>
                        </div>
                        <?php if (!empty($image)) { ?>
                            <div class="post-pic">
                                <a href="<?php echo $link; ?>"><img src="<?php echo $image; ?>" alt=""></a>
                            </div>
                        <?php } ?>
                        <?php if (!empty($title)) { ?>
                            <h5><a href="<?php echo $link; ?>"><?php echo $title; ?></a></h5>
                        <?php } ?>
                        <?php if (!empty($content)) { ?>
                            <p><?php echo wp_trim_words($content, 35); ?></p>
                        <?php } ?>
                        <a class="text-link" href="<?php echo $link; ?>">Read more <span class="btn-arrow"></span></a>
                    </div>
                <?php } ?>
            </div>
        </div>
    </section>
<?php } ?>
<?php
$Page_Ids = get_option('page_for_posts');
if (class_exists('acf')) {

    if (have_rows('flexible_content', $Page_Ids)):
        while (the_flexible_field('flexible_content', $Page_Ids)) :
            include locate_template('flexible-parts/' . str_replace('_', '-', get_row_layout()) . '.php');
        endwhile;
    endif;
}
?>
<?php get_footer(); ?>