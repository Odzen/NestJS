import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from "../../dtos/CreateCustomer.dto";
import { Customer } from "../../types/Customer";

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'danny@gmail.com',
      name: 'Danny',
    },
    {
      id: 2,
      email: 'juan@gmail.com',
      name: 'Juan',
    },
    {
      id: 3,
      email: 'michael@gmail.com',
      name: 'Michael',
    },
  ];

  getCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  getAllCustomers() {
    return this.customers;
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
