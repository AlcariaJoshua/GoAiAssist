<?php
//webscape menu
if (!function_exists('goaiassist_theme_setup')):

    function goaiassist_theme_setup()
    {

        add_theme_support('post-thumbnails');

        add_theme_support('post-formats', array('aside', 'gallery', 'quote', 'image', 'video'));

        register_nav_menus(
            array(

                'primary' => __('Primary Menu', 'goaiassist Header')

            )
        );

        add_theme_support('woocommerce');

        add_theme_support('wc-product-gallery-zoom');

        add_theme_support('wc-product-gallery-lightbox');

        add_theme_support('wc-product-gallery-slider');

    }

endif;

add_action('after_setup_theme', 'goaiassist_theme_setup');



// Register the shortcode [simple_contact_form]
add_shortcode('simple_contact_form', 'scf_display_form');

function scf_display_form() {
    ob_start(); ?>
    
    <form id="scf-form" method="post" style="max-width: 500px;">
        <p><input type="text" name="scf_first_name" placeholder="First Name" required></p>
        <p><input type="text" name="scf_last_name" placeholder="Last Name" required></p>
        <p><input type="email" name="scf_email" placeholder="Email" required></p>
        <p><input type="text" name="scf_phone" placeholder="Phone"></p>
        <p><textarea name="scf_message" placeholder="Your Message" required></textarea></p>
        <p><button type="submit">Send</button></p>
        <div id="scf-message"></div>
    </form>

    <?php
    return ob_get_clean();
}

// Enqueue JavaScript
add_action('wp_enqueue_scripts', 'scf_enqueue_form_script');
function scf_enqueue_form_script() {
    wp_enqueue_script('scf-script', plugin_dir_url(__FILE__) . 'scf.js', ['jquery'], null, true);
    wp_localize_script('scf-script', 'scf_ajax_obj', [
        'ajax_url' => admin_url('admin-ajax.php')
    ]);
}

// Handle AJAX submission
add_action('wp_ajax_scf_handle_form', 'scf_handle_form_submission');
add_action('wp_ajax_nopriv_scf_handle_form', 'scf_handle_form_submission');

function scf_handle_form_submission() {
    $first_name = sanitize_text_field($_POST['first_name']);
    $last_name  = sanitize_text_field($_POST['last_name']);
    $email      = sanitize_email($_POST['email']);
    $phone      = sanitize_text_field($_POST['phone']);
    $message    = sanitize_textarea_field($_POST['message']);

    // Save to CPT UI post type
    wp_insert_post([
        'post_type'    => 'form-submitted', // Make sure CPT slug is correct
        'post_title'   => "$first_name $last_name",
        'post_content' => "Email: $email\nPhone: $phone\nMessage:\n$message",
        'post_status'  => 'publish',
    ]);

    // Send email
    $to = 'alcariajoshua13@gmail.com';
    $subject = 'New Contact Form Submission';
    $body = "Name: $first_name $last_name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
    $headers = ['Content-Type: text/plain; charset=UTF-8'];
    wp_mail($to, $subject, $body, $headers);

    echo '<p style="color:green;">Thank you! Your message has been sent.</p>';
    wp_die();
}





  
