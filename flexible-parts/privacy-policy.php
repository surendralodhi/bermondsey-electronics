<?php
wp_reset_query();
wp_reset_postdata();
$policy_content = get_sub_field('policy_content');
?>
<?php if (!empty($policy_content)) { ?>
    <section class="section-ptb default-content-section">
        <div class="container container-small">
            <?php echo $policy_content; ?>
        </div>
    </section>
<?php } ?>