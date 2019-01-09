// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export function getTargetGroup(args?: GetTargetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetTargetGroupResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:elasticloadbalancingv2/getTargetGroup:getTargetGroup", {
        "arn": args.arn,
        "name": args.name,
        "tags": args.tags,
    }, opts);
}

/**
 * A collection of arguments for invoking getTargetGroup.
 */
export interface GetTargetGroupArgs {
    readonly arn?: string;
    readonly name?: string;
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getTargetGroup.
 */
export interface GetTargetGroupResult {
    readonly arn: string;
    readonly arnSuffix: string;
    readonly deregistrationDelay: number;
    readonly healthCheck: { healthyThreshold: number, interval: number, matcher: string, path: string, port: string, protocol: string, timeout: number, unhealthyThreshold: number };
    readonly name: string;
    readonly port: number;
    readonly protocol: string;
    readonly slowStart: number;
    readonly stickiness: { cookieDuration: number, enabled: boolean, type: string };
    readonly tags: {[key: string]: any};
    readonly vpcId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
