<?php
wp_reset_query();
wp_reset_postdata();
$cta_bg_desktop = get_sub_field('cta_bg_image_desktop');
$cta_bg_mobile = get_sub_field('cta_bg_image_mobile');
$cta_title = get_sub_field('cta_title');
$cta_content = get_sub_field('cta_content');
$cta_buttons = get_sub_field('cta_buttons');
?>
<section class="CTA-section section-ptb pb-0">
    <div class="cta-bg-desktop"style="background-image: url(<?php echo $cta_bg_desktop ?>);"></div>
    <div class="cta-bg-mobile"style="background-image: url(<?php echo $cta_bg_mobile ?>);"></div>
    <div class="container container-small">
        <div class="sec-title para24">
            <h2><?php echo $cta_title ?></h2>
            <p><?php echo $cta_content ?></p>
        </div>
        <?php if (!empty($cta_buttons)) { ?>
            <div class="btn-block text-center">
                <?php foreach ($cta_buttons as $cta_button) { ?>
                    <a class="btn btn-bordered btn-white" href="<?php echo $cta_button['cta_button']['url']; ?>" target="<?php echo $cta_button['cta_button']['target']; ?>"><?php echo $cta_button['cta_button']['title']; ?> <span class="btn-arrow"></span></a>
                <?php } ?>
            </div>
        <?php } ?>
    </div>
</section>