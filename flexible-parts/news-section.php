<?php
wp_reset_query();
wp_reset_postdata();
$news_title = get_sub_field('news_title');
$news_content = get_sub_field('news_content');
$use_news = get_sub_field('news_post');
$cta = get_sub_field('cta');
?>
<section class="news-section section-ptb pb-0">
    <div class="container container-small">
        <div class="sec-title para24">
            <h4><?php echo $news_title ?></h4>
            <p><?php echo $news_content ?></p>
        </div>
    </div>
    <div class="news-wrap">
        <div class="news-slider">
            <?php foreach ($use_news as $key => $value) { 
                ?>          
                <div class="news-single">
                    <div class="news-pic">
                        <img src="<?php echo get_the_post_thumbnail_url($value); ?>" alt="">
                        <div class="news-desc">
                            <h5><a href="<?php echo get_permalink($value); ?>"><?php echo get_the_title( $value ); ?></a></h5>
                            <p><?php echo get_the_content( null,false,$value ); ?></p>
                            <a class="text-link" href="<?php echo get_permalink($value); ?>">Read more →</a>
                        </div>
                    </div>
                </div>
            <?php } ?>
            
        </div>
    </div>
    <div class="container">
        <div class="btn-block text-center">
            <a class="btn btn-bordered btn-white" href="<?php echo $cta['url'] ?>" target="<?php echo $cta['target'] ?>"><?php echo $cta['title'] ?> →</a>
        </div>
    </div>
</section>