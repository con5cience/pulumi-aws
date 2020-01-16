// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * The ECS Cluster data source allows access to details of a specific
 * cluster within an AWS ECS service.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const ecsMongo = aws.ecs.getCluster({
 *     clusterName: "ecs-mongo-production",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ecs_cluster.html.markdown.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:ecs/getCluster:getCluster", {
        "clusterName": args.clusterName,
    }, opts);
}

/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterArgs {
    /**
     * The name of the ECS Cluster
     */
    readonly clusterName: string;
}

/**
 * A collection of values returned by getCluster.
 */
export interface GetClusterResult {
    /**
     * The ARN of the ECS Cluster
     */
    readonly arn: string;
    readonly clusterName: string;
    /**
     * The number of pending tasks for the ECS Cluster
     */
    readonly pendingTasksCount: number;
    /**
     * The number of registered container instances for the ECS Cluster
     */
    readonly registeredContainerInstancesCount: number;
    /**
     * The number of running tasks for the ECS Cluster
     */
    readonly runningTasksCount: number;
    /**
     * The settings associated with the ECS Cluster.
     */
    readonly settings: outputs.ecs.GetClusterSetting[];
    /**
     * The status of the ECS Cluster
     */
    readonly status: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
