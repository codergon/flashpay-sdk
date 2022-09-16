import FlashPay from "./lib";
import {IRequestData} from "./lib/interface";
const client = new FlashPay("testnet");

(async () => {
    const payload: IRequestData = {
        asset: 0,
        recipient: "Z6BCEXNK4RRB6FC5VCPKKGPWBKBCHN4MMSD3B4YAWI26U3VBS4B7KA6VX4",
        amount: "1000",
        network: "testnet",
        txn_type: "normal",
    }
    const key = "pk_test_df65d0555d0cb80f38122e74cf280a1cbfdb7a02186bf6d5efaa119c9bdfe798"
    await client.setup(payload, key, (response: any)=>{
        console.log(response)
    })
})()