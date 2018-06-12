# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class AssessmentTemplate(pulumi.CustomResource):
    """
    Provides a Inspector assessment template
    """
    def __init__(__self__, __name__, __opts__=None, duration=None, name=None, rules_package_arns=None, target_arn=None):
        """Create a AssessmentTemplate resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not duration:
            raise TypeError('Missing required property duration')
        elif not isinstance(duration, int):
            raise TypeError('Expected property duration to be a int')
        __self__.duration = duration
        """
        The duration of the inspector run.
        """
        __props__['duration'] = duration

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the assessment template.
        """
        __props__['name'] = name

        if not rules_package_arns:
            raise TypeError('Missing required property rules_package_arns')
        elif not isinstance(rules_package_arns, list):
            raise TypeError('Expected property rules_package_arns to be a list')
        __self__.rules_package_arns = rules_package_arns
        """
        The rules to be used during the run.
        """
        __props__['rulesPackageArns'] = rules_package_arns

        if not target_arn:
            raise TypeError('Missing required property target_arn')
        elif not isinstance(target_arn, basestring):
            raise TypeError('Expected property target_arn to be a basestring')
        __self__.target_arn = target_arn
        """
        The assessment target ARN to attach the template to.
        """
        __props__['targetArn'] = target_arn

        __self__.arn = pulumi.runtime.UNKNOWN
        """
        The template assessment ARN.
        """

        super(AssessmentTemplate, __self__).__init__(
            'aws:inspector/assessmentTemplate:AssessmentTemplate',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'duration' in outs:
            self.duration = outs['duration']
        if 'name' in outs:
            self.name = outs['name']
        if 'rulesPackageArns' in outs:
            self.rules_package_arns = outs['rulesPackageArns']
        if 'targetArn' in outs:
            self.target_arn = outs['targetArn']