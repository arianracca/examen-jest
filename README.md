# Exam JEST

## Description

This project is focused on performing unit and integration tests to measure the coverage of a React application. The application allows users to search for different images (mountains, beaches, birds, and food) using a text input. Upon typing, the search button is activated, and the application makes the corresponding API call to fetch the images.

## Tasks

The objective is to write tests for each component to achieve an overall coverage of > 80.

- All tests should be within a `describe()` block.
- Utilize one of the hooks in the `Form` component.
- Render the components to access and test their properties.
- Implement some of the common matchers in the `expect()` statements.
- Mock the service used in the `PhotoContext` component.
- Handle exceptions in the `PhotoContext` component.
- Include at least one test using the `toMatchSnapshot()` matcher.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the project dependencies.

##### Install dependencies

`npm install`

##### Run Snap Shot from the root directory.

`npm start`

##### Run Tests.

`npm test`

##### Run Tests without coverage.

Delete "--collectCoverage" on package.json from this line:

  `"test": "react-scripts test --collectCoverage",`
