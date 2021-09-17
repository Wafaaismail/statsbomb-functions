import { Event } from 'benchmark';
import { Summary } from './common-types';
declare type GetSummary = (event: Event) => Summary;
declare const getSummary: GetSummary;
export default getSummary;
