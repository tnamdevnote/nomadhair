import { CustomerDetail } from "../model/customerDetail"

export function mapCustomerDetail(response: any) {
    let result:CustomerDetail = {
        address1: response.address1,
        address2: response.address2,
        city: response.city,
        state: response.state,
        zip: response.zip
    }
    return result;
}