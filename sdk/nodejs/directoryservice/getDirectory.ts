// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Get attributes of AWS Directory Service directory (SimpleAD, Managed AD, AD Connector). It's especially useful to refer AWS Managed AD or on-premise AD in AD Connector configuration. 
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = aws_directory_service_directory_main.id.apply(id => aws.directoryservice.getDirectory({
 *     directoryId: id,
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/directory_service_directory.html.markdown.
 */
export function getDirectory(args: GetDirectoryArgs, opts?: pulumi.InvokeOptions): Promise<GetDirectoryResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:directoryservice/getDirectory:getDirectory", {
        "directoryId": args.directoryId,
        "tags": args.tags,
    }, opts);
}

/**
 * A collection of arguments for invoking getDirectory.
 */
export interface GetDirectoryArgs {
    /**
     * The ID of the directory.
     */
    readonly directoryId: string;
    /**
     * A mapping of tags assigned to the directory/connector.
     */
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getDirectory.
 */
export interface GetDirectoryResult {
    /**
     * The access URL for the directory/connector, such as http://alias.awsapps.com.
     */
    readonly accessUrl: string;
    /**
     * The alias for the directory/connector, such as `d-991708b282.awsapps.com`.
     */
    readonly alias: string;
    readonly connectSettings: outputs.directoryservice.GetDirectoryConnectSetting[];
    /**
     * A textual description for the directory/connector.
     */
    readonly description: string;
    readonly directoryId: string;
    /**
     * A list of IP addresses of the DNS servers for the directory/connector.
     */
    readonly dnsIpAddresses: string[];
    /**
     * (for `MicrosoftAD`) The Microsoft AD edition (`Standard` or `Enterprise`).
     */
    readonly edition: string;
    /**
     * The directory/connector single-sign on status.
     */
    readonly enableSso: boolean;
    /**
     * The fully qualified name for the directory/connector.
     */
    readonly name: string;
    /**
     * The ID of the security group created by the directory/connector.
     */
    readonly securityGroupId: string;
    /**
     * The short name of the directory/connector, such as `CORP`.
     */
    readonly shortName: string;
    /**
     * (for `SimpleAD` and `ADConnector`) The size of the directory/connector (`Small` or `Large`).
     */
    readonly size: string;
    /**
     * A mapping of tags assigned to the directory/connector.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The directory type (`SimpleAD`, `ADConnector` or `MicrosoftAD`).
     */
    readonly type: string;
    readonly vpcSettings: outputs.directoryservice.GetDirectoryVpcSetting[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
