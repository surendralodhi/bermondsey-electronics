<?php
wp_reset_query();
wp_reset_postdata();
$product_pricing_title = get_sub_field('product_pricing_title');
$product_pricing_content = get_sub_field('product_pricing_content');
$product_pricing_lists = get_sub_field('product_pricing_lists');
$bottom_text = get_sub_field('bottom_text');
?>
<section class="products-price-section">
    <div class="container container-small">
        <div class="sec-title para24">
            <?php if (!empty($product_pricing_title)) { ?> 
                <h1><?php echo $product_pricing_title ?></h1>
            <?php } ?>
            <?php if (!empty($product_pricing_content)) { ?> 
                <p><?php echo $product_pricing_content ?></p>
            <?php } ?>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <?php if (!empty($product_pricing_lists)) { ?>
                <?php
                foreach ($product_pricing_lists as $key => $value) {
                    $product_pricing_logo = $value['product_pricing_logo'];
                    $product_pricing_list = $value['product_pricing_list'];
                    $product_details_lists = $value['product_details_lists'];
                    $product_cta = $value['product_cta'];
                    $services = $value['services'];
                    ?>
                    <div class="col-md-6 gradiant-bg">
                        <div class="single-products-price">
                            <div class="products-price-logo">
                                <?php if (!empty($product_pricing_logo)) { ?>
                                    <img src="<?php echo $product_pricing_logo ?>" alt="">
                                <?php } ?>
                            </div>
                            <div class="product-specifications">
                                <?php if (!empty($product_pricing_list)) { ?>
                                    <?php
                                    foreach ($product_pricing_list as $key => $pricing) {
                                        $text = $pricing['text'];
                                        $product_period = $pricing['product_period'];
                                        $product_price = $pricing['product_price'];
                                        $product_vat = $pricing['product_vat'];
                                        ?>
                                        <div class="specification">
                                            <p><?php echo $text; ?></p>
                                            <p><?php echo $product_period; ?></p>
                                            <div class="product-price"><?php echo $product_price; ?> </div>
                                            <p><?php echo $product_vat; ?></p>
                                        </div>
                                    <?php } ?>
                                <?php } ?>
                            </div>
                            <div class="product-details">
                                <div class="product-details-inner">
                                    <?php if (!empty($product_details_lists)) { ?>
                                        <?php
                                        foreach ($product_details_lists as $key => $product_details) {
                                            $product_detail_title = $product_details['product_detail_title'];
                                            $product_detail_content = $product_details['product_detail_content'];
                                            ?>
                                            <h5><?php echo $product_detail_title; ?></h5>
                                            <p><?php echo $product_detail_content; ?></p>
                                        <?php } ?>
                                    <?php } ?> 
                                </div>
                            </div>

                            <?php if (!empty($product_cta)) { ?>
                                <div class="btn-block text-center">
                                    <a class="btn" href="<?php echo $product_cta['url'] ?>" target="<?php echo $product_cta['target'] ?>"><?php echo $product_cta['title'] ?> <span class="btn-arrow"></span></a>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                <?php } ?>
            <?php } ?>                
        </div>
    </div>
    <div class="package"><?php echo $bottom_text; ?></div>
</section>