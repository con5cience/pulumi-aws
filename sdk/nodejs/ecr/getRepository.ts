// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * The ECR Repository data source allows the ARN, Repository URI and Registry ID to be retrieved for an ECR repository.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const service = pulumi.output(aws.ecr.getRepository({
 *     name: "ecr-repository",
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ecr_repository.html.markdown.
 */
export function getRepository(args: GetRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetRepositoryResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:ecr/getRepository:getRepository", {
        "name": args.name,
        "tags": args.tags,
    }, opts);
}

/**
 * A collection of arguments for invoking getRepository.
 */
export interface GetRepositoryArgs {
    /**
     * The name of the ECR Repository.
     */
    readonly name: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getRepository.
 */
export interface GetRepositoryResult {
    /**
     * Full ARN of the repository.
     */
    readonly arn: string;
    readonly name: string;
    /**
     * The registry ID where the repository was created.
     */
    readonly registryId: string;
    /**
     * The URL of the repository (in the form `aws_account_id.dkr.ecr.region.amazonaws.com/repositoryName`).
     */
    readonly repositoryUrl: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {[key: string]: any};
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
