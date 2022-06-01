import { isArray } from 'lodash'
/**
 * Check the type of the error and return error in string
 *
 * @param err
 * @returns string
 */
export const extractErrorMsg = (err: any) => {
  if (typeof err === 'string') {
    return err
  }
  if (err?.message && isArray(err.message)) {
    return err.message.join('\n')
  }
  return err.message
}
