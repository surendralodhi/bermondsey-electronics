<?php
wp_reset_query();
wp_reset_postdata();
$sectors_title = get_sub_field('sectors_title');
$sector_content = get_sub_field('sector_content');
$sector_lists = get_sub_field('sector_lists');
$cta = get_sub_field('cta');
?>
<section class="sectors-section section-ptb pb-0">
    <div class="container container-small">
        <div class="sec-title para24">
            <h4><?php echo $news_title ?></h4>
            <p><?php echo $news_content ?></p>
        </div>
    </div>
    <div class="sectors-wrap">
        <div class="container">
            <div class="row">
                <?php foreach ($sector_lists as $key => $value) { 
                    $sector_image = $value['sector_image'];
                    $title = $value['title'];
                    $link = $value['link'];
                ?>        
                    <div class="col-lg-4 col-md-6">
                        <div class="sector-single">
                            <div class="sector-pic">
                                <img src="<?php echo $sector_image ?>" alt="">
                            </div>
                            <div class="sector-desc">
                                <h5><a href="<?php echo $link ?>"><?php echo $title ?></a></h5>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</section>