/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ExportQueueEntryInfo' schema.
 */
export type ExportQueueEntryInfo = {
  /**
   * ID of node where content was put in
   * Format: "int64".
   */
  nodeId: number;
  /**
   * Name of node where content was put in
   */
  nodeName: string;
  /**
   * Format: "int64".
   */
  queueId: number;
} & Record<string, any>;