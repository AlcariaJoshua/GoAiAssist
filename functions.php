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






  
