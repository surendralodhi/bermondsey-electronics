<?php
wp_reset_query();
wp_reset_postdata();
$cta_title = get_sub_field('cta_title');
$cta = get_sub_field('cta');
?>
<section class="CTA-section section-ptb pb-0">
    <div class="container container-small">
        <div class="sec-title para24">
            <p><?php echo $cta_title ?></p>
        </div>
        <div class="btn-block text-center">
            <a class="btn btn-bordered btn-white" href="<?php echo $cta['url'] ?>" target="<?php echo $cta['target'] ?>"><?php echo $cta['title'] ?> →</a>
        </div>
    </div>
</section>