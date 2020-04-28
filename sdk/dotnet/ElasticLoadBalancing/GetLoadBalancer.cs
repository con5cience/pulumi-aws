// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticLoadBalancing
{
    [Obsolete(@"aws.getLoadBalancer has been deprecated in favour of aws.getLoadBalancer")]
    public static class GetLoadBalancer
    {
        /// <summary>
        /// Provides information about a "classic" Elastic Load Balancer (ELB).
        /// See [LB Data Source](https://www.terraform.io/docs/providers/aws/d/lb.html) if you are looking for "v2"
        /// Application Load Balancer (ALB) or Network Load Balancer (NLB).
        /// 
        /// This data source can prove useful when a module accepts an LB as an input
        /// variable and needs to, for example, determine the security groups associated
        /// with it, etc.
        /// 
        /// {{% examples %}}
        /// {{% /examples %}}
        /// 
        /// Deprecated: aws.getLoadBalancer has been deprecated in favour of aws.getLoadBalancer
        /// </summary>
        public static Task<GetLoadBalancerResult> InvokeAsync(GetLoadBalancerArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetLoadBalancerResult>("aws:elasticloadbalancing/getLoadBalancer:getLoadBalancer", args ?? new GetLoadBalancerArgs(), options.WithVersion());
    }


    public sealed class GetLoadBalancerArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The unique name of the load balancer.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        [Input("tags")]
        private Dictionary<string, object>? _tags;
        public Dictionary<string, object> Tags
        {
            get => _tags ?? (_tags = new Dictionary<string, object>());
            set => _tags = value;
        }

        public GetLoadBalancerArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetLoadBalancerResult
    {
        public readonly Outputs.GetLoadBalancerAccessLogsResult AccessLogs;
        public readonly string Arn;
        public readonly ImmutableArray<string> AvailabilityZones;
        public readonly bool ConnectionDraining;
        public readonly int ConnectionDrainingTimeout;
        public readonly bool CrossZoneLoadBalancing;
        public readonly string DnsName;
        public readonly Outputs.GetLoadBalancerHealthCheckResult HealthCheck;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly int IdleTimeout;
        public readonly ImmutableArray<string> Instances;
        public readonly bool Internal;
        public readonly ImmutableArray<Outputs.GetLoadBalancerListenerResult> Listeners;
        public readonly string Name;
        public readonly ImmutableArray<string> SecurityGroups;
        public readonly string SourceSecurityGroup;
        public readonly string SourceSecurityGroupId;
        public readonly ImmutableArray<string> Subnets;
        public readonly ImmutableDictionary<string, object> Tags;
        public readonly string ZoneId;

        [OutputConstructor]
        private GetLoadBalancerResult(
            Outputs.GetLoadBalancerAccessLogsResult accessLogs,

            string arn,

            ImmutableArray<string> availabilityZones,

            bool connectionDraining,

            int connectionDrainingTimeout,

            bool crossZoneLoadBalancing,

            string dnsName,

            Outputs.GetLoadBalancerHealthCheckResult healthCheck,

            string id,

            int idleTimeout,

            ImmutableArray<string> instances,

            bool @internal,

            ImmutableArray<Outputs.GetLoadBalancerListenerResult> listeners,

            string name,

            ImmutableArray<string> securityGroups,

            string sourceSecurityGroup,

            string sourceSecurityGroupId,

            ImmutableArray<string> subnets,

            ImmutableDictionary<string, object> tags,

            string zoneId)
        {
            AccessLogs = accessLogs;
            Arn = arn;
            AvailabilityZones = availabilityZones;
            ConnectionDraining = connectionDraining;
            ConnectionDrainingTimeout = connectionDrainingTimeout;
            CrossZoneLoadBalancing = crossZoneLoadBalancing;
            DnsName = dnsName;
            HealthCheck = healthCheck;
            Id = id;
            IdleTimeout = idleTimeout;
            Instances = instances;
            Internal = @internal;
            Listeners = listeners;
            Name = name;
            SecurityGroups = securityGroups;
            SourceSecurityGroup = sourceSecurityGroup;
            SourceSecurityGroupId = sourceSecurityGroupId;
            Subnets = subnets;
            Tags = tags;
            ZoneId = zoneId;
        }
    }
}
