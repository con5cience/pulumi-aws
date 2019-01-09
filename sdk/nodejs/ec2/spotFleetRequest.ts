// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class SpotFleetRequest extends pulumi.CustomResource {
    /**
     * Get an existing SpotFleetRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpotFleetRequestState, opts?: pulumi.CustomResourceOptions): SpotFleetRequest {
        return new SpotFleetRequest(name, <any>state, { ...opts, id: id });
    }

    public readonly allocationStrategy: pulumi.Output<string | undefined>;
    public /*out*/ readonly clientToken: pulumi.Output<string>;
    public readonly excessCapacityTerminationPolicy: pulumi.Output<string | undefined>;
    public readonly fleetType: pulumi.Output<string | undefined>;
    public readonly iamFleetRole: pulumi.Output<string>;
    public readonly instanceInterruptionBehaviour: pulumi.Output<string | undefined>;
    public readonly instancePoolsToUseCount: pulumi.Output<number | undefined>;
    public readonly launchSpecifications: pulumi.Output<{ ami: string, associatePublicIpAddress?: boolean, availabilityZone: string, ebsBlockDevices: { deleteOnTermination?: boolean, deviceName: string, encrypted: boolean, iops: number, snapshotId: string, volumeSize: number, volumeType: string }[], ebsOptimized?: boolean, ephemeralBlockDevices: { deviceName: string, virtualName: string }[], iamInstanceProfile?: string, iamInstanceProfileArn?: string, instanceType: string, keyName: string, monitoring?: boolean, placementGroup: string, placementTenancy?: string, rootBlockDevices: { deleteOnTermination?: boolean, iops: number, volumeSize: number, volumeType: string }[], spotPrice?: string, subnetId: string, tags?: {[key: string]: any}, userData?: string, vpcSecurityGroupIds: string[], weightedCapacity?: string }[]>;
    public readonly loadBalancers: pulumi.Output<string[]>;
    public readonly replaceUnhealthyInstances: pulumi.Output<boolean | undefined>;
    public readonly spotPrice: pulumi.Output<string | undefined>;
    public /*out*/ readonly spotRequestState: pulumi.Output<string>;
    public readonly targetCapacity: pulumi.Output<number>;
    public readonly targetGroupArns: pulumi.Output<string[]>;
    public readonly terminateInstancesWithExpiration: pulumi.Output<boolean | undefined>;
    public readonly validFrom: pulumi.Output<string | undefined>;
    public readonly validUntil: pulumi.Output<string | undefined>;
    public readonly waitForFulfillment: pulumi.Output<boolean | undefined>;

    /**
     * Create a SpotFleetRequest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpotFleetRequestArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SpotFleetRequestArgs | SpotFleetRequestState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SpotFleetRequestState = argsOrState as SpotFleetRequestState | undefined;
            inputs["allocationStrategy"] = state ? state.allocationStrategy : undefined;
            inputs["clientToken"] = state ? state.clientToken : undefined;
            inputs["excessCapacityTerminationPolicy"] = state ? state.excessCapacityTerminationPolicy : undefined;
            inputs["fleetType"] = state ? state.fleetType : undefined;
            inputs["iamFleetRole"] = state ? state.iamFleetRole : undefined;
            inputs["instanceInterruptionBehaviour"] = state ? state.instanceInterruptionBehaviour : undefined;
            inputs["instancePoolsToUseCount"] = state ? state.instancePoolsToUseCount : undefined;
            inputs["launchSpecifications"] = state ? state.launchSpecifications : undefined;
            inputs["loadBalancers"] = state ? state.loadBalancers : undefined;
            inputs["replaceUnhealthyInstances"] = state ? state.replaceUnhealthyInstances : undefined;
            inputs["spotPrice"] = state ? state.spotPrice : undefined;
            inputs["spotRequestState"] = state ? state.spotRequestState : undefined;
            inputs["targetCapacity"] = state ? state.targetCapacity : undefined;
            inputs["targetGroupArns"] = state ? state.targetGroupArns : undefined;
            inputs["terminateInstancesWithExpiration"] = state ? state.terminateInstancesWithExpiration : undefined;
            inputs["validFrom"] = state ? state.validFrom : undefined;
            inputs["validUntil"] = state ? state.validUntil : undefined;
            inputs["waitForFulfillment"] = state ? state.waitForFulfillment : undefined;
        } else {
            const args = argsOrState as SpotFleetRequestArgs | undefined;
            if (!args || args.iamFleetRole === undefined) {
                throw new Error("Missing required property 'iamFleetRole'");
            }
            if (!args || args.launchSpecifications === undefined) {
                throw new Error("Missing required property 'launchSpecifications'");
            }
            if (!args || args.targetCapacity === undefined) {
                throw new Error("Missing required property 'targetCapacity'");
            }
            inputs["allocationStrategy"] = args ? args.allocationStrategy : undefined;
            inputs["excessCapacityTerminationPolicy"] = args ? args.excessCapacityTerminationPolicy : undefined;
            inputs["fleetType"] = args ? args.fleetType : undefined;
            inputs["iamFleetRole"] = args ? args.iamFleetRole : undefined;
            inputs["instanceInterruptionBehaviour"] = args ? args.instanceInterruptionBehaviour : undefined;
            inputs["instancePoolsToUseCount"] = args ? args.instancePoolsToUseCount : undefined;
            inputs["launchSpecifications"] = args ? args.launchSpecifications : undefined;
            inputs["loadBalancers"] = args ? args.loadBalancers : undefined;
            inputs["replaceUnhealthyInstances"] = args ? args.replaceUnhealthyInstances : undefined;
            inputs["spotPrice"] = args ? args.spotPrice : undefined;
            inputs["targetCapacity"] = args ? args.targetCapacity : undefined;
            inputs["targetGroupArns"] = args ? args.targetGroupArns : undefined;
            inputs["terminateInstancesWithExpiration"] = args ? args.terminateInstancesWithExpiration : undefined;
            inputs["validFrom"] = args ? args.validFrom : undefined;
            inputs["validUntil"] = args ? args.validUntil : undefined;
            inputs["waitForFulfillment"] = args ? args.waitForFulfillment : undefined;
            inputs["clientToken"] = undefined /*out*/;
            inputs["spotRequestState"] = undefined /*out*/;
        }
        super("aws:ec2/spotFleetRequest:SpotFleetRequest", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SpotFleetRequest resources.
 */
export interface SpotFleetRequestState {
    readonly allocationStrategy?: pulumi.Input<string>;
    readonly clientToken?: pulumi.Input<string>;
    readonly excessCapacityTerminationPolicy?: pulumi.Input<string>;
    readonly fleetType?: pulumi.Input<string>;
    readonly iamFleetRole?: pulumi.Input<string>;
    readonly instanceInterruptionBehaviour?: pulumi.Input<string>;
    readonly instancePoolsToUseCount?: pulumi.Input<number>;
    readonly launchSpecifications?: pulumi.Input<pulumi.Input<{ ami: pulumi.Input<string>, associatePublicIpAddress?: pulumi.Input<boolean>, availabilityZone?: pulumi.Input<string>, ebsBlockDevices?: pulumi.Input<pulumi.Input<{ deleteOnTermination?: pulumi.Input<boolean>, deviceName: pulumi.Input<string>, encrypted?: pulumi.Input<boolean>, iops?: pulumi.Input<number>, snapshotId?: pulumi.Input<string>, volumeSize?: pulumi.Input<number>, volumeType?: pulumi.Input<string> }>[]>, ebsOptimized?: pulumi.Input<boolean>, ephemeralBlockDevices?: pulumi.Input<pulumi.Input<{ deviceName: pulumi.Input<string>, virtualName: pulumi.Input<string> }>[]>, iamInstanceProfile?: pulumi.Input<string>, iamInstanceProfileArn?: pulumi.Input<string>, instanceType: pulumi.Input<string>, keyName?: pulumi.Input<string>, monitoring?: pulumi.Input<boolean>, placementGroup?: pulumi.Input<string>, placementTenancy?: pulumi.Input<string>, rootBlockDevices?: pulumi.Input<pulumi.Input<{ deleteOnTermination?: pulumi.Input<boolean>, iops?: pulumi.Input<number>, volumeSize?: pulumi.Input<number>, volumeType?: pulumi.Input<string> }>[]>, spotPrice?: pulumi.Input<string>, subnetId?: pulumi.Input<string>, tags?: pulumi.Input<{[key: string]: any}>, userData?: pulumi.Input<string>, vpcSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>, weightedCapacity?: pulumi.Input<string> }>[]>;
    readonly loadBalancers?: pulumi.Input<pulumi.Input<string>[]>;
    readonly replaceUnhealthyInstances?: pulumi.Input<boolean>;
    readonly spotPrice?: pulumi.Input<string>;
    readonly spotRequestState?: pulumi.Input<string>;
    readonly targetCapacity?: pulumi.Input<number>;
    readonly targetGroupArns?: pulumi.Input<pulumi.Input<string>[]>;
    readonly terminateInstancesWithExpiration?: pulumi.Input<boolean>;
    readonly validFrom?: pulumi.Input<string>;
    readonly validUntil?: pulumi.Input<string>;
    readonly waitForFulfillment?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a SpotFleetRequest resource.
 */
export interface SpotFleetRequestArgs {
    readonly allocationStrategy?: pulumi.Input<string>;
    readonly excessCapacityTerminationPolicy?: pulumi.Input<string>;
    readonly fleetType?: pulumi.Input<string>;
    readonly iamFleetRole: pulumi.Input<string>;
    readonly instanceInterruptionBehaviour?: pulumi.Input<string>;
    readonly instancePoolsToUseCount?: pulumi.Input<number>;
    readonly launchSpecifications: pulumi.Input<pulumi.Input<{ ami: pulumi.Input<string>, associatePublicIpAddress?: pulumi.Input<boolean>, availabilityZone?: pulumi.Input<string>, ebsBlockDevices?: pulumi.Input<pulumi.Input<{ deleteOnTermination?: pulumi.Input<boolean>, deviceName: pulumi.Input<string>, encrypted?: pulumi.Input<boolean>, iops?: pulumi.Input<number>, snapshotId?: pulumi.Input<string>, volumeSize?: pulumi.Input<number>, volumeType?: pulumi.Input<string> }>[]>, ebsOptimized?: pulumi.Input<boolean>, ephemeralBlockDevices?: pulumi.Input<pulumi.Input<{ deviceName: pulumi.Input<string>, virtualName: pulumi.Input<string> }>[]>, iamInstanceProfile?: pulumi.Input<string>, iamInstanceProfileArn?: pulumi.Input<string>, instanceType: pulumi.Input<string>, keyName?: pulumi.Input<string>, monitoring?: pulumi.Input<boolean>, placementGroup?: pulumi.Input<string>, placementTenancy?: pulumi.Input<string>, rootBlockDevices?: pulumi.Input<pulumi.Input<{ deleteOnTermination?: pulumi.Input<boolean>, iops?: pulumi.Input<number>, volumeSize?: pulumi.Input<number>, volumeType?: pulumi.Input<string> }>[]>, spotPrice?: pulumi.Input<string>, subnetId?: pulumi.Input<string>, tags?: pulumi.Input<{[key: string]: any}>, userData?: pulumi.Input<string>, vpcSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>, weightedCapacity?: pulumi.Input<string> }>[]>;
    readonly loadBalancers?: pulumi.Input<pulumi.Input<string>[]>;
    readonly replaceUnhealthyInstances?: pulumi.Input<boolean>;
    readonly spotPrice?: pulumi.Input<string>;
    readonly targetCapacity: pulumi.Input<number>;
    readonly targetGroupArns?: pulumi.Input<pulumi.Input<string>[]>;
    readonly terminateInstancesWithExpiration?: pulumi.Input<boolean>;
    readonly validFrom?: pulumi.Input<string>;
    readonly validUntil?: pulumi.Input<string>;
    readonly waitForFulfillment?: pulumi.Input<boolean>;
}
