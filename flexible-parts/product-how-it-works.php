<?php
wp_reset_query();
wp_reset_postdata();
$title = get_sub_field('title');
$image = get_sub_field('image');
$content = get_sub_field('content');
?>
<section id="how_it_works" class="section-ptb how-itWork-section">
    <?php if (!empty($title)) { ?>
        <div class="container">
            <div class="sec-title text-center">
                <h2><?php echo $title; ?></h2>
            </div>
        </div>
    <?php } ?>
    <div class="container container-small">

    <?php if (!empty($image)) { ?>
        <div class="how-itWork-diagram">
            <img src="<?php echo $image; ?>" alt="">
        </div>
    <?php } ?>
    <?php if (!empty($content)) { ?>
        <div class="how-itWork-content">
            <p><?php echo $content; ?></p>
        </div>
    <?php } ?>
    </div>
</section>
