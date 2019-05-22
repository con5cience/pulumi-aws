# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class EnvironmentEC2(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the environment.
    """
    automatic_stop_time_minutes: pulumi.Output[float]
    """
    The number of minutes until the running instance is shut down after the environment has last been used.
    """
    description: pulumi.Output[str]
    """
    The description of the environment.
    """
    instance_type: pulumi.Output[str]
    """
    The type of instance to connect to the environment, e.g. `t2.micro`.
    """
    name: pulumi.Output[str]
    """
    The name of the environment.
    """
    owner_arn: pulumi.Output[str]
    """
    The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator.
    """
    subnet_id: pulumi.Output[str]
    """
    The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.
    """
    type: pulumi.Output[str]
    """
    The type of the environment (e.g. `ssh` or `ec2`)
    """
    def __init__(__self__, resource_name, opts=None, automatic_stop_time_minutes=None, description=None, instance_type=None, name=None, owner_arn=None, subnet_id=None, __name__=None, __opts__=None):
        """
        Provides a Cloud9 EC2 Development Environment.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] automatic_stop_time_minutes: The number of minutes until the running instance is shut down after the environment has last been used.
        :param pulumi.Input[str] description: The description of the environment.
        :param pulumi.Input[str] instance_type: The type of instance to connect to the environment, e.g. `t2.micro`.
        :param pulumi.Input[str] name: The name of the environment.
        :param pulumi.Input[str] owner_arn: The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator.
        :param pulumi.Input[str] subnet_id: The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['automatic_stop_time_minutes'] = automatic_stop_time_minutes

        __props__['description'] = description

        if instance_type is None:
            raise TypeError("Missing required property 'instance_type'")
        __props__['instance_type'] = instance_type

        __props__['name'] = name

        __props__['owner_arn'] = owner_arn

        __props__['subnet_id'] = subnet_id

        __props__['arn'] = None
        __props__['type'] = None

        super(EnvironmentEC2, __self__).__init__(
            'aws:cloud9/environmentEC2:EnvironmentEC2',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

