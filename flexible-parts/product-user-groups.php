<?php
wp_reset_query();
wp_reset_postdata();
$user_groups_title = get_sub_field('user_groups_title');
$user_groups_lists = get_sub_field('user_groups_lists');
?>
<?php if (!empty($user_groups_lists)) { ?>
    <section id="user_groups" class="section-ptb who-benefits-section">
        <div class="container">
            <?php if (!empty($user_groups_title)) { ?>
                <div class="sec-title text-center">
                    <h2><?php echo $user_groups_title; ?></h2>
                </div>
            <?php } ?>
            <div class="benefits-wrap">
                <div class="benefits-slider">
                    <?php
                    foreach ($user_groups_lists as $user_groups_list) {
                        $image = $user_groups_list['image'];
                        $title = $user_groups_list['title'];
                        $content = $user_groups_list['content'];
                        ?>
                        <div class="single-beneficiary">
                            <?php if (!empty($image)) { ?>
                                <div class="beneficiary-pic">
                                    <img src="<?php echo $image; ?>" alt="<?php echo $title; ?>">
                                </div>
                            <?php } ?>
                            <div class="beneficiary-desc">
                                <?php if (!empty($title)) { ?>
                                    <h5><?php echo $title; ?></h5>
                                <?php } ?>
                                <?php if (!empty($content)) { ?>
                                    <p><?php echo $content; ?></p>
                                <?php } ?>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>
<?php } ?>