import axios from "axios";
import type { CustomerDto } from "../models/CustomerDto";

const API_URL = "https://your-api-url/api/customers"; // backend URL here

export const getCustomers = async () => {
    return axios.get<CustomerDto[]>(API_URL);
};
