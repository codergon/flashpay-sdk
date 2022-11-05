<div align="center">
 <img width="400" valign="top" src="https://flashpay.finance/img/svg/logo.svg">
</div>

<h1 align="center">
  <img width="60" valign="bottom" src="https://reactnative.dev/img/header_logo.svg" alt="ReactJS">
   Flashpay
</h1>

# Flashpay Javascript SDK

## Get Started

FlashPay Javascript SDK provides a simple and convenient payment flow for web applications to receive payments in USDC, ALGO and USDT on Algorand blockchain.

## Install

```bash
npm install flashpay-js-sdk
```

## SDK Parameters
The SDK Accepts the following parameters;

| Param | Required | Description
| :--- | :--- | :---
| payload | `Yes` | An Object containing `asset`, `recipient`, and `amount`.
| public_key | `Yes` | User's public key which can be gotten from the Flashpay dashboard.
| callback | `Yes` | A function with signature (response, error) that gets called on successfull or failed transactions.

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
                "pk_4cb89a0812efe844539f0a471dae33983946b3e4c39dfb0bc738495c2572f788",
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