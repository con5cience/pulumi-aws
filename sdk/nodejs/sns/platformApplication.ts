// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class PlatformApplication extends pulumi.CustomResource {
    /**
     * Get an existing PlatformApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PlatformApplicationState, opts?: pulumi.CustomResourceOptions): PlatformApplication {
        return new PlatformApplication(name, <any>state, { ...opts, id: id });
    }

    public /*out*/ readonly arn: pulumi.Output<string>;
    public readonly eventDeliveryFailureTopicArn: pulumi.Output<string | undefined>;
    public readonly eventEndpointCreatedTopicArn: pulumi.Output<string | undefined>;
    public readonly eventEndpointDeletedTopicArn: pulumi.Output<string | undefined>;
    public readonly eventEndpointUpdatedTopicArn: pulumi.Output<string | undefined>;
    public readonly failureFeedbackRoleArn: pulumi.Output<string | undefined>;
    public readonly name: pulumi.Output<string>;
    public readonly platform: pulumi.Output<string>;
    public readonly platformCredential: pulumi.Output<string>;
    public readonly platformPrincipal: pulumi.Output<string | undefined>;
    public readonly successFeedbackRoleArn: pulumi.Output<string | undefined>;
    public readonly successFeedbackSampleRate: pulumi.Output<string | undefined>;

    /**
     * Create a PlatformApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlatformApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PlatformApplicationArgs | PlatformApplicationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: PlatformApplicationState = argsOrState as PlatformApplicationState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["eventDeliveryFailureTopicArn"] = state ? state.eventDeliveryFailureTopicArn : undefined;
            inputs["eventEndpointCreatedTopicArn"] = state ? state.eventEndpointCreatedTopicArn : undefined;
            inputs["eventEndpointDeletedTopicArn"] = state ? state.eventEndpointDeletedTopicArn : undefined;
            inputs["eventEndpointUpdatedTopicArn"] = state ? state.eventEndpointUpdatedTopicArn : undefined;
            inputs["failureFeedbackRoleArn"] = state ? state.failureFeedbackRoleArn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["platform"] = state ? state.platform : undefined;
            inputs["platformCredential"] = state ? state.platformCredential : undefined;
            inputs["platformPrincipal"] = state ? state.platformPrincipal : undefined;
            inputs["successFeedbackRoleArn"] = state ? state.successFeedbackRoleArn : undefined;
            inputs["successFeedbackSampleRate"] = state ? state.successFeedbackSampleRate : undefined;
        } else {
            const args = argsOrState as PlatformApplicationArgs | undefined;
            if (!args || args.platform === undefined) {
                throw new Error("Missing required property 'platform'");
            }
            if (!args || args.platformCredential === undefined) {
                throw new Error("Missing required property 'platformCredential'");
            }
            inputs["eventDeliveryFailureTopicArn"] = args ? args.eventDeliveryFailureTopicArn : undefined;
            inputs["eventEndpointCreatedTopicArn"] = args ? args.eventEndpointCreatedTopicArn : undefined;
            inputs["eventEndpointDeletedTopicArn"] = args ? args.eventEndpointDeletedTopicArn : undefined;
            inputs["eventEndpointUpdatedTopicArn"] = args ? args.eventEndpointUpdatedTopicArn : undefined;
            inputs["failureFeedbackRoleArn"] = args ? args.failureFeedbackRoleArn : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["platform"] = args ? args.platform : undefined;
            inputs["platformCredential"] = args ? args.platformCredential : undefined;
            inputs["platformPrincipal"] = args ? args.platformPrincipal : undefined;
            inputs["successFeedbackRoleArn"] = args ? args.successFeedbackRoleArn : undefined;
            inputs["successFeedbackSampleRate"] = args ? args.successFeedbackSampleRate : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:sns/platformApplication:PlatformApplication", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PlatformApplication resources.
 */
export interface PlatformApplicationState {
    readonly arn?: pulumi.Input<string>;
    readonly eventDeliveryFailureTopicArn?: pulumi.Input<string>;
    readonly eventEndpointCreatedTopicArn?: pulumi.Input<string>;
    readonly eventEndpointDeletedTopicArn?: pulumi.Input<string>;
    readonly eventEndpointUpdatedTopicArn?: pulumi.Input<string>;
    readonly failureFeedbackRoleArn?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly platform?: pulumi.Input<string>;
    readonly platformCredential?: pulumi.Input<string>;
    readonly platformPrincipal?: pulumi.Input<string>;
    readonly successFeedbackRoleArn?: pulumi.Input<string>;
    readonly successFeedbackSampleRate?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PlatformApplication resource.
 */
export interface PlatformApplicationArgs {
    readonly eventDeliveryFailureTopicArn?: pulumi.Input<string>;
    readonly eventEndpointCreatedTopicArn?: pulumi.Input<string>;
    readonly eventEndpointDeletedTopicArn?: pulumi.Input<string>;
    readonly eventEndpointUpdatedTopicArn?: pulumi.Input<string>;
    readonly failureFeedbackRoleArn?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly platform: pulumi.Input<string>;
    readonly platformCredential: pulumi.Input<string>;
    readonly platformPrincipal?: pulumi.Input<string>;
    readonly successFeedbackRoleArn?: pulumi.Input<string>;
    readonly successFeedbackSampleRate?: pulumi.Input<string>;
}
