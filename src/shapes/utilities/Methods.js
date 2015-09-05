/**
 * @module Lenin
 * @submodule Methods
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default function methods({ shape, group, collection }) {

    return {

        /**
         * @method remove
         * @return {void}
         */
        remove: function() {
            group.remove();
        }

    }

}