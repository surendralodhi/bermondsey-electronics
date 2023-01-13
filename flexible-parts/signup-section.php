<?php
wp_reset_query();
wp_reset_postdata();
$signup_title = get_sub_field('signup_title');
$signup_content = get_sub_field('signup_content');
$signup_code = get_sub_field('signup_code');
?>
<section class="form-section section-ptb pb-0 signup-form">
    <div class="container container-small">
        <div class="sec-title para24">
            <h4><?php echo $signup_title ?></h4>
            <p><?php echo $signup_content ?></p>
        </div>
        <div class="contact-form">
            <form action="http://secure.softwarekey.com/solo/products/trialsignup.asp" method="post" onsubmit="return Form_Validator(this)">
                <input type="hidden" name="ProductID" value="">
                <input type="hidden" name="SuccessURL" value="http://www.domain.com/TrialSuccess.htm">
                <input type="hidden" name="FailureURL" value="http://www.domain.com/TrialFailure.htm">
                <input type="hidden" name="DistributorID" value="">

                <div class="row">
                    <div class="col-md-6">
                        <label>First Name:</label>
                        <input type="text" name="FirstName" maxlength="30">
                    </div>
                    <div class="col-md-6">
                        <label>Last Name:</label>
                        <input type="text" name="LastName" maxlength="30">
                    </div>
                    <div class="col-md-6">
                        <label>Email Address:</label>
                        <input type="text" name="Email" maxlength="60">
                    </div>
                    <div class="col-md-6">
                        <label>Company Name:</label>
                        <input type="text" name="CompanyName" maxlength="50">
                    </div>
                    <div class="submit-btn">
                        <div class="col-md-5 relative">
                            <input type="submit" value="Submit" class="btn-bordered btn">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>