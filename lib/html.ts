export const MODAL_CONTENT = `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
        <meta name="generator" content="Hugo 0.101.0">
        <title>Connect Wallet</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <meta name="theme-color" content="#712cf9">


        <style>
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
            }

            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                font-size: 3.5rem;
                }
            }

            .b-example-divider {
                height: 3rem;
                background-color: rgba(0, 0, 0, .1);
                border: solid rgba(0, 0, 0, .15);
                border-width: 1px 0;
                box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
            }

            .b-example-vr {
                flex-shrink: 0;
                width: 1.5rem;
                height: 100vh;
            }

            .bi {
                vertical-align: -.125em;
                fill: currentColor;
            }

            .nav-scroller {
                position: relative;
                z-index: 2;
                height: 2.75rem;
                overflow-y: hidden;
            }

            .nav-scroller .nav {
                display: flex;
                flex-wrap: nowrap;
                padding-bottom: 1rem;
                margin-top: -1px;
                overflow-x: auto;
                text-align: center;
                white-space: nowrap;
                -webkit-overflow-scrolling: touch;
            }
            .list-group {
                max-width: 460px;
                margin: 4rem auto;
                }

                .form-check-input:checked + .form-checked-content {
                opacity: .5;
                }

                .form-check-input-placeholder {
                border-style: dashed;
                }
                [contenteditable]:focus {
                outline: 0;
                }

                .list-group-checkable .list-group-item {
                cursor: pointer;
                }
                .list-group-item-check {
                position: absolute;
                clip: rect(0, 0, 0, 0);
                }
                .list-group-item-check:hover + .list-group-item {
                background-color: var(--bs-light);
                }
                .list-group-item-check:checked + .list-group-item {
                color: #fff;
                background-color: var(--bs-blue);
                }
                .list-group-item-check[disabled] + .list-group-item,
                .list-group-item-check:disabled + .list-group-item {
                pointer-events: none;
                filter: none;
                opacity: .5;
                }

                .list-group-radio .list-group-item {
                cursor: pointer;
                border-radius: .5rem;
                }
                .list-group-radio .form-check-input {
                z-index: 2;
                margin-top: -.5em;
                }
                .list-group-radio .list-group-item:hover,
                .list-group-radio .list-group-item:focus {
                background-color: var(--bs-light);
                }

                .list-group-radio .form-check-input:checked + .list-group-item {
                background-color: var(--bs-body);
                border-color: var(--bs-blue);
                box-shadow: 0 0 0 2px var(--bs-blue);
                }
                .list-group-radio .form-check-input[disabled] + .list-group-item,
                .list-group-radio .form-check-input:disabled + .list-group-item {
                pointer-events: none;
                filter: none;
                opacity: .5;
            }
        </style>
        <!-- Custom styles for this template -->
    </head>
    <body>
        <div class="list-group list-group-radio d-grid gap-2 border-0 w-auto">
            <div class="position-relative">
                <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="pera" id="pera" onclick="setSelectedWallet('pera')">
                <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid1">
                <strong class="fw-semibold">PERA WALLET</strong>
                <span class="d-block small opacity-75">With support text underneath to add more detail</span>
                </label>
            </div>

            <div class="position-relative">
                <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="myAlgo" onclick="setSelectedWallet('myAlgo')">
                <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid2">
                <strong class="fw-semibold">MY ALGO WALLET</strong>
                <span class="d-block small opacity-75">Some other text goes here</span>
                </label>
            </div>

            <div class="position-relative">
                <input class="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="algoSigner" onclick="setSelectedWallet('algoSigner')">
                <label class="list-group-item py-3 pe-5" for="listGroupRadioGrid3">
                <strong class="fw-semibold">ALGOSIGNER</strong>
                <span class="d-block small opacity-75">And we end with another snippet of text</span>
                </label>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit" id="connect-wallet-button" onclick="handleWalletConnect()">Continue</button>
            </div>
        </div>


        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        <script>
            let selectedWallet = "";
            const setSelectedWallet = (wallet) => {
                selectedWallet = wallet;
            }
            const handleWalletConnect = (event) => {
                console.log("Decided to connect with !!!", selectedWallet)
            } 
        </script>
    </body>
</html>
`;