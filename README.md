# bc-pst-aws-calc-reactjs

![License](https://img.shields.io/github/license/mashape/apistatus.svg)

![Travis - master](https://img.shields.io/travis/dwong-brighter/bc-pst-aws-calc-reactjs.svg?label=master)

![Travis - develop](https://img.shields.io/travis/dwong-brighter/bc-pst-aws-calc-reactjs/develop.svg?label=develop)

Calculates self-assessed BC PST (British Columbia Provincial Sales Tax) for monthly AWS bills.

This is a personal learning and demo project using the following technologies:
- ReactJS

**DISCLAIMER: This project is provided as-is.  Do not rely on the accuracy of the calculations for doing your own taxes.  Consult a qualified accountant and/or tax lawyer.**

## Demo

The demo, which is built from the master branch, can be found at: https://dwong-brighter.github.io/bc-pst-aws-calc-reactjs/

## Background

AWS provides invoices and tax invoices for their monthly bills.  However, AWS only charges GST (on the costs incurred within Canadian data centers).  BC businesses that use AWS must self-report PST on the net cost of all services whether they were in Canadian data centers or not (basically the total cost of the actual invoice minus the GST charged).

Even if you choose to have AWS convert the bill to Canadian currency (CAD), the tax invoice and tax amounts are stated in US currency (USD).

Example:

- You incurred a net of $100.00 USD of costs from Canadian data centers and a net of $50.00 USD of costs from non-Canadian data centers for a subtotal of $150.00 USD of costs.
- AWS charges 5% GST on the $100.00 USD, so they add $5.00 USD to the total.
- The total bill you have to pay AWS is $155.00 USD.
- Since AWS does not charge PST and since 7% PST applies to the whole subtotal (including costs from Canadian and non-Canadian data centers), you have to calculate PST on the $150.00 USD.  You end up self-assessing $10.50 USD of PST.
- On the bill it states that the exchange rate is 1 USD to 1.20000 CAD.
- So at the end of the day you end up with:
  - $120.00 CAD net cost from Canadian data centers
  - $60.00 CAD net cost from non-Canadian data centers
  - $6.00 CAD GST paid, which you can claim as an ITC against the GST you collect from your customers/clients
  - $186.00 CAD total bill
  - $12.60 CAD PST to self-assess and remit to the BC government later

## Running it locally

1. Open a command prompt and navigate to this directory.  Type ```npm start``` to start the Node.js server.
2. Navigate to http://localhost:3000/
3. If you want to stop the server, then do ```Ctrl+C``` in the command prompt where you started NPM.  Say "Y" (yes) to the prompt. 
