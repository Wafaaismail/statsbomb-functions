"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.suite = void 0;
const composition_1 = require("@arrows/composition");
const benchmark_1 = require("benchmark");
const kleur = require("kleur");
const getSummary_1 = require("./internal/getSummary");
const suite = (name, ...fns) => __awaiter(void 0, void 0, void 0, function* () {
    const unpackedFns = yield Promise.all([...fns]);
    const suiteObj = new benchmark_1.Suite(name).on("start", () => {
        console.log(kleur.blue(`Running "${name}" suite...`));
    });
    const hasOnly = unpackedFns.filter((fn) => fn.name === "only").length > 0;
    const items = (hasOnly
        ? unpackedFns.filter((fn) => fn.name !== "add" && fn.name !== "skip")
        : unpackedFns.filter((fn) => fn.name !== "skip"));
    return new Promise((resolve, reject) => {
        composition_1.pipe(...items)(suiteObj)
            .on("complete", (event) => resolve(getSummary_1.default(event)))
            .on("error", reject)
            .run();
    });
});
exports.suite = suite;
exports.default = suite;
