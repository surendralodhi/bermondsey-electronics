<?php
wp_reset_query();
wp_reset_postdata();
$partner_title = get_sub_field('partner_title');
$partner_content = get_sub_field('partner_content');
$partners_logos = get_sub_field('partners_logos');
$cta = get_sub_field('cta');
?>
<section class="partners-section section-ptb pb-0">
    <div class="container container-small">
        <div class="sec-title para24">
            <h4><?php echo $partner_title ?></h4>
            <p><?php echo $partner_content ?></p>
        </div>
        <div class="partners-logo">
            <?php foreach ($partners_logos as $key => $value) { 
                    $logo = $value['logo'];
                    $link = $value['logo_link'];
                ?>
            <div class="single-partner">
                <a href="<?php echo $link ?>"><img src="<?php echo $logo ?>" alt=""></a>
            </div>
        <?php } ?>
        </div>
    </div>
</section>