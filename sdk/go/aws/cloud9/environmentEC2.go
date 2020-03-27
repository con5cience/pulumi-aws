// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package cloud9

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Cloud9 EC2 Development Environment.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloud9_environment_ec2.html.markdown.
type EnvironmentEC2 struct {
	pulumi.CustomResourceState

	// The ARN of the environment.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// The number of minutes until the running instance is shut down after the environment has last been used.
	AutomaticStopTimeMinutes pulumi.IntPtrOutput `pulumi:"automaticStopTimeMinutes"`
	// The description of the environment.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// The type of instance to connect to the environment, e.g. `t2.micro`.
	InstanceType pulumi.StringOutput `pulumi:"instanceType"`
	// The name of the environment.
	Name pulumi.StringOutput `pulumi:"name"`
	// The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator.
	OwnerArn pulumi.StringOutput `pulumi:"ownerArn"`
	// The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.
	SubnetId pulumi.StringPtrOutput `pulumi:"subnetId"`
	// Key-value mapping of resource tags
	Tags pulumi.MapOutput `pulumi:"tags"`
	// The type of the environment (e.g. `ssh` or `ec2`)
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewEnvironmentEC2 registers a new resource with the given unique name, arguments, and options.
func NewEnvironmentEC2(ctx *pulumi.Context,
	name string, args *EnvironmentEC2Args, opts ...pulumi.ResourceOption) (*EnvironmentEC2, error) {
	if args == nil || args.InstanceType == nil {
		return nil, errors.New("missing required argument 'InstanceType'")
	}
	if args == nil {
		args = &EnvironmentEC2Args{}
	}
	var resource EnvironmentEC2
	err := ctx.RegisterResource("aws:cloud9/environmentEC2:EnvironmentEC2", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetEnvironmentEC2 gets an existing EnvironmentEC2 resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEnvironmentEC2(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *EnvironmentEC2State, opts ...pulumi.ResourceOption) (*EnvironmentEC2, error) {
	var resource EnvironmentEC2
	err := ctx.ReadResource("aws:cloud9/environmentEC2:EnvironmentEC2", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering EnvironmentEC2 resources.
type environmentEC2State struct {
	// The ARN of the environment.
	Arn *string `pulumi:"arn"`
	// The number of minutes until the running instance is shut down after the environment has last been used.
	AutomaticStopTimeMinutes *int `pulumi:"automaticStopTimeMinutes"`
	// The description of the environment.
	Description *string `pulumi:"description"`
	// The type of instance to connect to the environment, e.g. `t2.micro`.
	InstanceType *string `pulumi:"instanceType"`
	// The name of the environment.
	Name *string `pulumi:"name"`
	// The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator.
	OwnerArn *string `pulumi:"ownerArn"`
	// The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.
	SubnetId *string `pulumi:"subnetId"`
	// Key-value mapping of resource tags
	Tags map[string]interface{} `pulumi:"tags"`
	// The type of the environment (e.g. `ssh` or `ec2`)
	Type *string `pulumi:"type"`
}

type EnvironmentEC2State struct {
	// The ARN of the environment.
	Arn pulumi.StringPtrInput
	// The number of minutes until the running instance is shut down after the environment has last been used.
	AutomaticStopTimeMinutes pulumi.IntPtrInput
	// The description of the environment.
	Description pulumi.StringPtrInput
	// The type of instance to connect to the environment, e.g. `t2.micro`.
	InstanceType pulumi.StringPtrInput
	// The name of the environment.
	Name pulumi.StringPtrInput
	// The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator.
	OwnerArn pulumi.StringPtrInput
	// The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.
	SubnetId pulumi.StringPtrInput
	// Key-value mapping of resource tags
	Tags pulumi.MapInput
	// The type of the environment (e.g. `ssh` or `ec2`)
	Type pulumi.StringPtrInput
}

func (EnvironmentEC2State) ElementType() reflect.Type {
	return reflect.TypeOf((*environmentEC2State)(nil)).Elem()
}

type environmentEC2Args struct {
	// The number of minutes until the running instance is shut down after the environment has last been used.
	AutomaticStopTimeMinutes *int `pulumi:"automaticStopTimeMinutes"`
	// The description of the environment.
	Description *string `pulumi:"description"`
	// The type of instance to connect to the environment, e.g. `t2.micro`.
	InstanceType string `pulumi:"instanceType"`
	// The name of the environment.
	Name *string `pulumi:"name"`
	// The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator.
	OwnerArn *string `pulumi:"ownerArn"`
	// The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.
	SubnetId *string `pulumi:"subnetId"`
	// Key-value mapping of resource tags
	Tags map[string]interface{} `pulumi:"tags"`
}

// The set of arguments for constructing a EnvironmentEC2 resource.
type EnvironmentEC2Args struct {
	// The number of minutes until the running instance is shut down after the environment has last been used.
	AutomaticStopTimeMinutes pulumi.IntPtrInput
	// The description of the environment.
	Description pulumi.StringPtrInput
	// The type of instance to connect to the environment, e.g. `t2.micro`.
	InstanceType pulumi.StringInput
	// The name of the environment.
	Name pulumi.StringPtrInput
	// The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator.
	OwnerArn pulumi.StringPtrInput
	// The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.
	SubnetId pulumi.StringPtrInput
	// Key-value mapping of resource tags
	Tags pulumi.MapInput
}

func (EnvironmentEC2Args) ElementType() reflect.Type {
	return reflect.TypeOf((*environmentEC2Args)(nil)).Elem()
}
