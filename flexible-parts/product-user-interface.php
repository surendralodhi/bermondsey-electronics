<?php
wp_reset_query();
wp_reset_postdata();
$interface_content = get_sub_field('interface_content');
$interface_heading = get_sub_field('interface_heading');
$interface_lists = get_sub_field('interface_lists');
$bottom_title = get_sub_field('bottom_title');
$bottom_content = get_sub_field('bottom_content');
?>
<section id="user_interface" class="section-ptb user-interface-section">
    <div class="container container-small">
        <div class="sec-title text-center">
            <h2><?php echo $interface_heading; ?></h2>
        </div>
    </div>
    <div class="container container-small">
        <div class="row">
            <?php if (!empty($interface_lists)) { ?>
                <?php foreach ($interface_lists as $interface_list) { ?>
                    <div class="col-md-6">
                        <h5><?php echo $interface_list['title']; ?></h5>
                        <p><?php echo $interface_list['content']; ?></p>
                    </div>
                <?php } ?>
            <?php } ?>
            <?php echo $interface_content; ?>
            <div class="sec-title text-center">
                <h2><?php echo $bottom_title; ?></h2>
            </div>
            <p><?php echo $bottom_content; ?></p>
        </div>
    </div>
</section>