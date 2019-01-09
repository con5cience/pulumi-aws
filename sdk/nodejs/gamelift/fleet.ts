// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Fleet extends pulumi.CustomResource {
    /**
     * Get an existing Fleet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FleetState, opts?: pulumi.CustomResourceOptions): Fleet {
        return new Fleet(name, <any>state, { ...opts, id: id });
    }

    public /*out*/ readonly arn: pulumi.Output<string>;
    public readonly buildId: pulumi.Output<string>;
    public readonly description: pulumi.Output<string | undefined>;
    public readonly ec2InboundPermissions: pulumi.Output<{ fromPort: number, ipRange: string, protocol: string, toPort: number }[] | undefined>;
    public readonly ec2InstanceType: pulumi.Output<string>;
    public /*out*/ readonly logPaths: pulumi.Output<string[]>;
    public readonly metricGroups: pulumi.Output<string[]>;
    public readonly name: pulumi.Output<string>;
    public readonly newGameSessionProtectionPolicy: pulumi.Output<string | undefined>;
    public /*out*/ readonly operatingSystem: pulumi.Output<string>;
    public readonly resourceCreationLimitPolicy: pulumi.Output<{ newGameSessionsPerCreator?: number, policyPeriodInMinutes?: number } | undefined>;
    public readonly runtimeConfiguration: pulumi.Output<{ gameSessionActivationTimeoutSeconds?: number, maxConcurrentGameSessionActivations?: number, serverProcesses?: { concurrentExecutions: number, launchPath: string, parameters?: string }[] } | undefined>;

    /**
     * Create a Fleet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FleetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FleetArgs | FleetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: FleetState = argsOrState as FleetState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["buildId"] = state ? state.buildId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["ec2InboundPermissions"] = state ? state.ec2InboundPermissions : undefined;
            inputs["ec2InstanceType"] = state ? state.ec2InstanceType : undefined;
            inputs["logPaths"] = state ? state.logPaths : undefined;
            inputs["metricGroups"] = state ? state.metricGroups : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["newGameSessionProtectionPolicy"] = state ? state.newGameSessionProtectionPolicy : undefined;
            inputs["operatingSystem"] = state ? state.operatingSystem : undefined;
            inputs["resourceCreationLimitPolicy"] = state ? state.resourceCreationLimitPolicy : undefined;
            inputs["runtimeConfiguration"] = state ? state.runtimeConfiguration : undefined;
        } else {
            const args = argsOrState as FleetArgs | undefined;
            if (!args || args.buildId === undefined) {
                throw new Error("Missing required property 'buildId'");
            }
            if (!args || args.ec2InstanceType === undefined) {
                throw new Error("Missing required property 'ec2InstanceType'");
            }
            inputs["buildId"] = args ? args.buildId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["ec2InboundPermissions"] = args ? args.ec2InboundPermissions : undefined;
            inputs["ec2InstanceType"] = args ? args.ec2InstanceType : undefined;
            inputs["metricGroups"] = args ? args.metricGroups : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["newGameSessionProtectionPolicy"] = args ? args.newGameSessionProtectionPolicy : undefined;
            inputs["resourceCreationLimitPolicy"] = args ? args.resourceCreationLimitPolicy : undefined;
            inputs["runtimeConfiguration"] = args ? args.runtimeConfiguration : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["logPaths"] = undefined /*out*/;
            inputs["operatingSystem"] = undefined /*out*/;
        }
        super("aws:gamelift/fleet:Fleet", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Fleet resources.
 */
export interface FleetState {
    readonly arn?: pulumi.Input<string>;
    readonly buildId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly ec2InboundPermissions?: pulumi.Input<pulumi.Input<{ fromPort: pulumi.Input<number>, ipRange: pulumi.Input<string>, protocol: pulumi.Input<string>, toPort: pulumi.Input<number> }>[]>;
    readonly ec2InstanceType?: pulumi.Input<string>;
    readonly logPaths?: pulumi.Input<pulumi.Input<string>[]>;
    readonly metricGroups?: pulumi.Input<pulumi.Input<string>[]>;
    readonly name?: pulumi.Input<string>;
    readonly newGameSessionProtectionPolicy?: pulumi.Input<string>;
    readonly operatingSystem?: pulumi.Input<string>;
    readonly resourceCreationLimitPolicy?: pulumi.Input<{ newGameSessionsPerCreator?: pulumi.Input<number>, policyPeriodInMinutes?: pulumi.Input<number> }>;
    readonly runtimeConfiguration?: pulumi.Input<{ gameSessionActivationTimeoutSeconds?: pulumi.Input<number>, maxConcurrentGameSessionActivations?: pulumi.Input<number>, serverProcesses?: pulumi.Input<pulumi.Input<{ concurrentExecutions: pulumi.Input<number>, launchPath: pulumi.Input<string>, parameters?: pulumi.Input<string> }>[]> }>;
}

/**
 * The set of arguments for constructing a Fleet resource.
 */
export interface FleetArgs {
    readonly buildId: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly ec2InboundPermissions?: pulumi.Input<pulumi.Input<{ fromPort: pulumi.Input<number>, ipRange: pulumi.Input<string>, protocol: pulumi.Input<string>, toPort: pulumi.Input<number> }>[]>;
    readonly ec2InstanceType: pulumi.Input<string>;
    readonly metricGroups?: pulumi.Input<pulumi.Input<string>[]>;
    readonly name?: pulumi.Input<string>;
    readonly newGameSessionProtectionPolicy?: pulumi.Input<string>;
    readonly resourceCreationLimitPolicy?: pulumi.Input<{ newGameSessionsPerCreator?: pulumi.Input<number>, policyPeriodInMinutes?: pulumi.Input<number> }>;
    readonly runtimeConfiguration?: pulumi.Input<{ gameSessionActivationTimeoutSeconds?: pulumi.Input<number>, maxConcurrentGameSessionActivations?: pulumi.Input<number>, serverProcesses?: pulumi.Input<pulumi.Input<{ concurrentExecutions: pulumi.Input<number>, launchPath: pulumi.Input<string>, parameters?: pulumi.Input<string> }>[]> }>;
}
