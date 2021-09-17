import { Suite } from "benchmark";
import { SkipResult } from "./add";
import { Summary } from "./internal/common-types";
declare type RawPartialMethod = (suiteObj: Suite) => Suite;
declare type PartialMethod = Promise<RawPartialMethod | SkipResult>;
declare type SuiteFn = (name: string, ...fns: PartialMethod[]) => Promise<Summary>;
declare const suite: SuiteFn;
export { suite };
export default suite;
