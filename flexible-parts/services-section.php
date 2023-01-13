<?php
wp_reset_query();
wp_reset_postdata();
$services_title = get_sub_field('services_title');
$services_content = get_sub_field('services_content');
$services_lists = get_sub_field('services_lists');
?>
<section class="section-ptb services-overview para24">
    <div class="container container-small">
        <?php if (!empty($services_title)) { ?> 
            <h4><?php echo $services_title ?></h4>
        <?php } ?>
        <?php if (!empty($services_content)) { ?> 
            <p><?php echo $services_content ?></p>
        <?php } ?>
    </div>
</section>
<section class="service-section">
    <div class="container">
        <div class="row">
            <?php if (!empty($services_lists)) { ?>
                <?php
                foreach ($services_lists as $key => $value) {
                    $title = $value['title'];
                    $services = $value['services'];
                    ?>
                    <div class="col-md-6 service">
                        <div class="service-inner">
                            <?php if (!empty($title)) { ?>
                                <h4><?php echo $title ?></h4>
                            <?php } ?>

                            <?php if (!empty($services)) { ?>
                                <?php
                                foreach ($services as $key => $value) {
                                    $content = $value['content'];
                                    $cta = $value['cta'];
                                    ?>
                                    <div class="service-content-row">
                                        <?php echo $content ?>
                                        <?php if (!empty($cta)) { ?>
                                            <div class="btn-block text-center">
                                                <a class="btn btn-bordered" href="<?php echo $cta['url'] ?>" target="<?php echo $cta['target'] ?>"><?php echo $cta['title'] ?> <span class="btn-arrow"></span></a>
                                            </div>
                                        <?php } ?>
                                    </div>
                                <?php } ?>
                            <?php } ?>
                        </div>
                    </div>
                <?php } ?>
            <?php } ?>
        </div>
    </div>
</section>