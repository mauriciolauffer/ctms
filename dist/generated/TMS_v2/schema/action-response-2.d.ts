import type { TransportActionType } from './transport-action-type';
import type { ActionStatus } from './action-status';
import type { ActionTRStatusResponse2 } from './action-tr-status-response-2';
/**
 * Representation of the 'ActionResponse2' schema.
 * @example {
 *   "id": 43,
 *   "type": "I",
 *   "status": "succeeded",
 *   "startedAt": "2019-05-07T06:40:48.0725+0000",
 *   "endedAt": "2019-05-07T06:40:54.0971+0000",
 *   "triggeredBy": "d7ad0010-09a7-4916-be8d-1166c653e0c7",
 *   "triggeredByNamedUser": "d012345",
 *   "nodeName": "SRC_NODE_350",
 *   "transportRequests": [
 *     {
 *       "id": 30,
 *       "status": "succeeded",
 *       "entities": [
 *         {
 *           "id": 32,
 *           "fileName": "file1.zip",
 *           "uri": "15",
 *           "status": "succeeded"
 *         },
 *         {
 *           "id": 31,
 *           "fileName": "file2.zip",
 *           "uri": "10",
 *           "status": "succeeded"
 *         }
 *       ]
 *     },
 *     {
 *       "id": 37,
 *       "status": "succeeded",
 *       "entities": [
 *         {
 *           "id": 38,
 *           "fileName": "file3.zip",
 *           "uri": "20",
 *           "status": "succeeded"
 *         },
 *         {
 *           "id": 39,
 *           "fileName": "file4.zip",
 *           "uri": "25",
 *           "status": "succeeded"
 *         }
 *       ]
 *     }
 *   ]
 * }
 */
export type ActionResponse2 = {
    /**
     * Format: "int64".
     */
    id?: number;
    type?: TransportActionType;
    status?: ActionStatus;
    /**
     * Format: "date-time".
     */
    startedAt?: string;
    /**
     * Format: "date-time".
     */
    endedAt?: string;
    triggeredBy?: string;
    triggeredByNamedUser?: string;
    nodeName?: string;
    transportRequests?: ActionTRStatusResponse2[];
} & Record<string, any>;