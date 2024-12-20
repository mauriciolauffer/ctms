"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportUploadApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ExportUploadApi'.
 * This API is part of the 'TMS_v2' service.
 */
exports.ExportUploadApi = {
    /**
     * Creates a transport request containing (multiple) file or application-specific references.  The export node is identified by its name. The transport request is added to the queues of the follow-on nodes of export node.
     * @param body - Request body
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    nodeExportByNameV2: (body) => new openapi_1.OpenApiRequestBuilder('post', '/nodes/export', {
        body
    }),
    /**
     * Creates a transport request with content specified by the File Upload operation or a by an application-specific reference.  The upload node is identified by its name. The transport request is added to the queue of the upload node.
     * @param body - Request body
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    nodeUploadByNameV2: (body) => new openapi_1.OpenApiRequestBuilder('post', '/nodes/upload', {
        body
    })
};
//# sourceMappingURL=export-upload-api.js.map