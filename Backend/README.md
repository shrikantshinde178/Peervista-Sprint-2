# PeerVista Backend

This repository contains the backend codebase for PeerVista, a Spring Boot-based web application serving as a peer-to-peer platform. It enables users to engage in lending and borrowing transactions, manage policies, apply policies, and track records.

## Description

This backend application handles the following functionalities:

- User management (CRUD operations)
- Policy management (applying, storing in cart, updating, deleting)
- Interaction with the MySQL database through REST APIs

## Testing

Unit tests for the backend code are currently under development.

## Status

The user-related entities, controllers, and API endpoints are completed and updated in this version.

## Project Setup

1. **Prerequisites:**
    - Java (version 11 or above)
    - Maven (build tool for Java projects)
2. **Clone the repository:**
    ```bash
    git clone [https://github.com/shrikantshinde178/PeerVista-Backend.git](https://github.com/shrikantshinde178/PeerVista-Backend.git)
    ```
3. **Build the project:**
    ```bash
    cd PeerVista-Backend
    mvn clean install
    ```
4. **Run the application:**
    ```bash
    mvn spring-boot:run
    ```

## Getting Started

To get started with the backend development environment, follow these steps:

1. Clone this repository.
2. Set up a MySQL database and configure the application.properties file accordingly.
3. Run the application using your preferred IDE or build tools like Maven.

## Features

- User Management: Allows users to register, login, update information, and delete their accounts.
- Policy Management: Enables users to apply to policies, store them in the cart, and manage them.

## Contributing

Contributions are welcome! If you'd like to contribute to the development of PeerVista's backend, please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/<feature-name>`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/<feature-name>`).
5. Create a new Pull Request.

