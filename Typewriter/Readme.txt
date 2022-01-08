Paste the typewriter.js file in the js folder

and copy this shortcode in inc/func_shortcodes






/*///////////////////////////////////////////////
//
TYPEWRITTER
//
///////////////////////////////////////////////*/
function typewriter_func($atts, $content=null){
	$a = shortcode_atts( array(
		'sentences' =>'',
        'speed' => '',
    ), $atts);
    $handle = 'typewriter_effect';
    $id = 'word_changer_'.$rand;
    wp_enqueue_script( 'typewriter_effect', get_template_directory_uri() . '/js/typewriter.js', array('jquery'), false,false );
        $passedValues = array( 'sentences' => $a['sentences'], 'speed' => $a['speed'] );
        wp_localize_script( 'typewriter_effect', 'passed_object', $passedValues );
    return '<span class="typewriter_wrapper"></span>';
}
add_shortcode('typewriter','typewriter_func');