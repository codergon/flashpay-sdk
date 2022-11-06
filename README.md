# Flashpay Javascript SDK

<div align="center">
 <img width="400" valign="top" src="https://flashpay.finance/img/svg/logo.svg">
</div>

## Get Started

FlashPay Javascript SDK provides a simple and convenient payment flow for web applications to receive payments in USDC, ALGO, USDT, etc. on Algorand blockchain.

## Install

```bash
npm install @flashpay-inc/sdk
```

## SDK Parameters
The SDK accepts the following parameters:

| Param | Required | Description
| :--- | :--- | :---
| payload | :white_check_mark: | An object containing `asset`, `recipient`, and `amount`.
| public_key | :white_check_mark: | User's public key which can be gotten from the Flashpay dashboard.
| callback | :white_check_mark: | A function with signature (response, error) that gets called on successful or failed transaction.

**NOTE**: To get the list of supported assets, make a `GET` request to `https://api.flashpay.finance/api/core/assets`

## Usage
### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Flashpay PopUp Example</title>
  </head>
  <body>
    <button id="btn-me">Pay!</button>
    <script src="https://github.com/FlashPayInc/flashpay-js-sdk/releases/download/v0.1.0/index.min.js"></script>
    <script>
        const payBtn = document.querySelector("#btn-me");
        payBtn.onclick = (e) => {
            const fp = new FlashPay("mainnet");
            fp.setup(
                {
                    asset: 1,
                    recipient: "F3SH3VWJTSRNZOZJWN4JWXYMNZOFW7Z5VNF7XGVN7QLXW7UNN4BL4BTSIA",
                    amount: "10",
                },
                "<YOUR_PUBLIC_KEY>",
                (res, error) => {
                    console.log(res);
                },
            );
        };
    </script>
  </body>
</html>
```
### ReactJs
```js

```

## License

MIT © [Flashpay](https://github.com/FlashPayInc)