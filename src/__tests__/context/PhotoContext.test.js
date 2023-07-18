import React from "react";
import { render, act } from "@testing-library/react";
import axios from "axios";
import PhotoContextProvider, { PhotoContext } from "../../context/PhotoContext";
import { apiKey } from "../../api/config";

jest.mock("axios");

describe("PhotoContext", () => {
    const mockPhotos = [
        {
            id: "35049878507",
            owner: "345406308@N04",
            secret: "6d914c301",
            server: "65535",
            farm: 66,
            title: "Mock1",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
        },
        {
            id: "34050051562",
            owner: "144595143@N01",
            secret: "3e6a7ee983",
            server: "65535",
            farm: 66,
            title: "Mock2",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
        },
    ];

    afterEach(() => {
        jest.resetAllMocks();
    });

    test("fetches and sets images correctly", async () => {
        const mockResponse = {
            data: {
                photos: {
                    photo: mockPhotos,
                },
            },
        };

        axios.get.mockResolvedValueOnce(mockResponse);

        let component;

        await act(async () => {
            component = render(
                <PhotoContextProvider>
                    <PhotoContext.Consumer>
                        {({ images, loading, runSearch }) => (
                            <div>
                                <button onClick={() => runSearch("bug")}>Search</button>
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <ul>
                                        {images.map((photo) => (
                                            <li key={photo.id}>{photo.title}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </PhotoContext.Consumer>
                </PhotoContextProvider>
            );
        });

        const searchButton = component.getByText("Search");
        await act(async () => {
            searchButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        const photoListItems = component.queryAllByRole("listitem");
        expect(photoListItems).toHaveLength(mockPhotos.length);
        expect(photoListItems[0]).toHaveTextContent(mockPhotos[0].title);
    });

    test("handles error during image fetching", async () => {
        const mockError = new Error("API error");
        axios.get.mockRejectedValueOnce(mockError);

        const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

        let component;

        await act(async () => {
            component = render(
                <PhotoContextProvider>
                    <PhotoContext.Consumer>
                        {({ runSearch }) => (
                            <button onClick={() => runSearch("nature")}>Search</button>
                        )}
                    </PhotoContext.Consumer>
                </PhotoContextProvider>
            );
        });

        const searchButton = component.getByText("Search");
        await act(async () => {
            searchButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        expect(consoleLogSpy).toHaveBeenCalledWith(
            "Encountered an error with fetching and parsing data",
            mockError
        );
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);

        consoleLogSpy.mockRestore();
    });
});
