<?php
wp_reset_query();
wp_reset_postdata();
$member_lists = get_sub_field('member_lists');
?>
<?php if (!empty($member_lists)) { ?>
    <section class="members-section">
        <?php
        foreach ($member_lists as $member_list) {
            $member_image = $member_list['member_image'];
            $member_content = $member_list['member_content'];
            $member_name = $member_list['member_name'];
            $cta = $member_list['cta'];
            ?>
            <div class="single-member-row">
                <?php if (!empty($member_image)) { ?>
                    <div class="member-image">
                        <img src="<?php echo $member_image; ?>" alt="">
                    </div>
                <?php } ?>
                <div class="member-bio">
                    <?php if (!empty($member_content)) { ?>
                        <div class="bio">
                            <p><?php echo $member_content; ?></p>
                        </div>
                    <?php } ?>
                    <?php if (!empty($member_name)) { ?>
                        <div class="name">
                            <?php echo $member_name; ?>
                        </div>
                    <?php } ?>
                    <?php if (!empty($cta)) { ?>
                        <div class="btn-block">
                            <a class="btn btn-bordered btn-white" href="<?php echo $cta['url']; ?>" target="<?php echo $cta['target']; ?>"><?php echo $cta['title']; ?> <span class="btn-arrow"></span></a>
                        </div>
                    <?php } ?>
                </div>
            </div>
        <?php } ?>
        
    </section>
<?php } ?>