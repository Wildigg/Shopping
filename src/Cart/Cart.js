"use strict";

const EmptyCartException = require("../Cart/EmptyCartException.js");
const UpdateCartException = require("../Cart/UpdateCartException.js");

module.exports = class CartItem {

    //region private attributes
    #items;
    //endregion private attributes

    //region public methods
    constructor(items) {
        this.items = items
    }

    get items() {
        if (this.#items == null) {
            throw new EmptyCartException();
        }

        return this.#items
    }

    set items(value) {
        this.#items = value
    }

    get total() {
        let total = 0

        for (let item of this.items) {
            total += item.total
        }

        return total
    }

    add(value) {
        if (value == null) {
            throw new UpdateCartException();
        }

        if (this.#items == null) {
            this.#items = value
        } else {
            this.#items = this.#items.concat(value)
        }
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



