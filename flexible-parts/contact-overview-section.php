<?php
wp_reset_query();
wp_reset_postdata();
$contact_overview = get_sub_field('contact_overview');
$calendar_data = get_sub_field('calendar_data');
?>
<?php if (!empty($contact_overview)) { ?>
    <section class="contact-overview-section para24">
        <div class="container container-small">
            
            <?php echo $contact_overview; ?>
        </div>
    </section>
<?php } ?>
<?php if (!empty($calendar_data)) { ?>
    <section class="calendar-section">
        <div class="container container-small">
            <div class="calendar-wrap">
            <?php echo $calendar_data; ?>
            </div>
        </div>
    </section>
<?php } ?>