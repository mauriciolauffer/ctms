import type { PathLike } from "node:fs";
import type { HttpDestinationOrFetchOptions } from "@sap-cloud-sdk/connectivity";
import type { NodeExportBodyEntityName } from "../generated/TMS_v2/index";
export type CtmsAuth = {
    tokenServiceUrl: HttpDestinationOrFetchOptions["tokenServiceUrl"];
    clientId: HttpDestinationOrFetchOptions["clientId"];
    clientSecret: HttpDestinationOrFetchOptions["clientSecret"];
};
export type CtmsParams = {
    apiUrl: HttpDestinationOrFetchOptions["url"];
    nodeName: NodeExportBodyEntityName["nodeName"];
    filePath: PathLike;
};
export type CtmsTransportRequest = {
    description: NodeExportBodyEntityName["description"];
    contentType: NodeExportBodyEntityName["contentType"];
    storageType: NodeExportBodyEntityName["storageType"];
    username: NodeExportBodyEntityName["namedUser"];
};
