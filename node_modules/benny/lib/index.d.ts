/// <reference types="benchmark" />
import add from './add';
import complete from './complete';
import cycle from './cycle';
import save from './save';
import suite from './suite';
export { add, complete, cycle, save, suite };
declare const _default: {
    add: import("./add").Add;
    complete: import("./complete").Complete;
    cycle: import("./cycle").Cycle;
    save: import("./save").Save;
    suite: (name: string, ...fns: Promise<import("./add").SkipResult | ((suiteObj: import("benchmark").Suite) => import("benchmark").Suite)>[]) => Promise<import("./internal/common-types").Summary>;
};
export default _default;
