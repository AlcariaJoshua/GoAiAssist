<?php get_header();  

  /**
   * Template Name: Home Page
   */

?>

<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/homepage.css">

<div id="wrapper">

    <section id="mainbannerai" class="global-padding ">
        <div id="bg1"></div>

        <div id="mainbannerai_inside" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">

            <?php echo get_field('home_banner_title') ?>

            <div id="video_box" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">

                <div class="video-con" style="overflow:hidden;position:relative">

                    <div id="video-container">
                        <?php echo get_field('homebanner_video') ?>
                    </div>
                </div>
                <div>
                    <form id="main_form">
                        <strong>CONTACT <span>US</span></strong>
                        <p>If you have any questions or you would like to try our voice AI call, message us.</p>

                        <?php echo get_field('homebanner_contact_form') ?>
                    </form>
                </div>
            </div>

        </div>
    </section>

    <section id="business" class="global-padding">
        <div id="businessinside">
            <div id="businessinsideleft" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                <img src="<?php echo get_field('business_comm_image')?>" class="moving-ai" width="70%" />
            </div>
            <div id="businessinsideright" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                <?php echo get_field('business_communication') ?>
            </div>
        </div>
    </section>

    <section id="members">
        <div id="members_inside">
            <div id="mfirst" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                <?php echo get_field('members_content') ?>
            </div>
            <div>
                <div id="members_list" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                    <ul>
                        <?php

                      // Check rows exists.
                      if (have_rows('members_image')):

                          // Loop through rows.
                          while (have_rows('members_image')):
                              the_row();
                              ?>


                        <li><img src="<?php echo get_sub_field('image') ?>" alt=""></li>


                        <?php

                              // End loop.
                          endwhile;

                          // No value.
                      else:
                          // Do something...
                      endif;
                    ?>
                    </ul>

                </div>
                <span><?php echo get_field('members_image_subtext') ?></span>

            </div>
        </div>
    </section>


    <section id="services">
        <div id="services_inside" uk-scrollspy="cls: uk-animation-fade; repeat: true">
            <?php echo get_field('services_and_features_title') ?>
        </div>
    </section>

    <section id="voiceagents">
        <div id="voiceagentsinside" uk-scrollspy="cls: uk-animation-fade; target: .voicebox;  repeat: true">
            <?php
        if (have_rows('services_and_business_content')):
            $counter = 1; // Initialize counter
            while (have_rows('services_and_business_content')): the_row(); ?>
            <div class="voicebox">
                <div class="voiceboxleft">
                    <div class="voices">
                        <img src="<?php echo esc_url(get_sub_field('background_image')); ?>" class="moving-ai"
                            width="70%" />
                        <div class="audio-container audios" id="audio-<?php echo $counter; ?>">

                            <button class="play-sound buttonp" id="ps<?php echo $counter; ?>">
                                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/play22.webp"
                                    alt="Play" />
                            </button>

                            <button class="stop-sound buttonp" id="ss<?php echo $counter; ?>">
                                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/stop.webp" alt="Stop" />
                            </button>

                            <canvas class="audio-graph" id="canvas<?php echo $counter; ?>"></canvas>
                        </div>
                    </div>
                </div>
                <div class="voiceboxright">
                    <?php echo get_sub_field('text') ?>
                </div>
            </div>
            <?php
            $counter++; // Increment counter
            endwhile;
        else:
            echo '<p>No voice agent content available.</p>';
        endif;
        ?>
        </div>
    </section>



    <section id="conversation">
        <div id="bg2"></div>
        <div id="conversation_inside"
            uk-scrollspy="cls: uk-animation-fade; target: .voices2, #seperate ;  repeat: true">
            <?php echo get_field('conversion_title') ?>
            <div id="conversation_inside_listings">

                <?php

            // Check rows exist.
            if (have_rows('coversion_card')):

                $counter = 1; // Initialize counter

                // Loop through rows.
                while (have_rows('coversion_card')):
                    the_row();

                    // Get the value of the 'id_card' sub field.
                    $id_card = get_sub_field('card_id');

                    if ($id_card === 'separate') : 
                        // Show this special layout when id_card equals 'separate' 
                        ?>
                <div id="separate">
                    <img src="<?php echo get_stylesheet_directory_uri() ?>/images/add.png" alt="Add Icon">
                    <p>More than 1000 lifelike voices in over 30 languages and all diverse accents</p>
                </div>
                <?php
                    else:
                        // Default layout for other cards
                        ?>
                <div>
                    <div class="voices2">
                        <img src="<?php echo esc_url(get_sub_field('image')); ?>" width="100%" />
                        <div class="audio-container2 audios2" id="audioai-<?php echo $counter; ?>">
                            <button class="play-sound2 buttonp" id="ps<?php echo $counter; ?>ai">
                                <img src="<?php echo esc_url(get_stylesheet_directory_uri() . '/images/play22.webp'); ?>"
                                    width="auto" />
                            </button>
                            <button class="stop-sound2 buttonp" id="ss<?php echo $counter; ?>ai" style="display:none;">
                                <img src="<?php echo esc_url(get_stylesheet_directory_uri() . '/images/stop.webp'); ?>"
                                    width="auto" />
                            </button>
                            <canvas class="audio-graph2" id="canvasai<?php echo $counter; ?>"></canvas>
                        </div>
                    </div>
                </div>
                <?php
                    endif;

                    $counter++; // Increment counter

                endwhile;

            else:
                // No rows found.
            endif;
            ?>




            </div>


            <section id="assist">
                <!-- <h2>Benefits of Choosing <span>Go Ai Assist</span></h2> -->

                <div class="assislist">

                    <?php

                  // Check rows exists.
                  if (have_rows('assist_slider')):

                      // Loop through rows.
                      while (have_rows('assist_slider')):
                          the_row();
                          ?>

                    <div class="listbox">
                        <img src="<?php echo get_sub_field('logo') ?>" width="70" />
                        <h4><?php echo get_sub_field('sub_title') ?></h4>
                        <p>
                            <?php echo get_sub_field('text') ?>
                        </p>
                    </div>

                    <?php

                    // End loop.
                    endwhile;

                    // No value.
                    else:
                    // Do something...
                    endif;
                    ?>

                </div>
            </section>
        </div>

    </section>

    <section id="transform">
        <div id="transform_inside" uk-scrollspy="cls: uk-animation-slide-left; target: h2, p; repeat: true">

            <?php echo get_field('transform_workflows_title') ?>

            <div id="transform_inside_grid">
                <div id="transform_inside_grid_left" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                    <?php echo get_field('transform_workflow_content') ?>
                </div>
                <div id="transform_inside_grid_right" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                    <img src=" <?php echo get_field('transform_workflows_image') ?>" alt="">
                </div>
            </div>
        </div>
    </section>

    <section id="automate">
        <?php

          // Check rows exists.
          if (have_rows('automate_services')):

              // Loop through rows.
              while (have_rows('automate_services')):
                  the_row();
                  ?>
        <div class="automate_inside" uk-scrollspy="cls: uk-animation-fade; repeat: true">
            <div class="automate_inside_right">
                <img src="<?php echo get_sub_field('image') ?>" />
            </div>
            <div class="automate_inside_left">
                <?php echo get_sub_field('content') ?>
            </div>

        </div>
        <?php

          // End loop.
          endwhile;

          // No value.
          else:
          // Do something...
          endif;
          ?>



    </section>

    <section id="boxbox">
        <div id="bg22"></div>
        <div id="boxbox_inside">
            <?php echo get_field('optimize_call_title') ?>
            <img src="<?php echo get_field('optimize_call_image') ?>" width="100%" />
        </div>
    </section>

    <section id="collect">
        <div id="collect_inside">
            <div id="collect_inside_left" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">

                <?php echo get_field('customer_feedback_content') ?>
            </div>

            <div id="collect_inside_right" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">

                <?php

              // Check rows exists.
              if (have_rows('customer_feedback_audio')):

                  // Loop through rows.
                  while (have_rows('customer_feedback_audio')):
                      the_row();
                      ?>
                <img src="<?php echo get_sub_field('image') ?>" />
                <?php

                                // End loop.
                            endwhile;

                            // No value.
                        else:
                            // Do something...
                        endif;
                        ?>


            </div>
        </div>
    </section>

    <section id="discover">
        <div id="discover_inside">

            <img src="<?php echo get_stylesheet_directory_uri() ?>/images/getgo.webp?v=7" id="getgo" />
            <a href="">Get Go AI Assist now!</a>
            <span>100% Secure payment</span>
            <img src="<?php echo get_stylesheet_directory_uri() ?>/images/visa.webp?v=8" />


            <div id="realword">Real world use cases</div>
            <h2>Discover how AI voice Agents 
                transform business</h2>
            <p>Experience hands-free phone call handling and improve business operations with our AI-powered phone
                agents</p>

            <div id="listings">
                <?php

              // Check rows exists.
              if (have_rows('ai_voices')):

                $counter = 1;

                  // Loop through rows.
                  while (have_rows('ai_voices')):
                      the_row();
                      ?>
                <div class="lists">
                    <div class="agent_box">
                        <img src="<?php echo get_sub_field('image') ?>" width="30%" />
                        <div class="name-field">
                            <span class="ibcolor1"><?php echo get_sub_field('name') ?></span> <br>
                            <span class="ibcolor2"><?php echo get_sub_field('agent_field') ?></span>
                        </div>


                    </div>
                    <div class="audio-container3 audios3" id="audiob-1">

                        <button class="play-sound3 buttonp" id="psb<?php echo $counter; ?>"><img
                                src="<?php echo get_stylesheet_directory_uri() ?>/images/player.webp"
                                width="auto" /></button>
                        <button class="stop-sound3 buttonp" id="ssb<?php echo $counter; ?>"><img
                                src="<?php echo get_stylesheet_directory_uri() ?>/images/stop.webp"
                                width="auto" /></button>
                        <div class="bg4"></div>
                        <canvas class="audio-graph3 lastone" id="canvasb<?php echo $counter; ?>" style="display:block">


                        </canvas>
                    </div>

                    <p><?php echo get_sub_field('text') ?></p>
                </div>
                <?php

                   $counter++;

                                // End loop.
                            endwhile;

                            // No value.
                        else:
                            // Do something...
                        endif;
                        ?>



            </div>
        </div>
    </section>

    <section id="boxesai">
        <img src="<?php echo get_stylesheet_directory_uri() ?>/images/hand.webp?v=5" width="70%" id="bannermid" />
        <div id="boxesai_inside">
            <?php

            // Check rows exists.
            if (have_rows('ai_can_provide')):

                // Loop through rows.
                while (have_rows('ai_can_provide')):
                    the_row();
                    ?>

            <div>
                <img src="<?php echo get_sub_field('logo') ?>" width="60" />
                <p><?php echo get_sub_field('text') ?></p>
            </div>
            <?php

            // End loop.
            endwhile;

            // No value.
            else:
            // Do something...
            endif;
            ?>
        </div>
    </section>

    <section id="traditional">
        <div id="traditional_inside">
            <div id="traditional_inside_left">
                <?php echo get_field('traditional_agents') ?>
            </div>
            <div id="traditional_inside_right">
                <?php echo get_field('ai_agents') ?>
            </div>
        </div>
    </section>


    <section id="saless">
        <div id="saless_inside">
            <?php echo get_field('traditional_sales_title') ?>

            <div id="video_box2">
                <div id="video-container2">
                    <?php echo get_field('traditional_sales_video') ?>
                </div>
                <!-- <button id="load-video-btn2"><img src="images/play22.webp" width="150" /></button>
                <img src="images/middlebanner.webp" width="100%" id="coverplay2" /> -->
            </div>
        </div>
    </section>



    <section id="questionss" class="global-padding">
      <div id="questionss_inside">
            <h3>Frequently Asked <br /><span>Questions</span></h3>

            <p>Get answers to commonly asked questions about our cutting-edge AI voice call technology & learn how
                our platform revolutionizes customer engagement line never before</p>
        </div>

        <div class="accordion ">
            <?php
              if (have_rows('faqs')):

                  $counter = 1; // Add a counter to ensure unique IDs

                  while (have_rows('faqs')):
                      the_row();
                      $question = get_sub_field('question');
                      $answer = get_sub_field('answer');
                      $accordion_id = 'accordion-item-' . $counter;
                      ?>

                          <div class="accordion-item">
                              <input type="checkbox" id="<?php echo $accordion_id; ?>" hidden />
                              <label for="<?php echo $accordion_id; ?>" class="accordion-label">
                                  <?php echo esc_html($question); ?>
                                  <span class="accordion-icon"></span>
                              </label>
                              <div class="accordion-content">
                                  <p><?php echo esc_html($answer); ?></p>
                              </div>
                          </div>

                          <?php
                      $counter++;
                  endwhile;

              endif;
              ?>



        </div>

      </div>
    </section>





<?php echo get_footer(); ?>