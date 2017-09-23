// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a resource to create a VPC routing table.
 * 
 * ~> **NOTE on Route Tables and Routes:** Terraform currently
 * provides both a standalone [Route resource](route.html) and a Route Table resource with routes
 * defined in-line. At this time you cannot use a Route Table with in-line routes
 * in conjunction with any Route resources. Doing so will cause
 * a conflict of rule settings and will overwrite rules.
 * 
 * ~> **NOTE on `gateway_id` and `nat_gateway_id`:** The AWS API is very forgiving with these two
 * attributes and the `aws_route_table` resource can be created with a NAT ID specified as a Gateway ID attribute.
 * This _will_ lead to a permanent diff between your configuration and statefile, as the API returns the correct
 * parameters in the returned route table. If you're experiencing constant diffs in your `aws_route_table` resources,
 * the first thing to check is whether or not you're specifying a NAT ID instead of a Gateway ID, or vice-versa.
 * 
 * ~> **NOTE on `propagating_vgws` and the `aws_vpn_gateway_route_propagation` resource:**
 * If the `propagating_vgws` argument is present, it's not supported to _also_
 * define route propagations using `aws_vpn_gateway_route_propagation`, since
 * this resource will delete any propagating gateways not explicitly listed in
 * `propagating_vgws`. Omit this argument when defining route propagation using
 * the separate resource.
 */
export class RouteTable extends pulumi.Resource {
    /**
     * A list of virtual gateways for propagation.
     */
    public readonly propagatingVgws: pulumi.Computed<string[]>;
    /**
     * A list of route objects. Their keys are documented below.
     */
    public readonly route: pulumi.Computed<{ cidrBlock?: string, egressOnlyGatewayId?: string, gatewayId?: string, instanceId?: string, ipv6CidrBlock?: string, natGatewayId?: string, networkInterfaceId?: string, vpcPeeringConnectionId?: string }[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;
    /**
     * The VPC ID.
     */
    public readonly vpcId: pulumi.Computed<string>;

    /**
     * Create a RouteTable resource with the given unique name, arguments and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this RouteTable instance
     * @param args A collection of arguments for creating this RouteTable intance
     * @param dependsOn A optional array of additional resources this intance depends on
     */
    constructor(urnName: string, args: RouteTableArgs, dependsOn?: pulumi.Resource[]) {
        if (args.vpcId === undefined) {
            throw new Error("Missing required property 'vpcId'");
        }
        super("aws:ec2/routeTable:RouteTable", urnName, {
            "propagatingVgws": args.propagatingVgws,
            "route": args.route,
            "tags": args.tags,
            "vpcId": args.vpcId,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a RouteTable resource.
 */
export interface RouteTableArgs {
    /**
     * A list of virtual gateways for propagation.
     */
    readonly propagatingVgws?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * A list of route objects. Their keys are documented below.
     */
    readonly route?: pulumi.ComputedValue<{ cidrBlock?: pulumi.ComputedValue<string>, egressOnlyGatewayId?: pulumi.ComputedValue<string>, gatewayId?: pulumi.ComputedValue<string>, instanceId?: pulumi.ComputedValue<string>, ipv6CidrBlock?: pulumi.ComputedValue<string>, natGatewayId?: pulumi.ComputedValue<string>, networkInterfaceId?: pulumi.ComputedValue<string>, vpcPeeringConnectionId?: pulumi.ComputedValue<string> }>[];
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
    /**
     * The VPC ID.
     */
    readonly vpcId: pulumi.ComputedValue<string>;
}

