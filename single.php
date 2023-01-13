<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage BERMONDSEYELECTRONICS
 * @since Bermondsey Electronics 1.0
 */
get_header();
the_post();
$posts_Ids = get_the_ID();
$image = get_the_post_thumbnail_url();
$date = get_the_date('d. M Y');
$terms = get_the_terms($posts_Ids, 'category');
?>

<section class="news-article-section">
    <div class="container container-small">
        <div class="single-post">
            <div class="date-category">
                <div class="date"><?php echo $date; ?></div>
                <div class="category"><?php echo $terms[0]->name; ?></div>
            </div>
            <h4><?php the_title(); ?></h4>
            <div class="post-pic">
                <img src="<?php echo $image; ?>" alt="">
            </div>
            <?php the_content(); ?>
            <?php 
            $prev_post = get_previous_post();
            $prev_post_link = get_permalink($prev_post->ID);
            $next_post = get_next_post();
            $next_post_link = get_permalink($next_post->ID);
            $page_for_posts_Ids = get_option('page_for_posts');
            $page_for_posts_link = get_permalink($page_for_posts_Ids);
            ?>
            <div class="post-nav">
                <?php if (!empty($next_post)) { ?>
                    <a class="text-link new-post" href="<?php echo $next_post_link ; ?>"><span class="btn-arrow"></span>New</a>
                <?php } ?>
                <?php if (!empty($page_for_posts_link)) { ?>
                    <a class="post-index" href="<?php echo $page_for_posts_link; ?>">News Home</a>
                <?php } ?>
                <?php if (!empty($prev_post)) { ?>
                    <a class="text-link old-post" href="<?php echo $prev_post_link; ?>">Old<span class="btn-arrow"></span></a>
                    <?php } ?>
            </div>

        </div>
    </div>
</section>    
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