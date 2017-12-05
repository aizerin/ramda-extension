import { o, not } from 'ramda';

/* eslint-disable max-len */
/**
 * Return negation of native isNaN function.
 * @func
 * @category Logic
 *
 * @example
 *
 * 		notNaN(0)			// true
 * 		notNaN('')			// true
 * 		notNaN([])			// true
 * 		notNaN(null)		// true
 * 		notNaN({})			// false
 * 		notNaN(NaN)			// false
 * 		notNaN(undefined)	// false
 *
 * @see http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
 *
 * @sig a -> Boolean
 */
const notNan = o(not, isNaN);
export default notNan;
/* eslint-enable max-len */
