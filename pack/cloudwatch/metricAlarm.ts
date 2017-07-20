// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

import {Topic} from "../sns/topic";

export class MetricAlarm extends lumi.NamedResource implements MetricAlarmArgs {
    public readonly actionsEnabled?: boolean;
    public readonly alarmActions?: Topic[];
    public readonly alarmDescription?: string;
    public readonly alarmName?: string;
    public readonly comparisonOperator: string;
    public readonly dimensions?: {[key: string]: any};
    public readonly evaluateLowSampleCountPercentiles: string;
    public readonly evaluationPeriods: number;
    public readonly extendedStatistic?: string;
    public readonly insufficientDataActions?: Topic[];
    public readonly metricName: string;
    public readonly namespace: string;
    public readonly okActions?: Topic[];
    public readonly period: number;
    public readonly statistic?: string;
    public readonly threshold: number;
    public readonly treatMissingData?: string;
    public readonly unit?: string;

    public static get(id: lumi.ID): MetricAlarm {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): MetricAlarm[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(name: string, args: MetricAlarmArgs) {
        super(name);
        this.actionsEnabled = args.actionsEnabled;
        this.alarmActions = args.alarmActions;
        this.alarmDescription = args.alarmDescription;
        this.alarmName = args.alarmName;
        if (lumirt.defaultIfComputed(args.comparisonOperator, "") === undefined) {
            throw new Error("Property argument 'comparisonOperator' is required, but was missing");
        }
        this.comparisonOperator = args.comparisonOperator;
        this.dimensions = args.dimensions;
        this.evaluateLowSampleCountPercentiles = args.evaluateLowSampleCountPercentiles;
        if (lumirt.defaultIfComputed(args.evaluationPeriods, "") === undefined) {
            throw new Error("Property argument 'evaluationPeriods' is required, but was missing");
        }
        this.evaluationPeriods = args.evaluationPeriods;
        this.extendedStatistic = args.extendedStatistic;
        this.insufficientDataActions = args.insufficientDataActions;
        if (lumirt.defaultIfComputed(args.metricName, "") === undefined) {
            throw new Error("Property argument 'metricName' is required, but was missing");
        }
        this.metricName = args.metricName;
        if (lumirt.defaultIfComputed(args.namespace, "") === undefined) {
            throw new Error("Property argument 'namespace' is required, but was missing");
        }
        this.namespace = args.namespace;
        this.okActions = args.okActions;
        if (lumirt.defaultIfComputed(args.period, "") === undefined) {
            throw new Error("Property argument 'period' is required, but was missing");
        }
        this.period = args.period;
        this.statistic = args.statistic;
        if (lumirt.defaultIfComputed(args.threshold, "") === undefined) {
            throw new Error("Property argument 'threshold' is required, but was missing");
        }
        this.threshold = args.threshold;
        this.treatMissingData = args.treatMissingData;
        this.unit = args.unit;
    }
}

export interface MetricAlarmArgs {
    readonly actionsEnabled?: boolean;
    readonly alarmActions?: Topic[];
    readonly alarmDescription?: string;
    readonly alarmName?: string;
    readonly comparisonOperator: string;
    readonly dimensions?: {[key: string]: any};
    readonly evaluateLowSampleCountPercentiles?: string;
    readonly evaluationPeriods: number;
    readonly extendedStatistic?: string;
    readonly insufficientDataActions?: Topic[];
    readonly metricName: string;
    readonly namespace: string;
    readonly okActions?: Topic[];
    readonly period: number;
    readonly statistic?: string;
    readonly threshold: number;
    readonly treatMissingData?: string;
    readonly unit?: string;
}
