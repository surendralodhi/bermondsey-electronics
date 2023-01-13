<?php
wp_reset_query();
wp_reset_postdata();
$overview_content = get_sub_field('overview_content');
?>
<?php if (!empty($overview_content)) { ?>
    <section class="section-ptb about-overview-section para24">
        <div class="container container-small">
            <?php echo $overview_content; ?>
        </div>
    </section>
<?php } ?>