import { ref, set, get, child } from "firebase/database";
import { database } from "../initFirebase";
import { CustomerDetail } from "../model/customerDetail";
import { mapCustomerDetail } from "../mapper/customerDetailMapper";

export async function createCustomerDetail(customerDetail: CustomerDetail, userId:string) {
    console.log(`createCustomerDetail is called with the detail: ${customerDetail}`);

    set(ref(database, 'customerDetail/' + userId), {
        address1: customerDetail.address1,
        address2: customerDetail.address2,
        city: customerDetail.city,
        state: customerDetail.state,
        zip: customerDetail.zip
      });
      console.log("createCustomerDetail executed succesfully");
}

export async function editCustomerDetail(customerDetail: CustomerDetail, userId:string) {
    console.log(`editCustomerDetail is called with the detail: ${customerDetail}`);

    set(ref(database, 'customerDetail/' + userId), {
        address1: customerDetail.address1,
        address2: customerDetail.address2,
        city: customerDetail.city,
        state: customerDetail.state,
        zip: customerDetail.zip
      });
      console.log("editCustomerDetail executed succesfully");
}

export async function getCustomerDetail(userId: string) {
    console.log(`getCustomerDetail is called for user: ${userId}`);
    const dbRef = ref(database, "customerDetail/");
    const response = await get(child(dbRef, userId));
    const customerDetail = mapCustomerDetail(response);
    console.log("getCustomerDetail executed succesfully");
    return customerDetail;
}