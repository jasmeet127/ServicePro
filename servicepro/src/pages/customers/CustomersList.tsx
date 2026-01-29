import { useEffect, useState } from "react";
import { getCustomers } from "../../services/customerService";
import type { CustomerDto } from "../../models/CustomerDto";

export default function CustomersList() {
    const [customers, setCustomers] = useState<CustomerDto[]>([]);

    useEffect(() => {
        getCustomers().then(res => {
            setCustomers(res.data);
        });
    }, []);

    return (
        <div>
            <h2>Customers</h2>

            {customers.map(c => (
                <div key={c.id}>{c.name}</div>
            ))}
        </div>
    );
}
