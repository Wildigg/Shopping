"use strict";

const EmptyCartException = require("../Cart/EmptyCartException.js");
const UpdateCartException = require("../Cart/UpdateCartException.js");

module.exports = class CartItem {

    //region private attributes
    #items;
    //endregion private attributes

    //region public methods
    constructor(items) {
        this.#items = items
    }

    get items() {
        if (this.#items == null) {
            throw new EmptyCartException();
        }

        return this.#items
    }

    get total() {
        let totalPrice = 0

        for (let item of this.items) {
            totalPrice += item.total
        }

        return totalPrice
    }

    count(distinct = false) {
        if (this.#items == null) {
            throw new EmptyCartException();
        }

        let totalQuantity = 0

        if (distinct) {
            totalQuantity =  this.#items.length
        } else {
            for (let item of this.items) {
                totalQuantity += item.quantity
            }
        }

        return totalQuantity
    }

    add(item) {
        if (item == null) {
            throw new UpdateCartException();
        }

        if (this.#items == null) {
            this.#items = item
        } else {
            // This part isn't in coverage. Test could work without but in a real case this should be needed
            this.#items = this.#items.concat(item)
        }
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}
