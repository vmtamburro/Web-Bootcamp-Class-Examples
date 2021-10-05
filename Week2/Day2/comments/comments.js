// ==============================
// JS DOC
// ==============================
class circle {
    /**
     * Creates a new Circle from a diameter.
     *
     * @param {number} d The desired diameter of the circle.
     * @return {Circle} The new Circle object.
     */
    static fromDiameter(d) {
        return new Circle(d / 2);
    }

    /**
     * Calculates the circumference of the Circle.
     *
     * @deprecated since 1.1.0; use getCircumference instead
     * @return {number} The circumference of the circle.
     */
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }

    /**
     * Returns the pre-computed circumference of the Circle.
     *
     * @return {number} The circumference of the circle.
     * @since 1.1.0
     */
    getCircumference() {
        return this.circumference;
    }

    /**
     * Find a String representation of the Circle.
     *
     * @override
     * @return {string} Human-readable representation of this Circle.
     */
    toString() {
        return `[A Circle object with radius of ${this.radius}.]`;
    }
}
