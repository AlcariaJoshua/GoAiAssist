<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Go AI Assist</title>
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?> /slick/slick.css" />

    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/slick/slick-theme.css" />


    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/header.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/global.css">

    <!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.23.8/dist/css/uikit.min.css" />

    <?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <header>
        <div class="wrapper">
            <div class="content">
                <div class="logo">
                    <a href="<?php echo get_home_url() ?>/">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/goaiassitlogo.webp"
                            alt="Go Ai Assist">
                    </a>
                </div>

                <div class="hamburger-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                <nav id="nav-container" >
                    

                    <div id="aiagent_desktop">
                        <script src="https://api.callfluent.ai/embed/inbound.js?id=3762"></script>
                    </div>
                    <?php
							wp_nav_menu(
								array(
									'menu' => 'GoAiAssist Menu', // The name or slug of the menu you want to display
									'menu_class' => 'navbar-nav', // Class for the ul element
									'container' => 'div', // The container element (can also be 'nav')
									'container_class' => 'navbar-container', // Class for the container element
									'container_id' => 'main-menu-container', // Optional ID for the container element
								)
							);
						?>
                </nav>

            </div>
        </div>
    </header>