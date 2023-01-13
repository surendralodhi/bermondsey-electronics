<?php
wp_reset_query();
wp_reset_postdata();
$support_title = get_sub_field('support_title');
$support_content = get_sub_field('support_content');
$contact_content = get_sub_field('contact_content');
$contact_image = get_sub_field('contact_image');
$contact_cta = get_sub_field('contact_cta');
?>
<section class=" section-ptb products-support-section">
    <div class="container container-small">
        <div class="support-content para24">
            <h2><?php echo $support_title; ?></h2>
            <?php echo $support_content; ?>
        </div>
        <div class="support-tailor">
            <img src="<?php echo $contact_image; ?>" alt="">
            <?php echo $contact_content; ?>
            <div class="btn-block text-center">
                <a class="btn" href="<?php echo $contact_cta['url']; ?>" target="<?php echo $contact_cta['target']; ?>"><?php echo $contact_cta['title']; ?> <span class="btn-arrow"></span></a>
            </div>
        </div>
    </div>
</section>
