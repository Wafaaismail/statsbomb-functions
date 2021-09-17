import { Suite } from 'benchmark';
import { Summary } from './internal/common-types';
declare type CompleteFn = (summary: Summary) => any;
declare type Complete = (fn?: CompleteFn) => Promise<(suiteObj: Suite) => Suite>;
declare const complete: Complete;
export { complete, Complete };
export default complete;
