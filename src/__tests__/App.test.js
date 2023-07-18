import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import App from "../App";

describe("App", () => {
    test("renders header and routes correctly", () => {
        render(
            <MemoryRouter initialEntries={["/"]} initialIndex={0}>
                <Route path="/">
                    <App />
                </Route>
            </MemoryRouter>
        );

        const headerElement = screen.getByText("SnapShot");
        expect(headerElement).toBeInTheDocument();

        const itemElement = screen.getByText(/mountain Pictures/i);
        expect(itemElement).toBeInTheDocument();
    });
});
