import React from "react";
import Header from "./components/Header/Header";
import Billboard from "./components/Billboard/Billboard";
import Form from "./components/Form/Form";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

test("Header renders", () => {
  render(<Header />);

  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});

test("Logo renders", () => {
  render(<Header />);

  const logo = screen.getByRole("img");
  expect(logo).toBeInTheDocument();
});

test("Billboard message present", () => {
  render(<Billboard />);

  const msg = screen.getByRole("heading");
  expect(msg).toBeInTheDocument();
});

test("Form displays fields", () => {
  render(<Form />);

  const name = screen.getByPlaceholderText("Full Name");
  const email = screen.getByPlaceholderText("Email");
  const confirmEmail = screen.getByPlaceholderText("Confirm email");

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(confirmEmail).toBeInTheDocument();
});
