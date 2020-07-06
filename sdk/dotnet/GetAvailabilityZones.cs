// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws
{
    public static class GetAvailabilityZones
    {
        /// <summary>
        /// The Availability Zones data source allows access to the list of AWS
        /// Availability Zones which can be accessed by an AWS account within the region
        /// configured in the provider.
        /// 
        /// This is different from the `aws.getAvailabilityZone` (singular) data source,
        /// which provides some details about a specific availability zone.
        /// 
        /// &gt; When [Local Zones](https://aws.amazon.com/about-aws/global-infrastructure/localzones/) are enabled in a region, by default the API and this data source include both Local Zones and Availability Zones. To return only Availability Zones, see the example section below.
        /// 
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// ### By State
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Aws = Pulumi.Aws;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var available = Output.Create(Aws.GetAvailabilityZones.InvokeAsync(new Aws.GetAvailabilityZonesArgs
        ///         {
        ///             State = "available",
        ///         }));
        ///         var primary = new Aws.Ec2.Subnet("primary", new Aws.Ec2.SubnetArgs
        ///         {
        ///             AvailabilityZone = available.Apply(available =&gt; available.Names[0]),
        ///         });
        ///         // ...
        ///         var secondary = new Aws.Ec2.Subnet("secondary", new Aws.Ec2.SubnetArgs
        ///         {
        ///             AvailabilityZone = available.Apply(available =&gt; available.Names[1]),
        ///         });
        ///         // ...
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% example %}}
        /// ### By Filter
        /// 
        /// All Local Zones (regardless of opt-in status):
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Aws = Pulumi.Aws;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var example = Output.Create(Aws.GetAvailabilityZones.InvokeAsync(new Aws.GetAvailabilityZonesArgs
        ///         {
        ///             AllAvailabilityZones = true,
        ///             Filters = 
        ///             {
        ///                 new Aws.Inputs.GetAvailabilityZonesFilterArgs
        ///                 {
        ///                     Name = "opt-in-status",
        ///                     Values = 
        ///                     {
        ///                         "not-opted-in",
        ///                         "opted-in",
        ///                     },
        ///                 },
        ///             },
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// 
        /// Only Availability Zones (no Local Zones):
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Aws = Pulumi.Aws;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var example = Output.Create(Aws.GetAvailabilityZones.InvokeAsync(new Aws.GetAvailabilityZonesArgs
        ///         {
        ///             Filters = 
        ///             {
        ///                 new Aws.Inputs.GetAvailabilityZonesFilterArgs
        ///                 {
        ///                     Name = "opt-in-status",
        ///                     Values = 
        ///                     {
        ///                         "opt-in-not-required",
        ///                     },
        ///                 },
        ///             },
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetAvailabilityZonesResult> InvokeAsync(GetAvailabilityZonesArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAvailabilityZonesResult>("aws:index/getAvailabilityZones:getAvailabilityZones", args ?? new GetAvailabilityZonesArgs(), options.WithVersion());
    }


    public sealed class GetAvailabilityZonesArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Set to `true` to include all Availability Zones and Local Zones regardless of your opt in status.
        /// </summary>
        [Input("allAvailabilityZones")]
        public bool? AllAvailabilityZones { get; set; }

        [Input("blacklistedNames")]
        private List<string>? _blacklistedNames;

        /// <summary>
        /// List of Availability Zone names to exclude. Use `exclude_names` instead.
        /// </summary>
        [Obsolete(@"use `exclude_names` instead")]
        public List<string> BlacklistedNames
        {
            get => _blacklistedNames ?? (_blacklistedNames = new List<string>());
            set => _blacklistedNames = value;
        }

        [Input("blacklistedZoneIds")]
        private List<string>? _blacklistedZoneIds;

        /// <summary>
        /// List of Availability Zone IDs to exclude. Use `exclude_zone_ids` instead.
        /// </summary>
        [Obsolete(@"use `exclude_zone_ids` instead")]
        public List<string> BlacklistedZoneIds
        {
            get => _blacklistedZoneIds ?? (_blacklistedZoneIds = new List<string>());
            set => _blacklistedZoneIds = value;
        }

        [Input("excludeNames")]
        private List<string>? _excludeNames;

        /// <summary>
        /// List of Availability Zone names to exclude.
        /// </summary>
        public List<string> ExcludeNames
        {
            get => _excludeNames ?? (_excludeNames = new List<string>());
            set => _excludeNames = value;
        }

        [Input("excludeZoneIds")]
        private List<string>? _excludeZoneIds;

        /// <summary>
        /// List of Availability Zone IDs to exclude.
        /// </summary>
        public List<string> ExcludeZoneIds
        {
            get => _excludeZoneIds ?? (_excludeZoneIds = new List<string>());
            set => _excludeZoneIds = value;
        }

        [Input("filters")]
        private List<Inputs.GetAvailabilityZonesFilterArgs>? _filters;

        /// <summary>
        /// Configuration block(s) for filtering. Detailed below.
        /// </summary>
        public List<Inputs.GetAvailabilityZonesFilterArgs> Filters
        {
            get => _filters ?? (_filters = new List<Inputs.GetAvailabilityZonesFilterArgs>());
            set => _filters = value;
        }

        [Input("groupNames")]
        private List<string>? _groupNames;
        public List<string> GroupNames
        {
            get => _groupNames ?? (_groupNames = new List<string>());
            set => _groupNames = value;
        }

        /// <summary>
        /// Allows to filter list of Availability Zones based on their
        /// current state. Can be either `"available"`, `"information"`, `"impaired"` or
        /// `"unavailable"`. By default the list includes a complete set of Availability Zones
        /// to which the underlying AWS account has access, regardless of their state.
        /// </summary>
        [Input("state")]
        public string? State { get; set; }

        public GetAvailabilityZonesArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAvailabilityZonesResult
    {
        public readonly bool? AllAvailabilityZones;
        public readonly ImmutableArray<string> BlacklistedNames;
        public readonly ImmutableArray<string> BlacklistedZoneIds;
        public readonly ImmutableArray<string> ExcludeNames;
        public readonly ImmutableArray<string> ExcludeZoneIds;
        public readonly ImmutableArray<Outputs.GetAvailabilityZonesFilterResult> Filters;
        public readonly ImmutableArray<string> GroupNames;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// A list of the Availability Zone names available to the account.
        /// </summary>
        public readonly ImmutableArray<string> Names;
        public readonly string? State;
        /// <summary>
        /// A list of the Availability Zone IDs available to the account.
        /// </summary>
        public readonly ImmutableArray<string> ZoneIds;

        [OutputConstructor]
        private GetAvailabilityZonesResult(
            bool? allAvailabilityZones,

            ImmutableArray<string> blacklistedNames,

            ImmutableArray<string> blacklistedZoneIds,

            ImmutableArray<string> excludeNames,

            ImmutableArray<string> excludeZoneIds,

            ImmutableArray<Outputs.GetAvailabilityZonesFilterResult> filters,

            ImmutableArray<string> groupNames,

            string id,

            ImmutableArray<string> names,

            string? state,

            ImmutableArray<string> zoneIds)
        {
            AllAvailabilityZones = allAvailabilityZones;
            BlacklistedNames = blacklistedNames;
            BlacklistedZoneIds = blacklistedZoneIds;
            ExcludeNames = excludeNames;
            ExcludeZoneIds = excludeZoneIds;
            Filters = filters;
            GroupNames = groupNames;
            Id = id;
            Names = names;
            State = state;
            ZoneIds = zoneIds;
        }
    }
}
