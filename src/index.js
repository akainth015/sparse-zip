/**
 * Merges two mis-aligned arrays together with a predicate
 * @template T, U
 * @param {[T]} sparseList the longer array with values that produce mis-alignment
 * @param {[U]} toMerge the array that will be "spread out" to match sparseList
 * @param {function(T, U): boolean} predicate a function that returns true when the two parameters align.
 * Typically, just the first parameter is sufficient to determine this.
 * @returns {[[T|U]]} the arrays aligned and corresponding values zipped together in a nested array,
 * with nulls where there is no corresponding value in toMerge
 */
function sparseZip(sparseList, toMerge, predicate) {
    let mergeListIdx = 0;
    return sparseList.map(item => [
        item,
        predicate(item, toMerge[mergeListIdx])
            ? toMerge[mergeListIdx++] : null
    ]);
}

exports.sparseZip = sparseZip