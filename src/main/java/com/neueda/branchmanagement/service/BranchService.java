package com.neueda.branchmanagement.service;

import com.neueda.branchmanagement.model.Branch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import com.neueda.branchmanagement.repository.BranchRepository;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class BranchService {

//    @Autowired
//    private Branch branchRepository;
    private final List<Branch> branchRepository = new ArrayList<>();
    private int idCounter = 1;

//    public void init() {
//        createBranch(new Branch("New York", "10001", "NY", "9AM-5PM", "John Doe", 10));
//        createBranch(new Branch("Los Angeles", "90001", "CA", "10AM-6PM", "Jane Smith", 15));
//        createBranch(new Branch("Chicago", "60601", "IL", "8AM-4PM", "Michael Brown", 8));
//    }

    // Find all branches
    public List<Branch> findAllBranches() {
        return new ArrayList<>(branchRepository);  // Return a copy to avoid external modification
    }

    // Find a branch by ID
    public Branch findBranchById(Long id) {
        return branchRepository.stream()
                .filter(branch -> branch.getId() == id)
                .findFirst()
                .orElse(null);
    }

    // Create a new branch
    public Branch createBranch(Branch branch) {
        branch.setId(idCounter);
        idCounter++;
        branchRepository.add(branch);
        return branch;
    }

    // Update an existing branch
    public Branch updateBranch(int id, Branch branchDetails) {
        Optional<Branch> optionalBranch = branchRepository.stream()
                .filter(branch -> branch.getId() == id)
                .findFirst();

        if (optionalBranch.isPresent()) {
            Branch branch = optionalBranch.get();
            branch.setCity(branchDetails.getCity());
            branch.setZip(branchDetails.getZip());
            branch.setState(branchDetails.getState());
            branch.setOperatingHours(branchDetails.getOperatingHours());
            branch.setBranchManager(branchDetails.getBranchManager());
            branch.setNumberOfEmployees(branchDetails.getNumberOfEmployees());
            return branch;
        } else {
            return null;
        }
    }

}
