// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an ElastiCache Security Group to control access to one or more cache
 * clusters.
 * 
 * > **NOTE:** ElastiCache Security Groups are for use only when working with an
 * ElastiCache cluster **outside** of a VPC. If you are using a VPC, see the
 * ElastiCache Subnet Group resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const barEc2SecurityGroup = new aws.ec2.SecurityGroup("bar", {});
 * const barSecurityGroup = new aws.elasticache.SecurityGroup("bar", {
 *     securityGroupNames: [barEc2SecurityGroup.name],
 * });
 * ```
 */
export class SecurityGroup extends pulumi.CustomResource {
    /**
     * Get an existing SecurityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityGroupState, opts?: pulumi.CustomResourceOptions): SecurityGroup {
        return new SecurityGroup(name, <any>state, { ...opts, id: id });
    }

    /**
     * description for the cache security group. Defaults to "Managed by Terraform".
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Name for the cache security group. This value is stored as a lowercase string.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of EC2 security group names to be
     * authorized for ingress to the cache security group
     */
    public readonly securityGroupNames!: pulumi.Output<string[]>;

    /**
     * Create a SecurityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityGroupArgs | SecurityGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SecurityGroupState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["securityGroupNames"] = state ? state.securityGroupNames : undefined;
        } else {
            const args = argsOrState as SecurityGroupArgs | undefined;
            if (!args || args.securityGroupNames === undefined) {
                throw new Error("Missing required property 'securityGroupNames'");
            }
            inputs["description"] = (args ? args.description : undefined) || "Managed by Pulumi";
            inputs["name"] = args ? args.name : undefined;
            inputs["securityGroupNames"] = args ? args.securityGroupNames : undefined;
        }
        super("aws:elasticache/securityGroup:SecurityGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SecurityGroup resources.
 */
export interface SecurityGroupState {
    /**
     * description for the cache security group. Defaults to "Managed by Terraform".
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Name for the cache security group. This value is stored as a lowercase string.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * List of EC2 security group names to be
     * authorized for ingress to the cache security group
     */
    readonly securityGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SecurityGroup resource.
 */
export interface SecurityGroupArgs {
    /**
     * description for the cache security group. Defaults to "Managed by Terraform".
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Name for the cache security group. This value is stored as a lowercase string.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * List of EC2 security group names to be
     * authorized for ingress to the cache security group
     */
    readonly securityGroupNames: pulumi.Input<pulumi.Input<string>[]>;
}
