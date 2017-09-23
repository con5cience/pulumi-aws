// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an AWS Config Configuration Recorder. Please note that this resource **does not start** the created recorder automatically.
 * 
 * ~> **Note:** _Starting_ the Configuration Recorder requires a [delivery channel](/docs/providers/aws/r/config_delivery_channel.html) (while delivery channel creation requires Configuration Recorder). This is why [`aws_config_configuration_recorder_status`](/docs/providers/aws/r/config_configuration_recorder_status.html) is a separate resource.
 */
export class Recorder extends pulumi.Resource {
    /**
     * The name of the recorder. Defaults to `default`. Changing it recreates the resource.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * Recording group - see below.
     */
    public readonly recordingGroup: pulumi.Computed<{ allSupported?: boolean, includeGlobalResourceTypes?: boolean, resourceTypes?: string[] }[]>;
    /**
     * Amazon Resource Name (ARN) of the IAM role.
     * used to make read or write requests to the delivery channel and to describe the AWS resources associated with the account.
     * See [AWS Docs](http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) for more details.
     */
    public readonly roleArn: pulumi.Computed<string>;

    /**
     * Create a Recorder resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Recorder instance
     * @param args A collection of arguments for creating this Recorder intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: RecorderArgs, dependsOn?: pulumi.Resource[]) {
        if (args.roleArn === undefined) {
            throw new Error("Missing required property 'roleArn'");
        }
        super("aws:cfg/recorder:Recorder", urnName, {
            "name": args.name,
            "recordingGroup": args.recordingGroup,
            "roleArn": args.roleArn,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Recorder resource.
 */
export interface RecorderArgs {
    /**
     * The name of the recorder. Defaults to `default`. Changing it recreates the resource.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * Recording group - see below.
     */
    readonly recordingGroup?: pulumi.ComputedValue<{ allSupported?: pulumi.ComputedValue<boolean>, includeGlobalResourceTypes?: pulumi.ComputedValue<boolean>, resourceTypes?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[] }>[];
    /**
     * Amazon Resource Name (ARN) of the IAM role.
     * used to make read or write requests to the delivery channel and to describe the AWS resources associated with the account.
     * See [AWS Docs](http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) for more details.
     */
    readonly roleArn: pulumi.ComputedValue<string>;
}

