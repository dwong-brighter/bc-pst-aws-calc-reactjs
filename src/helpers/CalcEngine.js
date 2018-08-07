/** 
 * Engine for calculating values (e.g. PST given price, CAD value given US value
 * and exchange rate).
 * 
 * Copyright (c) 2018-present, Danita Wong
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** TODO: More robust error handling! */
/**
 * Engine for calculating values (e.g. PST given price, CAD value given US value
 * and exchange rate).
 */
const gstRate = 0.05;
const pstRate = 0.07;

class CalcEngine {
  // inputs: Total USD, exchange rate, GST USD

  /**
   * Converts USD amounts to CAD amounts given an exchange rate
   * (e.g. if the USD exchange rate is 1.2 then a USD amount of 2 becomes a CAD
   * amount of 2.4.).  Note that this does not round to 2 decimal places.
   * 
   * @param {number} usdAmount 
   * @param {number} exchangeRate 
   */
  static convertUsdToCad(usdAmount, exchangeRate) {
    return usdAmount * exchangeRate;
  }

  /**
   * Calculates the net USD amount given the total USD amount and GST, as
   * reported on the regular invoice.  Note that there may be parts of the
   * net cost that aren't subject to GST (but all of the net cost is
   * subject to PST).
   * 
   * @param {number} usdTotal 
   * @param {number} usdGst 
   */
  static calculateUsdNetCost(usdTotal, usdGst) {
    return usdTotal - usdGst;
  }

  /**
   * Calculates the net USD amount that's subject to GST and PST (this may not be
   * the same as the USD total minus GST, as some amounts are not subject to GST).
   *
   * @param {number} usdGst 
   */
  static calculateUsdNetCostSubjectToGstAndPst(usdGst) {
    return usdGst / gstRate;
  }

  /**
   * Calculates the net USD amount that's subject to PST only (basically the
   * USD total minus USD GST minus net amount that's subject to GST and PST).
   * @param {number} usdTotal 
   * @param {number} usdGst 
   */
  static calculateUsdNetCostSubjectToPstOnly(usdTotal, usdGst) {
    return (this.calculateUsdNetCost(usdTotal, usdGst)
            - this.calculateUsdNetCostSubjectToGstAndPst(usdGst));
  }

  /**
   * Calculates the PST in USD based on the USD total and USD GST.
   * Basically, the PST is calculated on the net cost (total minus GST) and
   * applies even to the portion of net cost that is not subject to GST.
   * 
   * @param {number} usdTotal 
   * @param {number} usdGst 
   */
  static calculateUsdPst(usdTotal, usdGst) {
    return this.calculateUsdNetCost(usdTotal, usdGst) * pstRate;
  }
}

export default CalcEngine;