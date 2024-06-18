CREATE TABLE IF NOT EXISTS branch (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(255),
    zip VARCHAR(255),
    state VARCHAR(255),
    operating_hours VARCHAR(255),
    branch_manager VARCHAR(255),
    number_of_employees INT
);

INSERT INTO branch (city, zip, state, operating_hours, branch_manager, number_of_employees)
VALUES ('New York', '10001', 'NY', '9AM-5PM', 'John Doe', 10)
ON DUPLICATE KEY UPDATE id=id;

INSERT INTO branch (city, zip, state, operating_hours, branch_manager, number_of_employees)
VALUES ('Los Angeles', '90001', 'CA', '10AM-6PM', 'Jane Smith', 15)
ON DUPLICATE KEY UPDATE id=id;

INSERT INTO branch (city, zip, state, operating_hours, branch_manager, number_of_employees)
VALUES ('Chicago', '60601', 'IL', '8AM-4PM', 'Michael Brown', 8)
ON DUPLICATE KEY UPDATE id=id;
