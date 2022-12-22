<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage BERMONDSEYELECTRONICS
 * @since Bermondsey Electronics 1.0
 */
?>
<?php 
if(class_exists('acf')){
    $footer_logo = get_field('bermondseyelectronics_options_footer_logo','option');
    $footer_description = get_field('bermondseyelectronics_options_footer_description','option');
    $terms_policy_link_lists = get_field('bermondseyelectronics_options_f_terms_policy_link_lists','option');
    $f_copy = get_field('bermondseyelectronics_options_f_copy','option');
    $s_li_link = get_field('bermondseyelectronics_options_s_li_link','option');
    $c_phone = get_field('bermondseyelectronics_options_c_phone','option');
    $c_email = get_field('bermondseyelectronics_options_c_email','option');
    $c_address = get_field('bermondseyelectronics_options_c_address','option');
}
?>
		<!-- Footer start here -->
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-12">
                        <div class="aboutus">
                            <?php if(!empty($footer_logo)){ ?> 
                            <div class="footer-logo">
                                <a href="<?php echo home_url(); ?>"><img src="<?php echo $footer_logo['url']; ?>" alt="<?php echo $footer_logo; ?>"></a>
                            </div>
                            <?php } ?>
                            <?php if(!empty($footer_description)){ ?>
                            <p><?php echo $footer_description; ?></p>
                            <?php } ?>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5 col-md-7">
                        <div class="contact">
                            <h5>Contact</h5>
                            <?php if(!empty($c_address)){ ?>
                            <div class="address">
                                
                                <p><?php echo $c_address; ?>
                                </p> 
                                
                            </div>
                            <?php } ?>
                            <div class="contact-info">
                                <?php if(!empty($c_email)){ ?>
                                <p><a href="mailto:<?php echo $c_email; ?>"><?php echo $c_email; ?></a></p>
                                <?php } ?>
                                <?php if(!empty($c_phone)){ ?>
                                <p><a href="tel:<?php echo $c_phone; ?>"><?php echo $c_phone; ?></a></p>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-3 col-md-5">
                        <div class="quick-links">
                            <h5>Quick Links</h5>
                            <?php if ( has_nav_menu( 'footer' ) ) : ?>
                                <?php
                                    wp_nav_menu( array(
                                            'theme_location' => 'footer',
                                            'menu_class'     => '',
                                            'container'      => '',
                                     ) );
                                ?>
                             <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="footer-bottom-wrap">
                        <?php if(!empty($s_li_link)){ ?>
                        <div class="follow-us">Follow us on <a href="<?php echo $s_li_link ?>">LinkedIn</a></div>
                        <?php } ?>
                        <?php if(!empty($c_phone)){ ?>
                        <div class="privacyPolicy">
                            <?php foreach ($terms_policy_link_lists as $link) { ?>
                                <a href="<?php echo $link['footer_link']['url']; ?>" target="<?php echo $link['footer_link']['target']; ?>"><?php echo $link['footer_link']['title']; ?></a> 
                            <?php } ?>
                        </div>
                        <?php } ?>
                        <?php if(!empty($f_copy)){ ?>
                        <div class="copyright"><?php echo $f_copy; ?></div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </footer><!-- Footer End here -->
        <?php wp_footer(); ?>
    </body>
</html>
