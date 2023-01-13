<?php
wp_reset_query();
wp_reset_postdata();
$title = get_sub_field('title');
$content = get_sub_field('content');
?>
<section class="thank-you-section">
    <div class="container container-small">
        <div class="thanks-content para24">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/check-mark.png" alt="">
            <h1><?php echo $title; ?></h1>
            <p><?php echo $content; ?></p>
        </div>
    </div>
</section>
