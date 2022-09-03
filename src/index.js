import {
    registerBlockType,
} from '@wordpress/blocks';
import {
    useBlockProps,
} from '@wordpress/block-editor';

registerBlockType( 'test/variation-bug', {
    edit: (props) => {
        const blockProps = useBlockProps(),
            isVariation = props.attributes.isVariation;
        return (
            <div { ...blockProps }>
                { isVariation ? 'Variation!' : 'Default' }
            </div>
        )
    }
} );
