<?php
wp_reset_query();
wp_reset_postdata();
$use_cases_title = get_sub_field('use_cases_title');
$use_cases_overview = get_sub_field('use_cases_overview');
$select_use_cases = get_sub_field('select_use_cases');
?>
<section class="section-ptb products-useCases-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="use-cases-content list-ul">
                    <h4><?php echo $use_cases_title; ?></h4>
                    <?php echo $use_cases_overview; ?>
                </div>
            </div>
            <?php if (!empty($select_use_cases)) { ?>
                <div class="col-md-6">
                    <div id="top" class="use-cases-index">
                        <h5>Index</h5>
                        <ul>
                            <?php
                            foreach ($select_use_cases as $select_use_case) {
                                $use_case = $select_use_case['select_use_case']->ID;
                                ?>
                                <li><a href="#<?php echo $select_use_case['select_use_case']->post_name; ?>"><?php echo get_the_title($use_case); ?></a></li>
                            <?php } ?>
                            <!--                            <li><a href="#measure-power">Measure Power Consumption</a></li>
                                                        <li><a href="#test-analogue">Test Analogue I/O</a></li>
                                                        <li><a href="#test-digital">Test Digital I/O</a></li>
                                                        <li><a href="#exercise-wired">Exercise Wired Interfaces</a></li>
                                                        <li><a href="#exercise-wireless">Exercise Wireless Interfaces</a></li>
                                                        <li><a href="#simulate-sensors">Simulate Sensors</a></li>
                                                        <li><a href="#simulate-user">Simulate User Interaction & Hardware Faults</a></li>
                                                        <li><a href="#event-advancement">Event Advancement</a></li>
                                                        <li><a href="#integration">Integration / Hardware-in-the-Loop Testing</a></li>
                                                        <li><a href="#software-event">Software Event/Fault Injection</a></li>-->
                        </ul>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</section>
<div class="products-useCases-lists">
    <?php
    foreach ($select_use_cases as $select_use_case) {
        $left__right_image = $select_use_case['left__right_image'];
        $use_case = $select_use_case['select_use_case']->ID;
        $show_interface = $select_use_case['show_interface'];
        $need_interface_title = $select_use_case['need_interface_title'];
        $need_interface_content = $select_use_case['need_interface_content'];
        $need_interface_image = $select_use_case['need_interface_image'];
        ?>
        <section id="<?php echo $select_use_case['select_use_case']->post_name; ?>" class="section-ptb use-cases-row">
            <div class="container">
                <div class="row">
                    <?php if ($left__right_image) { ?>
                        <div class="col-md-6 left-img">
                            <div class="use-cases-pic">
                                <img src="<?php echo get_the_post_thumbnail_url($use_case); ?>" alt="">
                            </div>
                        </div>
                        <div class="col-md-6 right-content">
                            <div class="use-cases-content">
                                <h4><?php echo get_the_title($use_case); ?></h4>
                                <?php echo apply_filters('the_content', $select_use_case['select_use_case']->post_content); ?>
                                <?php if ($show_interface) { ?>
                                    <div class="need-interface-board">
                                        <h4><?php echo $need_interface_title; ?></h4>
                                        <?php echo $need_interface_content; ?>
                                        <img src="<?php echo $need_interface_image; ?>" alt="">
                                    </div>
                                <?php } ?>
                                <ul>
                                    <li><a href="#top">Return to Index</a></li>
                                </ul>
                            </div>
                        </div>
                    <?php } ?>
                    <?php if (!$left__right_image) { ?>
                        <div class="col-md-6 left-content">
                            <div class="use-cases-content">
                                <h4><?php echo get_the_title($use_case); ?></h4>
                                <?php echo apply_filters('the_content', $select_use_case['select_use_case']->post_content); ?>
                                <?php if ($show_interface) { ?>
                                    <div class="need-interface-board">
                                        <h4><?php echo $need_interface_title; ?></h4>
                                        <?php echo $need_interface_content; ?>
                                        <img src="<?php echo $need_interface_image; ?>" alt="">
                                    </div>
                                <?php } ?>
                                <ul>
                                    <li><a href="#top">Return to Index</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 right-img">
                            <div class="use-cases-pic">
                                <img src="<?php echo get_the_post_thumbnail_url($use_case); ?>" alt="">
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </section>
    <?php } ?>
</div>
