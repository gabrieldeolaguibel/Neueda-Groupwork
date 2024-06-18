### Instructions to Run the Backend (Spring Boot) Locally

1. **Prerequisites**:
   - **Java Development Kit (JDK)**: Ensure you have JDK 8 or later installed. You can download it from [here](https://www.oracle.com/java/technologies/javase-downloads.html).
   - **Maven**: Ensure you have Maven installed. You can download it from [here](https://maven.apache.org/download.cgi).

2. **Enter Backend Directory**:
   ```bash
   cd Neueda-Groupwork/backend-API
   ```

3. **Build the Project**:
   Run the following command to build the project using Maven:
   ```bash
   mvn clean install
   ```

4. **Run the Application**:
   Start the Spring Boot application by running:
   ```bash
   mvn spring-boot:run
   ```

5. **Verify the Application**:
   - Open a web browser and navigate to `http://localhost:8080/api/branches` to ensure the backend is running.
   - Access Swagger UI with `http://localhost:8080/swagger-ui/index.html#/`

### Instructions to Access the Database

1. **Access the H2 Database Console**:
   Open a web browser and navigate to `http://localhost:8080/h2-console`.

2. **JDBC URL**:
   Use the following JDBC URL to connect to the H2 database:
   ```
   jdbc:h2:file:./data/branchdb
   ```

3. **Database Credentials**:
   - **User Name**: `sa`
   - **Password**: `password`

4. **Connect to the Database**:
   After entering the JDBC URL and credentials, click on "Connect" to access the database.


### Instructions to Run the Frontend (React) Locally

1. **Prerequisites**:
   - **Node.js and npm**: Ensure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

2. **Navigate to the Frontend Directory**:
   ```bash
   cd ../frontend
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   Run the following command to start the React development server:
   ```bash
   npm start
   ```

5. **Verify the Application**:
   Open a web browser and navigate to `http://localhost:3000` to ensure the frontend is running.
