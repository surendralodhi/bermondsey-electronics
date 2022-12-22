<?php
wp_reset_query();
wp_reset_postdata();
$hero_image = get_sub_field('hero_image');
$hero_title = get_sub_field('hero_title');
$hero_content = get_sub_field('hero_content');
$hero_image = !empty($hero_image) ? 'style="background-image:url('.$hero_image.')";'  : '';
?>
<section class="hero-section" <?php echo $hero_image; ?> >
    <div class="container container-small">
        <div class="hero-content para24">
            <h1><?php echo $hero_title; ?></h1>
            <p><?php echo $hero_content; ?></p>
        </div>
    </div>
</section>