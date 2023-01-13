<?php
wp_reset_query();
wp_reset_postdata();
$title = get_sub_field('title');
$versions_lists = get_sub_field('versions_lists');
?>
<?php if (!empty($versions_lists)) { ?>
    <section id="versions" class="section-ptb versions-section">
        <?php if (!empty($title)) { ?>
            <div class="container container-small">
                <div class="sec-title text-center">
                    <h2><?php echo $title; ?></h2>
                </div>
            </div>
        <?php } ?>
        <div class="container">
            <div class="versions-wrap">
                <div class="row">
                    <?php
                    foreach ($versions_lists as $versions_list) {
                        $versions_title = $versions_list['versions_title'];
                        $versions_image = $versions_list['versions_image'];
                        $versions_content = $versions_list['versions_content'];
                        $versions_cta = $versions_list['versions_cta'];
                        ?>
                        <div class="col-md-6 gradiant-bg">
                            <div class="single-versions">
                                <?php if (!empty($versions_image)) { ?>
                                    <div class="versions-logo">
                                        <img src="<?php echo $versions_image; ?>" alt="">
                                    </div>
                                <?php } ?>
                                <?php if (!empty($versions_title)) { ?>
                                    <h4><?php echo $versions_title; ?></h4>
                                <?php } ?>
                                <?php if (!empty($versions_content)) { ?>
                                    <p><?php echo $versions_content; ?></p>
                                <?php } ?>
                                <?php if (!empty($versions_cta)) { ?>
                                    <div class="btn-block text-center">
                                        <a class="btn" href="<?php echo $versions_cta['url']; ?>" target="<?php echo $versions_cta['target']; ?>"><?php echo $versions_cta['title']; ?> <span class="btn-arrow"></span></a>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>
<?php } ?>