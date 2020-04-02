import { computeValue } from '../../core'

/**
 * Returns the first value in a group.
 *
 * @param collection
 * @param expr
 * @returns {*}
 */
export function $first(collection: any[], expr: any): any {
  return collection.length > 0 ? computeValue(collection[0], expr) : undefined
}