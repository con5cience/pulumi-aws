// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ecs.Outputs
{

    [OutputType]
    public sealed class CapacityProviderAutoScalingGroupProviderManagedScaling
    {
        /// <summary>
        /// The maximum step adjustment size. A number between 1 and 10,000.
        /// </summary>
        public readonly int? MaximumScalingStepSize;
        /// <summary>
        /// The minimum step adjustment size. A number between 1 and 10,000.
        /// </summary>
        public readonly int? MinimumScalingStepSize;
        /// <summary>
        /// Whether auto scaling is managed by ECS. Valid values are `ENABLED` and `DISABLED`.
        /// </summary>
        public readonly string? Status;
        /// <summary>
        /// The target utilization for the capacity provider. A number between 1 and 100.
        /// </summary>
        public readonly int? TargetCapacity;

        [OutputConstructor]
        private CapacityProviderAutoScalingGroupProviderManagedScaling(
            int? maximumScalingStepSize,

            int? minimumScalingStepSize,

            string? status,

            int? targetCapacity)
        {
            MaximumScalingStepSize = maximumScalingStepSize;
            MinimumScalingStepSize = minimumScalingStepSize;
            Status = status;
            TargetCapacity = targetCapacity;
        }
    }
}
