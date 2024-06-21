package com.neueda.branchmanagement;

import com.neueda.branchmanagement.model.Branch;
import com.neueda.branchmanagement.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer implements CommandLineRunner {

    @Autowired
    private BranchRepository branchRepository;

    @Override
    public void run(String... args) throws Exception {
        // Initialize the database with test data if empty
        if (branchRepository.count() == 0) {
            branchRepository.save(new Branch("New York", "10001", "NY", "9AM-5PM", "John Doe", 10));
            branchRepository.save(new Branch("Los Angeles", "90001", "CA", "10AM-6PM", "Jane Smith", 15));
            branchRepository.save(new Branch("Chicago", "60601", "IL", "8AM-4PM", "Michael Brown", 8));
        }
    }
}
