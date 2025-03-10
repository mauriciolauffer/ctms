import type { TransportActionType } from './transport-action-type';
import type { LogEntityResponse2 } from './log-entity-response-2';
import type { LogMessageResponse2 } from './log-message-response-2';
import type { ActionStatus } from './action-status';
/**
 * Representation of the 'TrLogResponse2' schema.
 */
export type TrLogResponse2 = {
    /**
     * Format: "int64".
     */
    actionId?: number;
    /**
     * Format: "date-time".
     */
    actionStartedAt?: string;
    actionTriggeredBy?: string;
    actionTriggeredByNamedUser?: string;
    actionType?: TransportActionType;
    entities?: LogEntityResponse2[];
    messages?: LogMessageResponse2[];
    status?: ActionStatus;
} & Record<string, any>;
