// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getElasticIp(args?: GetElasticIpArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticIpResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:index/getElasticIp:getElasticIp", {
        "filters": args.filters,
        "id": args.id,
        "publicIp": args.publicIp,
        "tags": args.tags,
    }, opts);
}

/**
 * A collection of arguments for invoking getElasticIp.
 */
export interface GetElasticIpArgs {
    readonly filters?: { name: string, values: string[] }[];
    readonly id?: string;
    readonly publicIp?: string;
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getElasticIp.
 */
export interface GetElasticIpResult {
    readonly associationId: string;
    readonly domain: string;
    readonly id: string;
    readonly instanceId: string;
    readonly networkInterfaceId: string;
    readonly networkInterfaceOwnerId: string;
    readonly privateIp: string;
    readonly publicIp: string;
    readonly publicIpv4Pool: string;
    readonly tags: {[key: string]: any};
}
