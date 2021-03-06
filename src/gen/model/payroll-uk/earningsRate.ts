/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.2.10
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class EarningsRate {
    /**
    * Xero unique identifier for an earning rate
    */
    'earningsRateID'?: string;
    /**
    * Name of the earning rate
    */
    'name': string;
    /**
    * Indicates how an employee will be paid when taking this type of earning
    */
    'earningsType': EarningsRate.EarningsTypeEnum;
    /**
    * Indicates the type of the earning rate
    */
    'rateType': EarningsRate.RateTypeEnum;
    /**
    * The type of units used to record earnings
    */
    'typeOfUnits': string;
    /**
    * Indicates whether an earning type is active
    */
    'currentRecord'?: boolean;
    /**
    * The account that will be used for the earnings rate
    */
    'expenseAccountID': string;
    /**
    * Default rate per unit (optional). Only applicable if RateType is RatePerUnit
    */
    'ratePerUnit'?: number;
    /**
    * This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MultipleOfOrdinaryEarningsRate
    */
    'multipleOfOrdinaryEarningsRate'?: number;
    /**
    * Optional Fixed Rate Amount. Applicable for FixedAmount Rate
    */
    'fixedAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "earningsRateID",
            "baseName": "earningsRateID",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "earningsType",
            "baseName": "earningsType",
            "type": "EarningsRate.EarningsTypeEnum"
        },
        {
            "name": "rateType",
            "baseName": "rateType",
            "type": "EarningsRate.RateTypeEnum"
        },
        {
            "name": "typeOfUnits",
            "baseName": "typeOfUnits",
            "type": "string"
        },
        {
            "name": "currentRecord",
            "baseName": "currentRecord",
            "type": "boolean"
        },
        {
            "name": "expenseAccountID",
            "baseName": "expenseAccountID",
            "type": "string"
        },
        {
            "name": "ratePerUnit",
            "baseName": "ratePerUnit",
            "type": "number"
        },
        {
            "name": "multipleOfOrdinaryEarningsRate",
            "baseName": "multipleOfOrdinaryEarningsRate",
            "type": "number"
        },
        {
            "name": "fixedAmount",
            "baseName": "fixedAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EarningsRate.attributeTypeMap;
    }
}

export namespace EarningsRate {
    export enum EarningsTypeEnum {
        OvertimeEarnings = <any> 'OvertimeEarnings',
        Allowance = <any> 'Allowance',
        RegularEarnings = <any> 'RegularEarnings',
        Commission = <any> 'Commission',
        Bonus = <any> 'Bonus',
        TipsDirect = <any> 'Tips(Direct)',
        TipsNonDirect = <any> 'Tips(Non-Direct)',
        Backpay = <any> 'Backpay',
        OtherEarnings = <any> 'OtherEarnings',
        LumpSum = <any> 'LumpSum'
    }
    export enum RateTypeEnum {
        RatePerUnit = <any> 'RatePerUnit',
        MultipleOfOrdinaryEarningsRate = <any> 'MultipleOfOrdinaryEarningsRate',
        FixedAmount = <any> 'FixedAmount'
    }
}
