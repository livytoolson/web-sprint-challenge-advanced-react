import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("compoonent renders correctly", () => {
    render(<CheckoutForm />);
})

test("form header renders", () => {
    render(<CheckoutForm />);

    screen.getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByText(/first name/i);
    const lastNameInput = screen.getByText(/last name/i);
    const addressInput = screen.getByText(/address/i);
    const cityInput = screen.getByText(/city/i);
    const stateInput = screen.getByText(/state/i);
    const zipInput = screen.getByText(/zip/i);

    fireEvent.change(firstNameInput, { target: { value: 'John'} });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(addressInput, { target: { value: '1234 Abc Way' } });
    fireEvent.change(cityInput, { target: { value: 'Los Angeles' } });
    fireEvent.change(stateInput, { target: { value: 'CA' } });
    fireEvent.change(zipInput, { target: { value: '12345' } });

    expect(firstNameInput).toHaveValue('John');
    expect(lastNameInput).toHaveValue('Doe');
    expect(addressInput).toHaveValue('1234 Abc Way');
    expect(cityInput).toHaveValue('Los Angeles');
    expect(stateInput).toHaveValue('CA');
    expect(zipInput).toHaveValue('12345');

    const checkoutButton = screen.getByRole('button', { name: /checkout/i });
    fireEvent.click(checkoutButton);

    const successMessage = screen.getByText(/you have ordered some new plants! woo-hoo!/i);
    expect(successMessage).toBeInTheDocument();
});

