<?php
wp_reset_query();
wp_reset_postdata();
$banner_logo = get_sub_field('banner_logo');
$product_menu = get_sub_field('product_menu');
$information_title = get_sub_field('information_title');
$information_content = get_sub_field('information_content');
$information_cta_lists = get_sub_field('information_cta_list');
?>
<section class="product-introduction-section">
    <?php if (!empty($product_menu)) { ?>
        <div class="product-hero">
            <div class="container">
                <div class="product-hero-content">
                    <img src="<?php echo $banner_logo; ?>" alt="">
                    <div class="down-arrow"><a href="#product-menu"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="34" viewBox="0 0 58 34">
                          <defs>
                            <style>
                              .cls-1 {
                                fill: none;
                                stroke: #fff;
                                stroke-width: 1px;
                                fill-rule: evenodd;
                              }
                            </style>
                          </defs>
                          <path class="cls-1" d="M0,0L28,33,57,0"/>
                        </svg></a></div>
                </div>
            </div>
        </div>
    <?php } ?>
    <?php if (!empty($product_menu)) { ?>
        <?php if (has_nav_menu($product_menu)) { ?>
            <div id="product-menu">
                <div class="container">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => $product_menu,
                        'menu_class' => '',
                        'container' => '',
                    ));
                    ?>
                </div>
            </div>
        <?php } ?>
    <?php } ?>
    <div id="introduction" class="product-introduction">
        <div class="container container-small">
            <div class="product-intro">
                <?php if (!empty($information_title)) { ?>
                    <h1><?php echo $information_title; ?></h1>
                <?php } ?>
                <?php echo $information_content; ?>
            </div>
            <?php if (!empty($information_cta_lists)) { ?>
                <div class="btn-block text-center">
                    <?php foreach ($information_cta_lists as $information_cta_list) { ?>
                        <a class="btn btn-bordered btn-white" href="<?php echo $information_cta_list['cta']['url']; ?>" target="<?php echo $information_cta_list['cta']['target']; ?>"><?php echo $information_cta_list['cta']['title']; ?> <span class="btn-arrow"></span></a>
                    <?php } ?>
                </div>
            <?php } ?>

        </div>

    </div>

</section>