import {squashEvent} from './../utilities/Common';
import {LN_EVT_RESIZABLE_CREATE, LN_EVT_RESIZABLE_DESTROY, LN_EVT_DESELECT_ALL} from './../Events';

/**
 * @module Lenin
 * @submodule Selectable
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default ({ shape, collection, emitter }) => {

    return new class Selectable {

        /**
         * @constructor
         * @return {Selectable}
         */
        constructor() {

            /**
             * @property selected
             * @type {Boolean}
             */
            this.selected = false;

            shape.on('click', function onClick() {
                squashEvent(d3.event);
                this.setState(!this.selected);
            }.bind(this));

            // Invoked when the user clicks on the canvas to deselect all shapes.
            emitter.on(LN_EVT_DESELECT_ALL, () => this.setState(false));

        }

        /**
         * @method setState
         * @param {Boolean} selected
         * @return {void}
         */
        setState(selected) {
            const method = selected ? this.setSelected : this.setDeselected;
            method.apply(this);
        }

        /**
         * @method setSelected
         * @return {void}
         */
        setSelected() {
            this.selected = true;
            emitter.emit(LN_EVT_RESIZABLE_CREATE);
        }

        /**
         * @method setDeselected
         * @return {void}
         */
        setDeselected() {
            this.selected = false;
            emitter.emit(LN_EVT_RESIZABLE_DESTROY);
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
