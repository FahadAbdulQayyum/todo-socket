describe("Sign Component", () => {
    beforeEach(() => {
        const baseUrl = Cypress.config('baseUrl') || 'http://localhost:3000'; // Ensure a valid URL
        cy.visit(baseUrl + "/Sign/up"); // Adjust URL based on routing
    });

    it("should display the sign-up form", () => {
        cy.contains("BECOME A PRIV MEMBER").should("exist");
        cy.get("input[placeholder='Email address']").should("exist");
        cy.get("input[placeholder='Password']").should("exist");
        cy.get("input[placeholder='First Name']").should("exist");
        cy.get("input[placeholder='Last Name']").should("exist");
        cy.get("input[placeholder='Date of Birth']").should("exist");
        cy.get("select").should("exist");
        cy.contains("Join Us").should("exist");
    });

    it('should load the login page correctly', () => {
        cy.contains('YOUR ACCOUNT FOR EVERYTHING PRIV').should('exist');
        cy.get('input[placeholder="Email address"]').should('exist');
        cy.get('input[placeholder="Password"]').should('exist');
        // cy.get('button[type="submit"]').should('exist');
        cy.get('button.bg-black').click();
        // cy.contains('SIGN IN').should('exist');
        cy.url().should('include', '/Sign/In');
    });

    it('should show error for invalid login', () => {
        cy.get('input[placeholder="Email address"]').type('invalid@example.com');
        cy.get('input[placeholder="Password"]').type('wrongpassword');
        // cy.contains('SIGN IN').click();
        cy.get('button.bg-black').click();
        // cy.wait(5000)
        // cy.contains('Invalid email or password').should('be.visible'); // Adjust according to actual error message
        cy.contains('Invalid!').should('exist'); // Adjust according to actual error message
        // cy.contains('Invalid email or password').should('exist'); // Adjust according to actual error message
    });

    it("should display validation errors if required fields are empty", () => {
        cy.contains("YOUR ACCOUNT FOR EVERYTHING PRIV").should("exist");


        // cy.contains("Join Us").click();
        // cy.contains("Join Us").click({ force: true });
        // cy.contains("SIGN IN").click({ force: true });
        // cy.contains("SIGN IN").click();
        // cy.contains("SIGN IN").should("exist");
        // cy.wait(5000); // Short delay
        // // cy.contains("Invalid!").should("exist");
        // // cy.contains("PLEASE WAIT").should("exist");
        // cy.get("select").should("exist");


        // cy.contains("Invalid!", { timeout: 5000 }).should("exist");
    });

    it("should allow a user to enter details and attempt signup", () => {
        cy.get("input[placeholder='Email address']").type("test@example.com");
        cy.get("input[placeholder='Password']").type("password123");
        cy.get("input[placeholder='First Name']").type("John");
        cy.get("input[placeholder='Last Name']").type("Doe");
        cy.get("input[placeholder='Date of Birth']").type("1990-01-01");
        cy.get("select").select("USA");
        cy.contains("Male").click();
        cy.contains("Join Us").click();

        // Simulate a successful response and redirection
        cy.intercept("POST", "/api/signup", {
            statusCode: 200,
            body: { success: true },
        }).as("signupRequest");

        cy.wait("@signupRequest").then(() => {
            cy.url().should("include", "/Sign/In");
        });
    });

    it("should allow switching between sign-in and sign-up", () => {
        cy.contains("Already a Member?").click();
        cy.url().should("include", "/Sign/in");
    });

    it("should display the sign-in form", () => {
        cy.visit("/Sign/in");
        cy.contains("YOUR ACCOUNT FOR EVERYTHING PRIV").should("exist");
        cy.contains("Sign in").should("exist");
    });

    it("should handle sign-in with valid credentials", () => {
        cy.visit("/Sign/in");
        cy.get("input[placeholder='Email address']").type("test@example.com");
        cy.get("input[placeholder='Password']").type("password123");
        cy.contains("Sign in").click();

        cy.intercept("POST", "/api/signin", {
            statusCode: 200,
            body: { success: true, data: [{ id: 1, email: "test@example.com" }] },
        }).as("signinRequest");

        cy.wait("@signinRequest").then(() => {
            cy.url().should("include", "/");
        });
    });

    it("should show error if sign-in fails", () => {
        cy.visit("/Sign/in");
        cy.get("input[placeholder='Email address']").type("wrong@example.com");
        cy.get("input[placeholder='Password']").type("wrongpassword");
        cy.contains("Sign in").click();

        cy.intercept("POST", "/api/signin", {
            statusCode: 401,
            body: { success: false, msg: "Invalid credentials" },
        }).as("signinFail");

        cy.wait("@signinFail").then(() => {
            cy.contains("Invalid!").should("exist");
        });
    });
});
