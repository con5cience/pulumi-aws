// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ec2.Inputs
{

    public sealed class LaunchTemplatePlacementGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The affinity setting for an instance on a Dedicated Host.
        /// </summary>
        [Input("affinity")]
        public Input<string>? Affinity { get; set; }

        /// <summary>
        /// The Availability Zone for the instance.
        /// </summary>
        [Input("availabilityZone")]
        public Input<string>? AvailabilityZone { get; set; }

        /// <summary>
        /// The name of the placement group for the instance.
        /// </summary>
        [Input("groupName")]
        public Input<string>? GroupName { get; set; }

        /// <summary>
        /// The ID of the Dedicated Host for the instance.
        /// </summary>
        [Input("hostId")]
        public Input<string>? HostId { get; set; }

        /// <summary>
        /// The number of the partition the instance should launch in. Valid only if the placement group strategy is set to partition.
        /// </summary>
        [Input("partitionNumber")]
        public Input<int>? PartitionNumber { get; set; }

        /// <summary>
        /// Reserved for future use.
        /// </summary>
        [Input("spreadDomain")]
        public Input<string>? SpreadDomain { get; set; }

        /// <summary>
        /// The tenancy of the instance (if the instance is running in a VPC). Can be `default`, `dedicated`, or `host`.
        /// </summary>
        [Input("tenancy")]
        public Input<string>? Tenancy { get; set; }

        public LaunchTemplatePlacementGetArgs()
        {
        }
    }
}
