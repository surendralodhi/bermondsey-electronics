<?php
wp_reset_query();
wp_reset_postdata();
$contact_title = get_sub_field('contact_title');
$contact_content = get_sub_field('contact_content');
$contact_code = get_sub_field('contact_code');
?>
<section class="form-section section-ptb pb-0">
    <div class="container container-small">
        <div class="sec-title para24">
            <h4><?php echo $contact_title ?></h4>
            <p><?php echo $contact_content ?></p>
        </div>
        <div class="contact-form">
            <?php echo do_shortcode($contact_code); ?>
        </div>
    </div>
</section>