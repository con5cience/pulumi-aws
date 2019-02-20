// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a DAX Subnet Group resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.dax.SubnetGroup("example", {
 *     name: "example",
 *     subnetIds: [
 *         aws_subnet_example1.id,
 *         aws_subnet_example2.id,
 *     ],
 * });
 * ```
 */
export class SubnetGroup extends pulumi.CustomResource {
    /**
     * Get an existing SubnetGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubnetGroupState, opts?: pulumi.CustomResourceOptions): SubnetGroup {
        return new SubnetGroup(name, <any>state, { ...opts, id: id });
    }

    /**
     * A description of the subnet group.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * The name of the subnet group.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A list of VPC subnet IDs for the subnet group.
     */
    public readonly subnetIds: pulumi.Output<string[]>;
    /**
     * VPC ID of the subnet group.
     */
    public /*out*/ readonly vpcId: pulumi.Output<string>;

    /**
     * Create a SubnetGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubnetGroupArgs | SubnetGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SubnetGroupState = argsOrState as SubnetGroupState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["subnetIds"] = state ? state.subnetIds : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as SubnetGroupArgs | undefined;
            if (!args || args.subnetIds === undefined) {
                throw new Error("Missing required property 'subnetIds'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["subnetIds"] = args ? args.subnetIds : undefined;
            inputs["vpcId"] = undefined /*out*/;
        }
        super("aws:dax/subnetGroup:SubnetGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SubnetGroup resources.
 */
export interface SubnetGroupState {
    /**
     * A description of the subnet group.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the subnet group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of VPC subnet IDs for the subnet group.
     */
    readonly subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * VPC ID of the subnet group.
     */
    readonly vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SubnetGroup resource.
 */
export interface SubnetGroupArgs {
    /**
     * A description of the subnet group.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the subnet group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of VPC subnet IDs for the subnet group.
     */
    readonly subnetIds: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The live SubnetGroup resource.
 */
export interface SubnetGroupResult {
    /**
     * A description of the subnet group.
     */
    readonly description?: string;
    /**
     * The name of the subnet group.
     */
    readonly name: string;
    /**
     * A list of VPC subnet IDs for the subnet group.
     */
    readonly subnetIds: string[];
    /**
     * VPC ID of the subnet group.
     */
    readonly vpcId: string;
}
