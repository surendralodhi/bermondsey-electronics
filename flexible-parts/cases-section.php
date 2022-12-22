<?php
wp_reset_query();
wp_reset_postdata();
$case_title = get_sub_field('case_title');
$case_content = get_sub_field('case_content');
$use_cases = get_sub_field('use_cases');
$cta = get_sub_field('cta');
?>
<section class="cases-section section-ptb pb-0">
    <div class="container container-small">
        <div class="sec-title para24">
            <h4><?php echo $case_title ?></h4>
            <p><?php echo $case_content ?></p>
        </div>
    </div>
    <div class="cases-wrap">
        <div class="cases-slider">
            <?php foreach ($use_cases as $key => $value) { 
                ?>          
                <div class="case-single">
                    <div class="case-pic">
                        <img src="<?php echo get_the_post_thumbnail_url($value); ?>" alt="">
                    </div>
                    <div class="case-desc">
                        <h5><a href="<?php echo get_permalink($value); ?>"><?php echo get_the_title( $value ); ?></a></h5>
                        <p><?php echo get_the_content( null,false,$value ); ?></p>
                        <a class="text-link" href="<?php echo get_permalink($value); ?>">Read more →</a>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
    <div class="container">
        <div class="btn-block text-center">
            <a class="btn btn-bordered" href="<?php echo $cta['url'] ?>" target="<?php echo $cta['target'] ?>"><?php echo $cta['title'] ?> →</a>
        </div>
    </div>
</section>