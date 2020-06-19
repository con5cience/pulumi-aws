// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an EC2 Local Gateway Route. More information can be found in the [Outposts User Guide](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#routing).
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.ec2.LocalGatewayRoute("example", {
 *     destinationCidrBlock: "172.16.0.0/16",
 *     localGatewayRouteTableId: data.aws_ec2_local_gateway_route_table.example.id,
 *     localGatewayVirtualInterfaceGroupId: data.aws_ec2_local_gateway_virtual_interface_group.example.id,
 * });
 * ```
 */
export class LocalGatewayRoute extends pulumi.CustomResource {
    /**
     * Get an existing LocalGatewayRoute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LocalGatewayRouteState, opts?: pulumi.CustomResourceOptions): LocalGatewayRoute {
        return new LocalGatewayRoute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/localGatewayRoute:LocalGatewayRoute';

    /**
     * Returns true if the given object is an instance of LocalGatewayRoute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LocalGatewayRoute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LocalGatewayRoute.__pulumiType;
    }

    /**
     * IPv4 CIDR range used for destination matches. Routing decisions are based on the most specific match.
     */
    public readonly destinationCidrBlock!: pulumi.Output<string>;
    /**
     * Identifier of EC2 Local Gateway Route Table.
     */
    public readonly localGatewayRouteTableId!: pulumi.Output<string>;
    /**
     * Identifier of EC2 Local Gateway Virtual Interface Group.
     */
    public readonly localGatewayVirtualInterfaceGroupId!: pulumi.Output<string>;

    /**
     * Create a LocalGatewayRoute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LocalGatewayRouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LocalGatewayRouteArgs | LocalGatewayRouteState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LocalGatewayRouteState | undefined;
            inputs["destinationCidrBlock"] = state ? state.destinationCidrBlock : undefined;
            inputs["localGatewayRouteTableId"] = state ? state.localGatewayRouteTableId : undefined;
            inputs["localGatewayVirtualInterfaceGroupId"] = state ? state.localGatewayVirtualInterfaceGroupId : undefined;
        } else {
            const args = argsOrState as LocalGatewayRouteArgs | undefined;
            if (!args || args.destinationCidrBlock === undefined) {
                throw new Error("Missing required property 'destinationCidrBlock'");
            }
            if (!args || args.localGatewayRouteTableId === undefined) {
                throw new Error("Missing required property 'localGatewayRouteTableId'");
            }
            if (!args || args.localGatewayVirtualInterfaceGroupId === undefined) {
                throw new Error("Missing required property 'localGatewayVirtualInterfaceGroupId'");
            }
            inputs["destinationCidrBlock"] = args ? args.destinationCidrBlock : undefined;
            inputs["localGatewayRouteTableId"] = args ? args.localGatewayRouteTableId : undefined;
            inputs["localGatewayVirtualInterfaceGroupId"] = args ? args.localGatewayVirtualInterfaceGroupId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(LocalGatewayRoute.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LocalGatewayRoute resources.
 */
export interface LocalGatewayRouteState {
    /**
     * IPv4 CIDR range used for destination matches. Routing decisions are based on the most specific match.
     */
    readonly destinationCidrBlock?: pulumi.Input<string>;
    /**
     * Identifier of EC2 Local Gateway Route Table.
     */
    readonly localGatewayRouteTableId?: pulumi.Input<string>;
    /**
     * Identifier of EC2 Local Gateway Virtual Interface Group.
     */
    readonly localGatewayVirtualInterfaceGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LocalGatewayRoute resource.
 */
export interface LocalGatewayRouteArgs {
    /**
     * IPv4 CIDR range used for destination matches. Routing decisions are based on the most specific match.
     */
    readonly destinationCidrBlock: pulumi.Input<string>;
    /**
     * Identifier of EC2 Local Gateway Route Table.
     */
    readonly localGatewayRouteTableId: pulumi.Input<string>;
    /**
     * Identifier of EC2 Local Gateway Virtual Interface Group.
     */
    readonly localGatewayVirtualInterfaceGroupId: pulumi.Input<string>;
}