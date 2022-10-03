/**
 *
 * @description
 * Objects that represent finished queries are sent
 * to this type of object for further processing.
 * 
 * @interface IQueryResultProcessor
 */
 export default interface IQueryResultProcessor {
    processQueryResult( _event: any, result: any ): void; }
