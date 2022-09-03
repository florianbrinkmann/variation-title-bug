<?php
/**
 * Plugin name: Block variation title bug
 */

add_action(
    'init',
    function() {
        register_block_type( __DIR__ .'/build', [
            'render_callback' => function() {
                return 'Test output';
            }
        ] );
    }
);