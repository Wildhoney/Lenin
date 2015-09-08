import {LN_EVT_RESIZABLE} from './../Events';

/**
 * @module Lenin
 * @submodule Selectable
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default ({ shape, group, collection, emitter }) => {

    return new class Selectable {

        /**
         * @constructor
         * @return {Selectable}
         */
        constructor() {
            this.selected = false;
            shape.on('click', this.handleSelect.bind(this));
        }

        /**
         * @method handleSelect
         * @return {void}
         */
        handleSelect() {
            this.selected = !this.selected;
            emitter.emit(LN_EVT_RESIZABLE);
        }

        /**
         * @method isSelected
         * @return {Boolean}
         */
        isSelected() {
            return this.selected;
        }

    };

};
