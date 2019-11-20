// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Iam
{
    /// <summary>
    /// Provides an IAM instance profile.
    /// 
    /// &gt; **NOTE:** Either `role` or `roles` (**deprecated**) must be specified.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/iam_instance_profile.html.markdown.
    /// </summary>
    public partial class InstanceProfile : Pulumi.CustomResource
    {
        /// <summary>
        /// The ARN assigned by AWS to the instance profile.
        /// </summary>
        [Output("arn")]
        public Output<string> Arn { get; private set; } = null!;

        /// <summary>
        /// The creation timestamp of the instance profile.
        /// </summary>
        [Output("createDate")]
        public Output<string> CreateDate { get; private set; } = null!;

        /// <summary>
        /// The profile's name. If omitted, this provider will assign a random, unique name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Creates a unique name beginning with the specified prefix. Conflicts with `name`.
        /// </summary>
        [Output("namePrefix")]
        public Output<string?> NamePrefix { get; private set; } = null!;

        /// <summary>
        /// Path in which to create the profile.
        /// </summary>
        [Output("path")]
        public Output<string?> Path { get; private set; } = null!;

        /// <summary>
        /// The role name to include in the profile.
        /// </summary>
        [Output("role")]
        public Output<string> Role { get; private set; } = null!;

        /// <summary>
        /// 
        /// A list of role names to include in the profile.  The current default is 1.  If you see an error message similar to `Cannot exceed quota for InstanceSessionsPerInstanceProfile: 1`, then you must contact AWS support and ask for a limit increase.
        /// </summary>
        [Output("roles")]
        public Output<ImmutableArray<string>> Roles { get; private set; } = null!;

        /// <summary>
        /// The [unique ID][1] assigned by AWS.
        /// </summary>
        [Output("uniqueId")]
        public Output<string> UniqueId { get; private set; } = null!;


        /// <summary>
        /// Create a InstanceProfile resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public InstanceProfile(string name, InstanceProfileArgs? args = null, CustomResourceOptions? options = null)
            : base("aws:iam/instanceProfile:InstanceProfile", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private InstanceProfile(string name, Input<string> id, InstanceProfileState? state = null, CustomResourceOptions? options = null)
            : base("aws:iam/instanceProfile:InstanceProfile", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing InstanceProfile resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static InstanceProfile Get(string name, Input<string> id, InstanceProfileState? state = null, CustomResourceOptions? options = null)
        {
            return new InstanceProfile(name, id, state, options);
        }
    }

    public sealed class InstanceProfileArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The profile's name. If omitted, this provider will assign a random, unique name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Creates a unique name beginning with the specified prefix. Conflicts with `name`.
        /// </summary>
        [Input("namePrefix")]
        public Input<string>? NamePrefix { get; set; }

        /// <summary>
        /// Path in which to create the profile.
        /// </summary>
        [Input("path")]
        public Input<string>? Path { get; set; }

        /// <summary>
        /// The role name to include in the profile.
        /// </summary>
        [Input("role")]
        public Input<string>? Role { get; set; }

        [Input("roles")]
        private InputList<string>? _roles;

        /// <summary>
        /// 
        /// A list of role names to include in the profile.  The current default is 1.  If you see an error message similar to `Cannot exceed quota for InstanceSessionsPerInstanceProfile: 1`, then you must contact AWS support and ask for a limit increase.
        /// </summary>
        public InputList<string> Roles
        {
            get => _roles ?? (_roles = new InputList<string>());
            set => _roles = value;
        }

        public InstanceProfileArgs()
        {
        }
    }

    public sealed class InstanceProfileState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ARN assigned by AWS to the instance profile.
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// The creation timestamp of the instance profile.
        /// </summary>
        [Input("createDate")]
        public Input<string>? CreateDate { get; set; }

        /// <summary>
        /// The profile's name. If omitted, this provider will assign a random, unique name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Creates a unique name beginning with the specified prefix. Conflicts with `name`.
        /// </summary>
        [Input("namePrefix")]
        public Input<string>? NamePrefix { get; set; }

        /// <summary>
        /// Path in which to create the profile.
        /// </summary>
        [Input("path")]
        public Input<string>? Path { get; set; }

        /// <summary>
        /// The role name to include in the profile.
        /// </summary>
        [Input("role")]
        public Input<string>? Role { get; set; }

        [Input("roles")]
        private InputList<string>? _roles;

        /// <summary>
        /// 
        /// A list of role names to include in the profile.  The current default is 1.  If you see an error message similar to `Cannot exceed quota for InstanceSessionsPerInstanceProfile: 1`, then you must contact AWS support and ask for a limit increase.
        /// </summary>
        public InputList<string> Roles
        {
            get => _roles ?? (_roles = new InputList<string>());
            set => _roles = value;
        }

        /// <summary>
        /// The [unique ID][1] assigned by AWS.
        /// </summary>
        [Input("uniqueId")]
        public Input<string>? UniqueId { get; set; }

        public InstanceProfileState()
        {
        }
    }
}