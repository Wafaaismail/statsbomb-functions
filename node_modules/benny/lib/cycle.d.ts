import { Suite } from 'benchmark';
import { CaseResult, Summary } from './internal/common-types';
declare type CycleFn = (result: CaseResult, summary: Summary) => any;
declare type Cycle = (fn?: CycleFn) => Promise<(suiteObj: Suite) => Suite>;
declare const cycle: Cycle;
export { cycle, Cycle };
export default cycle;
