<?php
wp_reset_query();
wp_reset_postdata();
$believe_lists = get_sub_field('believe_lists');
?>
<?php if (!empty($believe_lists)): ?>
	
<section class="services-section section-ptb">
    <div class="container">
        <div class="row">
        	<?php foreach ($believe_lists as $key => $value) { 
        		$believe_image = $value['believe_image'];
        		$believe_content = $value['believe_content'];
        		$link = $value['link'];
        		?>       	
	            <div class="col-md-4 gradiant-bg">
	                <a href="<?php echo $link ?>">
	                    <div class="single-service">
	                        <div class="service-logo">
	                            <img src="<?php echo $believe_image ?>" alt="">
	                        </div>
	                        <?php echo $believe_content ?>
	                    </div>
	                </a>
	            </div>
            <?php } ?>
        </div>
    </div>
</section>
<?php endif ?>