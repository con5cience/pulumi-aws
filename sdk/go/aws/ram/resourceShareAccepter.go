// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ram

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manage accepting a Resource Access Manager (RAM) Resource Share invitation. From a _receiver_ AWS account, accept an invitation to share resources that were shared by a _sender_ AWS account. To create a resource share in the _sender_, see the [`ram.ResourceShare` resource](https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html).
// 
// > **Note:** If both AWS accounts are in the same Organization and [RAM Sharing with AWS Organizations is enabled](https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-orgs), this resource is not necessary as RAM Resource Share invitations are not used.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/ram_resource_share_accepter.html.markdown.
type ResourceShareAccepter struct {
	s *pulumi.ResourceState
}

// NewResourceShareAccepter registers a new resource with the given unique name, arguments, and options.
func NewResourceShareAccepter(ctx *pulumi.Context,
	name string, args *ResourceShareAccepterArgs, opts ...pulumi.ResourceOpt) (*ResourceShareAccepter, error) {
	if args == nil || args.ShareArn == nil {
		return nil, errors.New("missing required argument 'ShareArn'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["shareArn"] = nil
	} else {
		inputs["shareArn"] = args.ShareArn
	}
	inputs["invitationArn"] = nil
	inputs["receiverAccountId"] = nil
	inputs["resources"] = nil
	inputs["senderAccountId"] = nil
	inputs["shareId"] = nil
	inputs["shareName"] = nil
	inputs["status"] = nil
	s, err := ctx.RegisterResource("aws:ram/resourceShareAccepter:ResourceShareAccepter", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ResourceShareAccepter{s: s}, nil
}

// GetResourceShareAccepter gets an existing ResourceShareAccepter resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetResourceShareAccepter(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ResourceShareAccepterState, opts ...pulumi.ResourceOpt) (*ResourceShareAccepter, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["invitationArn"] = state.InvitationArn
		inputs["receiverAccountId"] = state.ReceiverAccountId
		inputs["resources"] = state.Resources
		inputs["senderAccountId"] = state.SenderAccountId
		inputs["shareArn"] = state.ShareArn
		inputs["shareId"] = state.ShareId
		inputs["shareName"] = state.ShareName
		inputs["status"] = state.Status
	}
	s, err := ctx.ReadResource("aws:ram/resourceShareAccepter:ResourceShareAccepter", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ResourceShareAccepter{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *ResourceShareAccepter) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ResourceShareAccepter) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The ARN of the resource share invitation.
func (r *ResourceShareAccepter) InvitationArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["invitationArn"])
}

// The account ID of the receiver account which accepts the invitation.
func (r *ResourceShareAccepter) ReceiverAccountId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["receiverAccountId"])
}

// A list of the resource ARNs shared via the resource share.
func (r *ResourceShareAccepter) Resources() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["resources"])
}

// The account ID of the sender account which extends the invitation.
func (r *ResourceShareAccepter) SenderAccountId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["senderAccountId"])
}

// The ARN of the resource share.
func (r *ResourceShareAccepter) ShareArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["shareArn"])
}

// The ID of the resource share as displayed in the console.
func (r *ResourceShareAccepter) ShareId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["shareId"])
}

// The name of the resource share.
func (r *ResourceShareAccepter) ShareName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["shareName"])
}

// The status of the invitation (e.g., ACCEPTED, REJECTED).
func (r *ResourceShareAccepter) Status() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["status"])
}

// Input properties used for looking up and filtering ResourceShareAccepter resources.
type ResourceShareAccepterState struct {
	// The ARN of the resource share invitation.
	InvitationArn interface{}
	// The account ID of the receiver account which accepts the invitation.
	ReceiverAccountId interface{}
	// A list of the resource ARNs shared via the resource share.
	Resources interface{}
	// The account ID of the sender account which extends the invitation.
	SenderAccountId interface{}
	// The ARN of the resource share.
	ShareArn interface{}
	// The ID of the resource share as displayed in the console.
	ShareId interface{}
	// The name of the resource share.
	ShareName interface{}
	// The status of the invitation (e.g., ACCEPTED, REJECTED).
	Status interface{}
}

// The set of arguments for constructing a ResourceShareAccepter resource.
type ResourceShareAccepterArgs struct {
	// The ARN of the resource share.
	ShareArn interface{}
}