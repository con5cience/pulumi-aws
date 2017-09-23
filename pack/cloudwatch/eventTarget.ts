// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a CloudWatch Event Target resource.
 */
export class EventTarget extends pulumi.Resource {
    /**
     * The Amazon Resource Name (ARN) associated of the target.
     */
    public readonly arn: pulumi.Computed<string>;
    /**
     * Parameters used when you are using the rule to invoke Amazon ECS Task. Documented below. A maximum of 1 are allowed.
     */
    public readonly ecsTarget?: pulumi.Computed<{ taskCount?: number, taskDefinitionArn: string }[]>;
    /**
     * Valid JSON text passed to the target.
     */
    public readonly input?: pulumi.Computed<string>;
    /**
     * The value of the [JSONPath](http://goessner.net/articles/JsonPath/)
     * that is used for extracting part of the matched event when passing it to the target.
     */
    public readonly inputPath?: pulumi.Computed<string>;
    /**
     * Parameters used when you are providing a custom input to a target based on certain event data.
     */
    public readonly inputTransformer?: pulumi.Computed<{ inputPaths?: {[key: string]: any}, inputTemplate: string }[]>;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. Required if `ecs_target` is used.
     */
    public readonly roleArn?: pulumi.Computed<string>;
    /**
     * The name of the rule you want to add targets to.
     */
    public readonly rule: pulumi.Computed<string>;
    /**
     * Parameters used when you are using the rule to invoke Amazon EC2 Run Command. Documented below. A maximum of 5 are allowed.
     */
    public readonly runCommandTargets?: pulumi.Computed<{ key: string, values: string[] }[]>;
    /**
     * The unique target assignment ID.  If missing, will generate a random, unique id.
     */
    public readonly targetId: pulumi.Computed<string>;

    /**
     * Create a EventTarget resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this EventTarget instance
     * @param args A collection of arguments for creating this EventTarget intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: EventTargetArgs, dependsOn?: pulumi.Resource[]) {
        if (args.arn === undefined) {
            throw new Error("Missing required property 'arn'");
        }
        if (args.rule === undefined) {
            throw new Error("Missing required property 'rule'");
        }
        super("aws:cloudwatch/eventTarget:EventTarget", urnName, {
            "arn": args.arn,
            "ecsTarget": args.ecsTarget,
            "input": args.input,
            "inputPath": args.inputPath,
            "inputTransformer": args.inputTransformer,
            "roleArn": args.roleArn,
            "rule": args.rule,
            "runCommandTargets": args.runCommandTargets,
            "targetId": args.targetId,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a EventTarget resource.
 */
export interface EventTargetArgs {
    /**
     * The Amazon Resource Name (ARN) associated of the target.
     */
    readonly arn: pulumi.ComputedValue<string>;
    /**
     * Parameters used when you are using the rule to invoke Amazon ECS Task. Documented below. A maximum of 1 are allowed.
     */
    readonly ecsTarget?: pulumi.ComputedValue<{ taskCount?: pulumi.ComputedValue<number>, taskDefinitionArn: pulumi.ComputedValue<string> }>[];
    /**
     * Valid JSON text passed to the target.
     */
    readonly input?: pulumi.ComputedValue<string>;
    /**
     * The value of the [JSONPath](http://goessner.net/articles/JsonPath/)
     * that is used for extracting part of the matched event when passing it to the target.
     */
    readonly inputPath?: pulumi.ComputedValue<string>;
    /**
     * Parameters used when you are providing a custom input to a target based on certain event data.
     */
    readonly inputTransformer?: pulumi.ComputedValue<{ inputPaths?: pulumi.ComputedValue<{[key: string]: any}>, inputTemplate: pulumi.ComputedValue<string> }>[];
    /**
     * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. Required if `ecs_target` is used.
     */
    readonly roleArn?: pulumi.ComputedValue<string>;
    /**
     * The name of the rule you want to add targets to.
     */
    readonly rule: pulumi.ComputedValue<string>;
    /**
     * Parameters used when you are using the rule to invoke Amazon EC2 Run Command. Documented below. A maximum of 5 are allowed.
     */
    readonly runCommandTargets?: pulumi.ComputedValue<{ key: pulumi.ComputedValue<string>, values: pulumi.ComputedValue<pulumi.ComputedValue<string>>[] }>[];
    /**
     * The unique target assignment ID.  If missing, will generate a random, unique id.
     */
    readonly targetId?: pulumi.ComputedValue<string>;
}

