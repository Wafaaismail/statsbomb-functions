"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCaseResult_1 = require("./getCaseResult");
const roundNumbersToDistinctValues = (numbers, precision = 0) => {
    const rounded = numbers.map((num) => {
        return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
    });
    const originalSizeWithoutDuplicates = new Set(numbers).size;
    const roundedSizeWithoutDuplicates = new Set(rounded).size;
    return roundedSizeWithoutDuplicates === originalSizeWithoutDuplicates
        ? rounded
        : roundNumbersToDistinctValues(numbers, precision + 1);
};
const getSummary = (event) => {
    const currentTarget = event.currentTarget;
    const resultsWithoutRoundedOps = Object.entries(currentTarget)
        .filter(([key]) => !Number.isNaN(Number(key)))
        .map(([_, target]) => getCaseResult_1.default(target));
    const roundedOps = roundNumbersToDistinctValues(resultsWithoutRoundedOps.map((result) => result.ops));
    const results = resultsWithoutRoundedOps.map((result, index) => (Object.assign(Object.assign({}, result), { ops: roundedOps[index] })));
    const fastestIndex = results.reduce((prev, next, index) => {
        return next.ops > prev.ops ? { ops: next.ops, index } : prev;
    }, { ops: 0, index: 0 }).index;
    const slowestIndex = results.reduce((prev, next, index) => {
        return next.ops < prev.ops ? { ops: next.ops, index } : prev;
    }, { ops: Infinity, index: 0 }).index;
    const resultsWithDiffs = results.map((result, index) => {
        const percentSlower = index === fastestIndex
            ? 0
            : Number(((1 - result.ops / results[fastestIndex].ops) * 100).toFixed(2));
        return Object.assign(Object.assign({}, result), { percentSlower });
    });
    return {
        name: event.currentTarget.name,
        date: new Date(event.timeStamp),
        results: resultsWithDiffs,
        fastest: {
            name: results[fastestIndex].name,
            index: fastestIndex,
        },
        slowest: {
            name: results[slowestIndex].name,
            index: slowestIndex,
        },
    };
};
exports.default = getSummary;
