<?php
wp_reset_query();
wp_reset_postdata();
$gallery_image = get_sub_field('image');
?>
<section class="gallery-section">
    <div class="gallery-slider">
        <?php foreach( $gallery_image as $image_url ): ?>
            <div class="gallery-item">
                <img src="<?php echo $image_url ?>" alt="">
            </div>
        <?php endforeach; ?>
    </div>
</section>