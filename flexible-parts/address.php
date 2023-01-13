<?php
wp_reset_query();
wp_reset_postdata();
$c_phone = get_field('bermondseyelectronics_options_c_phone', 'option');
$c_email = get_field('bermondseyelectronics_options_c_email', 'option');
$c_address = get_field('bermondseyelectronics_options_c_address', 'option');
?>
<section class=" section-ptb contact-info-section para24">
    <div class="container container-small">
        <?php if (!empty($c_address)) { ?>
            <h4>Locate us</h4>
            <p><?php echo $c_address; ?></p>
        <?php } ?>
        <?php if (!empty($c_address)) { ?>
            <h4>Phone</h4>
            <p><a href="tel:<?php echo $c_phone; ?>"><?php echo $c_phone; ?></a></p>
        <?php } ?>
        <?php if (!empty($c_address)) { ?>
            <h4>Email</h4>
            <p><a href="mailto:<?php echo $c_email; ?>"><?php echo $c_email; ?></a></p>
        <?php } ?>
    </div>
</section>