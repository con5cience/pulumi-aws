// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Ecr
{
    public static class GetCredentials
    {
        public static Task<GetCredentialsResult> InvokeAsync(GetCredentialsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetCredentialsResult>("aws:ecr/getCredentials:getCredentials", args ?? new GetCredentialsArgs(), options.WithVersion());
    }


    public sealed class GetCredentialsArgs : Pulumi.InvokeArgs
    {
        [Input("registryId", required: true)]
        public string RegistryId { get; set; } = null!;

        public GetCredentialsArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetCredentialsResult
    {
        public readonly string AuthorizationToken;
        public readonly string ExpiresAt;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string ProxyEndpoint;
        public readonly string RegistryId;

        [OutputConstructor]
        private GetCredentialsResult(
            string authorizationToken,

            string expiresAt,

            string id,

            string proxyEndpoint,

            string registryId)
        {
            AuthorizationToken = authorizationToken;
            ExpiresAt = expiresAt;
            Id = id;
            ProxyEndpoint = proxyEndpoint;
            RegistryId = registryId;
        }
    }
}
