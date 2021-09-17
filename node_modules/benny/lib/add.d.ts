import { Suite } from 'benchmark';
import { Options } from './internal/common-types';
declare type SkipResult = {
    name: 'skip';
};
declare type Test = () => any | Test;
declare type Add = {
    (caseName: string, test: Test, options?: Options): Promise<(suiteObj: Suite) => Suite>;
    only: (caseName: string, test: Test, options?: Options) => Promise<(suiteObj: Suite) => Suite>;
    skip: (...args: any[]) => Promise<SkipResult>;
};
declare const add: Add;
export { add, Add, SkipResult };
export default add;
