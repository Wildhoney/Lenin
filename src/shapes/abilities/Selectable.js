import {squashEvent} from './../utilities/Common';
import {LN_EVT_RESIZABLE_CREATE, LN_EVT_RESIZABLE_DESTROY, LN_EVT_DESELECT_ALL} from './../Events';

/**
 * @module Lenin
 * @submodule Selectable
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Lenin
 */
export default ({ shape, group, collection, emitter, canvas }) => {

    return new class Selectable {

        /**
         * @constructor
         * @return {Selectable}
         */
        constructor() {

            this.selected = false;

            shape.on('click', function onClick() {
                squashEvent(d3.event);
                this.handleSelect();
            }.bind(this));

            emitter.on(LN_EVT_DESELECT_ALL, () => {
                console.log('LN_EVT_DESELECT_ALL');
            });

        }

        /**
         * @method handleSelect
         * @return {void}
         */
        handleSelect() {
            this.setState(!this.selected);
        }

        /**
         * @method setState
         * @param {Boolean} selected
         * @return {void}
         */
        setState(selected) {
            this.selected   = selected;
            const eventName = this.selected ? LN_EVT_RESIZABLE_CREATE : LN_EVT_RESIZABLE_DESTROY;
            emitter.emit(eventName);
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
