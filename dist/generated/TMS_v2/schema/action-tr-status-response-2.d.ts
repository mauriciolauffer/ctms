import type { ActionStatus } from './action-status';
import type { ActionTREntityStatusResponse2 } from './action-tr-entity-status-response-2';
/**
 * Representation of the 'ActionTRStatusResponse2' schema.
 */
export type ActionTRStatusResponse2 = {
    /**
     * Format: "int64".
     */
    id?: number;
    status?: ActionStatus;
    entities?: ActionTREntityStatusResponse2[];
} & Record<string, any>;
