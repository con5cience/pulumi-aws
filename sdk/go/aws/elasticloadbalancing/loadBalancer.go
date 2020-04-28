// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package elasticloadbalancing

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Provides an Elastic Load Balancer resource, also known as a "Classic
// Load Balancer" after the release of
// [Application/Network Load Balancers](https://www.terraform.io/docs/providers/aws/r/lb.html).
//
// > **NOTE on ELB Instances and ELB Attachments:** This provider currently
// provides both a standalone ELB Attachment resource
// (describing an instance attached to an ELB), and an ELB resource with
// `instances` defined in-line. At this time you cannot use an ELB with in-line
// instances in conjunction with a ELB Attachment resources. Doing so will cause a
// conflict and will overwrite attachments.
//
//
// ## Note on ECDSA Key Algorithm
//
// If the ARN of the `sslCertificateId` that is pointed to references a
// certificate that was signed by an ECDSA key, note that ELB only supports the
// P256 and P384 curves.  Using a certificate signed by a key using a different
// curve could produce the error `ERR_SSL_VERSION_OR_CIPHER_MISMATCH` in your
// browser.
//
// Deprecated: aws.LoadBalancer has been deprecated in favour of aws.LoadBalancer
type LoadBalancer struct {
	pulumi.CustomResourceState

	// An Access Logs block. Access Logs documented below.
	AccessLogs LoadBalancerAccessLogsPtrOutput `pulumi:"accessLogs"`
	// The ARN of the ELB
	Arn pulumi.StringOutput `pulumi:"arn"`
	// The AZ's to serve traffic in.
	AvailabilityZones pulumi.StringArrayOutput `pulumi:"availabilityZones"`
	// Boolean to enable connection draining. Default: `false`
	ConnectionDraining pulumi.BoolPtrOutput `pulumi:"connectionDraining"`
	// The time in seconds to allow for connections to drain. Default: `300`
	ConnectionDrainingTimeout pulumi.IntPtrOutput `pulumi:"connectionDrainingTimeout"`
	// Enable cross-zone load balancing. Default: `true`
	CrossZoneLoadBalancing pulumi.BoolPtrOutput `pulumi:"crossZoneLoadBalancing"`
	// The DNS name of the ELB
	DnsName pulumi.StringOutput `pulumi:"dnsName"`
	// A healthCheck block. Health Check documented below.
	HealthCheck LoadBalancerHealthCheckOutput `pulumi:"healthCheck"`
	// The time in seconds that the connection is allowed to be idle. Default: `60`
	IdleTimeout pulumi.IntPtrOutput `pulumi:"idleTimeout"`
	// A list of instance ids to place in the ELB pool.
	Instances pulumi.StringArrayOutput `pulumi:"instances"`
	// If true, ELB will be an internal ELB.
	Internal pulumi.BoolOutput `pulumi:"internal"`
	// A list of listener blocks. Listeners documented below.
	Listeners LoadBalancerListenerArrayOutput `pulumi:"listeners"`
	// The name of the ELB. By default generated by this provider.
	Name pulumi.StringOutput `pulumi:"name"`
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix pulumi.StringPtrOutput `pulumi:"namePrefix"`
	// A list of security group IDs to assign to the ELB.
	// Only valid if creating an ELB within a VPC
	SecurityGroups pulumi.StringArrayOutput `pulumi:"securityGroups"`
	// The name of the security group that you can use as
	// part of your inbound rules for your load balancer's back-end application
	// instances. Use this for Classic or Default VPC only.
	SourceSecurityGroup pulumi.StringOutput `pulumi:"sourceSecurityGroup"`
	// The ID of the security group that you can use as
	// part of your inbound rules for your load balancer's back-end application
	// instances. Only available on ELBs launched in a VPC.
	SourceSecurityGroupId pulumi.StringOutput `pulumi:"sourceSecurityGroupId"`
	// A list of subnet IDs to attach to the ELB.
	Subnets pulumi.StringArrayOutput `pulumi:"subnets"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.MapOutput `pulumi:"tags"`
	// The canonical hosted zone ID of the ELB (to be used in a Route 53 Alias record)
	ZoneId pulumi.StringOutput `pulumi:"zoneId"`
}

// NewLoadBalancer registers a new resource with the given unique name, arguments, and options.
func NewLoadBalancer(ctx *pulumi.Context,
	name string, args *LoadBalancerArgs, opts ...pulumi.ResourceOption) (*LoadBalancer, error) {
	if args == nil || args.Listeners == nil {
		return nil, errors.New("missing required argument 'Listeners'")
	}
	if args == nil {
		args = &LoadBalancerArgs{}
	}
	var resource LoadBalancer
	err := ctx.RegisterResource("aws:elasticloadbalancing/loadBalancer:LoadBalancer", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetLoadBalancer gets an existing LoadBalancer resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLoadBalancer(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *LoadBalancerState, opts ...pulumi.ResourceOption) (*LoadBalancer, error) {
	var resource LoadBalancer
	err := ctx.ReadResource("aws:elasticloadbalancing/loadBalancer:LoadBalancer", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering LoadBalancer resources.
type loadBalancerState struct {
	// An Access Logs block. Access Logs documented below.
	AccessLogs *LoadBalancerAccessLogs `pulumi:"accessLogs"`
	// The ARN of the ELB
	Arn *string `pulumi:"arn"`
	// The AZ's to serve traffic in.
	AvailabilityZones []string `pulumi:"availabilityZones"`
	// Boolean to enable connection draining. Default: `false`
	ConnectionDraining *bool `pulumi:"connectionDraining"`
	// The time in seconds to allow for connections to drain. Default: `300`
	ConnectionDrainingTimeout *int `pulumi:"connectionDrainingTimeout"`
	// Enable cross-zone load balancing. Default: `true`
	CrossZoneLoadBalancing *bool `pulumi:"crossZoneLoadBalancing"`
	// The DNS name of the ELB
	DnsName *string `pulumi:"dnsName"`
	// A healthCheck block. Health Check documented below.
	HealthCheck *LoadBalancerHealthCheck `pulumi:"healthCheck"`
	// The time in seconds that the connection is allowed to be idle. Default: `60`
	IdleTimeout *int `pulumi:"idleTimeout"`
	// A list of instance ids to place in the ELB pool.
	Instances []string `pulumi:"instances"`
	// If true, ELB will be an internal ELB.
	Internal *bool `pulumi:"internal"`
	// A list of listener blocks. Listeners documented below.
	Listeners []LoadBalancerListener `pulumi:"listeners"`
	// The name of the ELB. By default generated by this provider.
	Name *string `pulumi:"name"`
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix *string `pulumi:"namePrefix"`
	// A list of security group IDs to assign to the ELB.
	// Only valid if creating an ELB within a VPC
	SecurityGroups []string `pulumi:"securityGroups"`
	// The name of the security group that you can use as
	// part of your inbound rules for your load balancer's back-end application
	// instances. Use this for Classic or Default VPC only.
	SourceSecurityGroup *string `pulumi:"sourceSecurityGroup"`
	// The ID of the security group that you can use as
	// part of your inbound rules for your load balancer's back-end application
	// instances. Only available on ELBs launched in a VPC.
	SourceSecurityGroupId *string `pulumi:"sourceSecurityGroupId"`
	// A list of subnet IDs to attach to the ELB.
	Subnets []string `pulumi:"subnets"`
	// A mapping of tags to assign to the resource.
	Tags map[string]interface{} `pulumi:"tags"`
	// The canonical hosted zone ID of the ELB (to be used in a Route 53 Alias record)
	ZoneId *string `pulumi:"zoneId"`
}

type LoadBalancerState struct {
	// An Access Logs block. Access Logs documented below.
	AccessLogs LoadBalancerAccessLogsPtrInput
	// The ARN of the ELB
	Arn pulumi.StringPtrInput
	// The AZ's to serve traffic in.
	AvailabilityZones pulumi.StringArrayInput
	// Boolean to enable connection draining. Default: `false`
	ConnectionDraining pulumi.BoolPtrInput
	// The time in seconds to allow for connections to drain. Default: `300`
	ConnectionDrainingTimeout pulumi.IntPtrInput
	// Enable cross-zone load balancing. Default: `true`
	CrossZoneLoadBalancing pulumi.BoolPtrInput
	// The DNS name of the ELB
	DnsName pulumi.StringPtrInput
	// A healthCheck block. Health Check documented below.
	HealthCheck LoadBalancerHealthCheckPtrInput
	// The time in seconds that the connection is allowed to be idle. Default: `60`
	IdleTimeout pulumi.IntPtrInput
	// A list of instance ids to place in the ELB pool.
	Instances pulumi.StringArrayInput
	// If true, ELB will be an internal ELB.
	Internal pulumi.BoolPtrInput
	// A list of listener blocks. Listeners documented below.
	Listeners LoadBalancerListenerArrayInput
	// The name of the ELB. By default generated by this provider.
	Name pulumi.StringPtrInput
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix pulumi.StringPtrInput
	// A list of security group IDs to assign to the ELB.
	// Only valid if creating an ELB within a VPC
	SecurityGroups pulumi.StringArrayInput
	// The name of the security group that you can use as
	// part of your inbound rules for your load balancer's back-end application
	// instances. Use this for Classic or Default VPC only.
	SourceSecurityGroup pulumi.StringPtrInput
	// The ID of the security group that you can use as
	// part of your inbound rules for your load balancer's back-end application
	// instances. Only available on ELBs launched in a VPC.
	SourceSecurityGroupId pulumi.StringPtrInput
	// A list of subnet IDs to attach to the ELB.
	Subnets pulumi.StringArrayInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.MapInput
	// The canonical hosted zone ID of the ELB (to be used in a Route 53 Alias record)
	ZoneId pulumi.StringPtrInput
}

func (LoadBalancerState) ElementType() reflect.Type {
	return reflect.TypeOf((*loadBalancerState)(nil)).Elem()
}

type loadBalancerArgs struct {
	// An Access Logs block. Access Logs documented below.
	AccessLogs *LoadBalancerAccessLogs `pulumi:"accessLogs"`
	// The AZ's to serve traffic in.
	AvailabilityZones []string `pulumi:"availabilityZones"`
	// Boolean to enable connection draining. Default: `false`
	ConnectionDraining *bool `pulumi:"connectionDraining"`
	// The time in seconds to allow for connections to drain. Default: `300`
	ConnectionDrainingTimeout *int `pulumi:"connectionDrainingTimeout"`
	// Enable cross-zone load balancing. Default: `true`
	CrossZoneLoadBalancing *bool `pulumi:"crossZoneLoadBalancing"`
	// A healthCheck block. Health Check documented below.
	HealthCheck *LoadBalancerHealthCheck `pulumi:"healthCheck"`
	// The time in seconds that the connection is allowed to be idle. Default: `60`
	IdleTimeout *int `pulumi:"idleTimeout"`
	// A list of instance ids to place in the ELB pool.
	Instances []string `pulumi:"instances"`
	// If true, ELB will be an internal ELB.
	Internal *bool `pulumi:"internal"`
	// A list of listener blocks. Listeners documented below.
	Listeners []LoadBalancerListener `pulumi:"listeners"`
	// The name of the ELB. By default generated by this provider.
	Name *string `pulumi:"name"`
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix *string `pulumi:"namePrefix"`
	// A list of security group IDs to assign to the ELB.
	// Only valid if creating an ELB within a VPC
	SecurityGroups []string `pulumi:"securityGroups"`
	// The name of the security group that you can use as
	// part of your inbound rules for your load balancer's back-end application
	// instances. Use this for Classic or Default VPC only.
	SourceSecurityGroup *string `pulumi:"sourceSecurityGroup"`
	// A list of subnet IDs to attach to the ELB.
	Subnets []string `pulumi:"subnets"`
	// A mapping of tags to assign to the resource.
	Tags map[string]interface{} `pulumi:"tags"`
}

// The set of arguments for constructing a LoadBalancer resource.
type LoadBalancerArgs struct {
	// An Access Logs block. Access Logs documented below.
	AccessLogs LoadBalancerAccessLogsPtrInput
	// The AZ's to serve traffic in.
	AvailabilityZones pulumi.StringArrayInput
	// Boolean to enable connection draining. Default: `false`
	ConnectionDraining pulumi.BoolPtrInput
	// The time in seconds to allow for connections to drain. Default: `300`
	ConnectionDrainingTimeout pulumi.IntPtrInput
	// Enable cross-zone load balancing. Default: `true`
	CrossZoneLoadBalancing pulumi.BoolPtrInput
	// A healthCheck block. Health Check documented below.
	HealthCheck LoadBalancerHealthCheckPtrInput
	// The time in seconds that the connection is allowed to be idle. Default: `60`
	IdleTimeout pulumi.IntPtrInput
	// A list of instance ids to place in the ELB pool.
	Instances pulumi.StringArrayInput
	// If true, ELB will be an internal ELB.
	Internal pulumi.BoolPtrInput
	// A list of listener blocks. Listeners documented below.
	Listeners LoadBalancerListenerArrayInput
	// The name of the ELB. By default generated by this provider.
	Name pulumi.StringPtrInput
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix pulumi.StringPtrInput
	// A list of security group IDs to assign to the ELB.
	// Only valid if creating an ELB within a VPC
	SecurityGroups pulumi.StringArrayInput
	// The name of the security group that you can use as
	// part of your inbound rules for your load balancer's back-end application
	// instances. Use this for Classic or Default VPC only.
	SourceSecurityGroup pulumi.StringPtrInput
	// A list of subnet IDs to attach to the ELB.
	Subnets pulumi.StringArrayInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.MapInput
}

func (LoadBalancerArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*loadBalancerArgs)(nil)).Elem()
}
