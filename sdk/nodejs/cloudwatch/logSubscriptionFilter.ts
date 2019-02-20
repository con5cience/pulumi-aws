// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {LogGroup} from "./logGroup";

/**
 * Provides a CloudWatch Logs subscription filter resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const testLambdafunctionLogfilter = new aws.cloudwatch.LogSubscriptionFilter("test_lambdafunction_logfilter", {
 *     destinationArn: aws_kinesis_stream_test_logstream.arn,
 *     distribution: "Random",
 *     filterPattern: "logtype test",
 *     logGroup: "/aws/lambda/example_lambda_name",
 *     name: "test_lambdafunction_logfilter",
 *     roleArn: aws_iam_role_iam_for_lambda.arn,
 * });
 * ```
 */
export class LogSubscriptionFilter extends pulumi.CustomResource {
    /**
     * Get an existing LogSubscriptionFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogSubscriptionFilterState, opts?: pulumi.CustomResourceOptions): LogSubscriptionFilter {
        return new LogSubscriptionFilter(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN of the destination to deliver matching log events to. Kinesis stream or Lambda function ARN.
     */
    public readonly destinationArn: pulumi.Output<string>;
    /**
     * The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream. Valid values are "Random" and "ByLogStream".
     */
    public readonly distribution: pulumi.Output<string | undefined>;
    /**
     * A valid CloudWatch Logs filter pattern for subscribing to a filtered stream of log events.
     */
    public readonly filterPattern: pulumi.Output<string>;
    /**
     * The name of the log group to associate the subscription filter with
     */
    public readonly logGroup: pulumi.Output<LogGroup>;
    /**
     * A name for the subscription filter
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to deliver ingested log events to the destination. If you use Lambda as a destination, you should skip this argument and use `aws_lambda_permission` resource for granting access from CloudWatch logs to the destination Lambda function. 
     */
    public readonly roleArn: pulumi.Output<string>;

    /**
     * Create a LogSubscriptionFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogSubscriptionFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogSubscriptionFilterArgs | LogSubscriptionFilterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: LogSubscriptionFilterState = argsOrState as LogSubscriptionFilterState | undefined;
            inputs["destinationArn"] = state ? state.destinationArn : undefined;
            inputs["distribution"] = state ? state.distribution : undefined;
            inputs["filterPattern"] = state ? state.filterPattern : undefined;
            inputs["logGroup"] = state ? state.logGroup : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["roleArn"] = state ? state.roleArn : undefined;
        } else {
            const args = argsOrState as LogSubscriptionFilterArgs | undefined;
            if (!args || args.destinationArn === undefined) {
                throw new Error("Missing required property 'destinationArn'");
            }
            if (!args || args.filterPattern === undefined) {
                throw new Error("Missing required property 'filterPattern'");
            }
            if (!args || args.logGroup === undefined) {
                throw new Error("Missing required property 'logGroup'");
            }
            inputs["destinationArn"] = args ? args.destinationArn : undefined;
            inputs["distribution"] = args ? args.distribution : undefined;
            inputs["filterPattern"] = args ? args.filterPattern : undefined;
            inputs["logGroup"] = args ? args.logGroup : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["roleArn"] = args ? args.roleArn : undefined;
        }
        super("aws:cloudwatch/logSubscriptionFilter:LogSubscriptionFilter", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LogSubscriptionFilter resources.
 */
export interface LogSubscriptionFilterState {
    /**
     * The ARN of the destination to deliver matching log events to. Kinesis stream or Lambda function ARN.
     */
    readonly destinationArn?: pulumi.Input<string>;
    /**
     * The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream. Valid values are "Random" and "ByLogStream".
     */
    readonly distribution?: pulumi.Input<string>;
    /**
     * A valid CloudWatch Logs filter pattern for subscribing to a filtered stream of log events.
     */
    readonly filterPattern?: pulumi.Input<string>;
    /**
     * The name of the log group to associate the subscription filter with
     */
    readonly logGroup?: pulumi.Input<LogGroup>;
    /**
     * A name for the subscription filter
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to deliver ingested log events to the destination. If you use Lambda as a destination, you should skip this argument and use `aws_lambda_permission` resource for granting access from CloudWatch logs to the destination Lambda function. 
     */
    readonly roleArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogSubscriptionFilter resource.
 */
export interface LogSubscriptionFilterArgs {
    /**
     * The ARN of the destination to deliver matching log events to. Kinesis stream or Lambda function ARN.
     */
    readonly destinationArn: pulumi.Input<string>;
    /**
     * The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream. Valid values are "Random" and "ByLogStream".
     */
    readonly distribution?: pulumi.Input<string>;
    /**
     * A valid CloudWatch Logs filter pattern for subscribing to a filtered stream of log events.
     */
    readonly filterPattern: pulumi.Input<string>;
    /**
     * The name of the log group to associate the subscription filter with
     */
    readonly logGroup: pulumi.Input<LogGroup>;
    /**
     * A name for the subscription filter
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to deliver ingested log events to the destination. If you use Lambda as a destination, you should skip this argument and use `aws_lambda_permission` resource for granting access from CloudWatch logs to the destination Lambda function. 
     */
    readonly roleArn?: pulumi.Input<string>;
}

/**
 * The live LogSubscriptionFilter resource.
 */
export interface LogSubscriptionFilterResult {
    /**
     * The ARN of the destination to deliver matching log events to. Kinesis stream or Lambda function ARN.
     */
    readonly destinationArn: string;
    /**
     * The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream. Valid values are "Random" and "ByLogStream".
     */
    readonly distribution?: string;
    /**
     * A valid CloudWatch Logs filter pattern for subscribing to a filtered stream of log events.
     */
    readonly filterPattern: string;
    /**
     * The name of the log group to associate the subscription filter with
     */
    readonly logGroup: LogGroup;
    /**
     * A name for the subscription filter
     */
    readonly name: string;
    /**
     * The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to deliver ingested log events to the destination. If you use Lambda as a destination, you should skip this argument and use `aws_lambda_permission` resource for granting access from CloudWatch logs to the destination Lambda function. 
     */
    readonly roleArn: string;
}
