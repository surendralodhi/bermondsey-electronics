<?php
wp_reset_query();
wp_reset_postdata();
$benefits_title = get_sub_field('benefits_title');
$benefits_content = get_sub_field('benefits_content');
$benefits_image = get_sub_field('benefits_image');
?>
<section id="benefits" class="two-column">
    <div class="text-col">
        <h5><?php echo $benefits_title; ?></h5>
        <?php echo $benefits_content; ?>
    </div>
    <div class="image-col" <?php if (!empty($benefits_image)) { ?> style="background-image: url(<?php echo $benefits_image; ?>);" <?php } ?>></div>
</section>