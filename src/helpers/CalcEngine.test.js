/** 
 * Tests for calculation engine.
 * 
 * Copyright (c) 2018-present, Danita Wong
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CalcEngine from './CalcEngine';

describe('convertUsdToCad', () => {
  it('is 0 when amount is 0', () => {
    // NOTE: amount and rate of 0 already calculated
    expect(CalcEngine.convertUsdToCad(0, 1)).toBe(0);
    expect(CalcEngine.convertUsdToCad(0, 1.2)).toBe(0);
  });
  
  it('is 0 when exchange rate is 0', () => {
    expect(CalcEngine.convertUsdToCad(1, 0)).toBe(0);
    expect(CalcEngine.convertUsdToCad(0, 0)).toBe(0);
    expect(CalcEngine.convertUsdToCad(2.5, 0)).toBe(0);
  });
  
  it('is same amount when exchange rate is 1', () => {
    expect(CalcEngine.convertUsdToCad(0, 1)).toBe(0);
    expect(CalcEngine.convertUsdToCad(1, 1)).toBe(1);
    expect(CalcEngine.convertUsdToCad(2.5, 1)).toBe(2.5);
    expect(CalcEngine.convertUsdToCad(-2.5, 1)).toBe(-2.5);
  });
  
  it('is USD amount multipled by exchange rate', () => {
    expect(CalcEngine.convertUsdToCad(1, 1.2)).toBe(1.2);
    expect(CalcEngine.convertUsdToCad(3.4, 1.2)).toBe(4.08);
    expect(CalcEngine.convertUsdToCad(2, 0.8)).toBe(1.6);
    expect(CalcEngine.convertUsdToCad(-2, 0.8)).toBe(-1.6);
  });
});

describe('calculateNetCostInUsd', () => {
  it('is same as USD total cost when USD GST is 0', () => {
    expect(CalcEngine.calculateUsdNetCost(0, 0)).toBe(0);
    expect(CalcEngine.calculateUsdNetCost(0.03, 0)).toBe(0.03);
    expect(CalcEngine.calculateUsdNetCost(-0.03, 0)).toBe(-0.03);
  });

  it('is 0 when USD total cost and USD GST are equal', () => {
    expect(CalcEngine.calculateUsdNetCost(0.02, 0.02)).toBe(0);
  });

  it('is USD total cost minus USD GST', () => {
    expect(CalcEngine.calculateUsdNetCost(10.50, 0.50)).toBe(10);
    expect(CalcEngine.calculateUsdNetCost(180, 5)).toBe(175);
    expect(CalcEngine.calculateUsdNetCost(-180, -5)).toBe(-175);
  });
});

describe('calculateUsdNetCostSubjectToGstAndPst', () => {
  it('is 0 when USD GST is 0', () => {
    expect(CalcEngine.calculateUsdNetCostSubjectToGstAndPst(0)).toBe(0);
  });

  it('is positive when USD GST is positive', () => {
    expect(CalcEngine.calculateUsdNetCostSubjectToGstAndPst(2)).toBe(40);
    expect(CalcEngine.calculateUsdNetCostSubjectToGstAndPst(0.05)).toBeCloseTo(1);
  });

  it('is negative when USD GST is negative', () => {
    expect(CalcEngine.calculateUsdNetCostSubjectToGstAndPst(-2)).toBe(-40);
    expect(CalcEngine.calculateUsdNetCostSubjectToGstAndPst(-0.05)).toBeCloseTo(-1);
  });
});

describe('calculateUsdNetCostSubjectToPstOnly', () => {
  it('is 0 when all USD net costs are subject to GST', () => {
    expect(CalcEngine.calculateUsdNetCostSubjectToPstOnly(0, 0)).toBe(0);
    expect(CalcEngine.calculateUsdNetCostSubjectToPstOnly(105, 5)).toBe(0);
    expect(CalcEngine.calculateUsdNetCostSubjectToPstOnly(-2.10, -0.10)).toBeCloseTo(0);
  });

  it('is same as USD net cost when no costs are subject to GST', () => {
    expect(CalcEngine.calculateUsdNetCostSubjectToPstOnly(1, 0)).toBe(1);
    expect(CalcEngine.calculateUsdNetCostSubjectToPstOnly(-0.35, 0)).toBeCloseTo(-0.35);
  });

  it('is difference between USD net cost and (USD) amount subject to GST', () => {
    expect(CalcEngine.calculateUsdNetCostSubjectToPstOnly(3.55, 0.05)).toBeCloseTo(2.5);
    expect(CalcEngine.calculateUsdNetCostSubjectToPstOnly(-715, -15)).toBeCloseTo(-400);
  });
});

describe('calculateUsdPst', () => {
  it('is 0 when USD total minus USD GST is 0', () => {
    expect(CalcEngine.calculateUsdPst(0, 0)).toBe(0);
    expect(CalcEngine.calculateUsdPst(0, 0)).toBe(0);
  });

  it('is 7% PST amount on USD total minus USD GST', () => {
    expect(CalcEngine.calculateUsdPst(101, 1)).toBeCloseTo(7);
    expect(CalcEngine.calculateUsdPst(200, 0)).toBeCloseTo(14);
    expect(CalcEngine.calculateUsdPst(-1.05, -0.05)).toBe(-0.07);
  });
});
