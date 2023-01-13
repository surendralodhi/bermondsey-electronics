<?php
wp_reset_query();
wp_reset_postdata();
$use_cases_title = get_sub_field('use_cases_title');
$use_cases_lists = get_sub_field('use_cases_lists');
?>
<?php if (!empty($use_cases_lists)) { ?>
<section id="use_cases" class="section-ptb use-cases-section">
        <div class="container">
            <?php if (!empty($use_cases_title)) { ?>
                <div class="sec-title text-center">
                    <h2><?php echo $use_cases_title ?></h2>
                </div>
            <?php } ?>
            <?php
            foreach ($use_cases_lists as $use_cases_list) {
                $resource_title = $use_cases_list['resource_title'];
                $resource_lists = $use_cases_list['resource_lists'];
                $content_cta_lists = $use_cases_list['content_cta_lists'];
                ?>
                <div class="use-cases-wrap">
                    <?php if (!empty($resource_title)) { ?>
                        <h4><?php echo $resource_title; ?></h4>
                    <?php } ?>
                    <?php if (!empty($resource_lists)) { ?>
                        <div class="product-row">
                            <?php
                            foreach ($resource_lists as $resource_list) {
                                $resource_title = $resource_list['resource_title'];
                                $resource_icons = $resource_list['resource_icons_'];
                                ?>
                                <div class="signle-prod">
                                    <?php if (!empty($resource_icons)) { ?>
                                        <div class="prod-image">
                                            <img src="<?php echo $resource_icons; ?>" alt="">
                                        </div>
                                    <?php } ?>
                                    <?php if (!empty($resource_title)) { ?>
                                        <h5><?php echo $resource_title; ?></h5>
                                    <?php } ?>
                                </div>
                            <?php } ?>
                        </div>
                    <?php } ?>
                    <?php if (!empty($content_cta_lists)) { ?>
                        <?php
                        foreach ($content_cta_lists as $content_cta_list) {
                            $content = $content_cta_list['content'];
                            $cta_lists = $content_cta_list['cta_lists'];
                            ?>
                            <?php if (!empty($content)) { ?>
                                <div class="product-content">
                                    <?php echo $content; ?>
                                </div>
                            <?php } ?>
                            <?php if (!empty($cta_lists)) { ?>
                                <div class="btn-block text-center">
                                    <?php foreach ($cta_lists as $cta_list) { ?>
                                        <a class="btn btn-bordered btn-white" href="<?php echo $cta_list['cta']['url']; ?>" target="<?php echo $cta_list['cta']['target']; ?>"><?php echo $cta_list['cta']['title']; ?> <span class="btn-arrow"></span></a>
                                    <?php } ?>
                                </div>
                            <?php } ?>
                        <?php } ?>
                    <?php } ?>
                </div>
            <?php } ?>
        </div>
    </section>
<?php } ?>