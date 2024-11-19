/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'TransportRequestsBodyEntity2' schema.
 * @example {
 *   "namedUser": "d012345",
 *   "transportRequests": [
 *     155,
 *     166
 *   ]
 * }
 */
export type TransportRequestsBodyEntity2 = {
  /**
   * Max Length: 60.
   */
  namedUser?: string;
  transportRequests: number[];
} & Record<string, any>;