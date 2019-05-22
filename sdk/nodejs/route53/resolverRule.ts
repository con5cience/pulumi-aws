// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Route53 Resolver rule.
 * 
 * ## Example Usage
 * 
 * ### System rule
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const sys = new aws.route53.ResolverRule("sys", {
 *     domainName: "subdomain.example.com",
 *     ruleType: "SYSTEM",
 * });
 * ```
 * 
 * ### Forward rule
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const fwd = new aws.route53.ResolverRule("fwd", {
 *     domainName: "example.com",
 *     resolverEndpointId: aws_route53_resolver_endpoint_foo.id,
 *     ruleType: "FORWARD",
 *     tags: {
 *         Environment: "Prod",
 *     },
 *     targetIps: [{
 *         ip: "123.45.67.89",
 *     }],
 * });
 * ```
 */
export class ResolverRule extends pulumi.CustomResource {
    /**
     * Get an existing ResolverRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResolverRuleState, opts?: pulumi.CustomResourceOptions): ResolverRule {
        return new ResolverRule(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN (Amazon Resource Name) for the resolver rule.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * DNS queries for this domain name are forwarded to the IP addresses that are specified using `target_ip`.
     */
    public readonly domainName!: pulumi.Output<string>;
    /**
     * A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * When a rule is shared with another AWS account, the account ID of the account that the rule is shared with.
     */
    public /*out*/ readonly ownerId!: pulumi.Output<string>;
    /**
     * The ID of the outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify using `target_ip`.
     * This argument should only be specified for `FORWARD` type rules.
     */
    public readonly resolverEndpointId!: pulumi.Output<string | undefined>;
    /**
     * The rule type. Valid values are `FORWARD`, `SYSTEM` and `RECURSIVE`.
     */
    public readonly ruleType!: pulumi.Output<string>;
    /**
     * Whether the rules is shared and, if so, whether the current account is sharing the rule with another account, or another account is sharing the rule with the current account.
     * Values are `NOT_SHARED`, `SHARED_BY_ME` or `SHARED_WITH_ME`
     */
    public /*out*/ readonly shareStatus!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Configuration block(s) indicating the IPs that you want Resolver to forward DNS queries to (documented below).
     * This argument should only be specified for `FORWARD` type rules.
     */
    public readonly targetIps!: pulumi.Output<{ ip: string, port?: number }[] | undefined>;

    /**
     * Create a ResolverRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResolverRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResolverRuleArgs | ResolverRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ResolverRuleState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["domainName"] = state ? state.domainName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["ownerId"] = state ? state.ownerId : undefined;
            inputs["resolverEndpointId"] = state ? state.resolverEndpointId : undefined;
            inputs["ruleType"] = state ? state.ruleType : undefined;
            inputs["shareStatus"] = state ? state.shareStatus : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["targetIps"] = state ? state.targetIps : undefined;
        } else {
            const args = argsOrState as ResolverRuleArgs | undefined;
            if (!args || args.domainName === undefined) {
                throw new Error("Missing required property 'domainName'");
            }
            if (!args || args.ruleType === undefined) {
                throw new Error("Missing required property 'ruleType'");
            }
            inputs["domainName"] = args ? args.domainName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resolverEndpointId"] = args ? args.resolverEndpointId : undefined;
            inputs["ruleType"] = args ? args.ruleType : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["targetIps"] = args ? args.targetIps : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["ownerId"] = undefined /*out*/;
            inputs["shareStatus"] = undefined /*out*/;
        }
        super("aws:route53/resolverRule:ResolverRule", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ResolverRule resources.
 */
export interface ResolverRuleState {
    /**
     * The ARN (Amazon Resource Name) for the resolver rule.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * DNS queries for this domain name are forwarded to the IP addresses that are specified using `target_ip`.
     */
    readonly domainName?: pulumi.Input<string>;
    /**
     * A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * When a rule is shared with another AWS account, the account ID of the account that the rule is shared with.
     */
    readonly ownerId?: pulumi.Input<string>;
    /**
     * The ID of the outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify using `target_ip`.
     * This argument should only be specified for `FORWARD` type rules.
     */
    readonly resolverEndpointId?: pulumi.Input<string>;
    /**
     * The rule type. Valid values are `FORWARD`, `SYSTEM` and `RECURSIVE`.
     */
    readonly ruleType?: pulumi.Input<string>;
    /**
     * Whether the rules is shared and, if so, whether the current account is sharing the rule with another account, or another account is sharing the rule with the current account.
     * Values are `NOT_SHARED`, `SHARED_BY_ME` or `SHARED_WITH_ME`
     */
    readonly shareStatus?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Configuration block(s) indicating the IPs that you want Resolver to forward DNS queries to (documented below).
     * This argument should only be specified for `FORWARD` type rules.
     */
    readonly targetIps?: pulumi.Input<pulumi.Input<{ ip: pulumi.Input<string>, port?: pulumi.Input<number> }>[]>;
}

/**
 * The set of arguments for constructing a ResolverRule resource.
 */
export interface ResolverRuleArgs {
    /**
     * DNS queries for this domain name are forwarded to the IP addresses that are specified using `target_ip`.
     */
    readonly domainName: pulumi.Input<string>;
    /**
     * A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify using `target_ip`.
     * This argument should only be specified for `FORWARD` type rules.
     */
    readonly resolverEndpointId?: pulumi.Input<string>;
    /**
     * The rule type. Valid values are `FORWARD`, `SYSTEM` and `RECURSIVE`.
     */
    readonly ruleType: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Configuration block(s) indicating the IPs that you want Resolver to forward DNS queries to (documented below).
     * This argument should only be specified for `FORWARD` type rules.
     */
    readonly targetIps?: pulumi.Input<pulumi.Input<{ ip: pulumi.Input<string>, port?: pulumi.Input<number> }>[]>;
}
