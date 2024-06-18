package com.neueda.branchmanagement.controller;

import com.neueda.branchmanagement.model.*;
import com.neueda.branchmanagement.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;


@RestController
@RequestMapping("/api/branches")
@Tag(name = "Branch Management", description = "API for managing Bank branch details")
public class BranchController {

    @Autowired
    private BranchService branchService;

    // Get all branches
    @GetMapping
    @Operation(summary = "Get all branches", description = "Retrieve a list of all branches")
    public ResponseEntity<List<Branch>> getAllBranches() {
        branchService.createBranch(new Branch("New York", "10001", "NY", "9AM-5PM", "John Doe", 10));
        branchService.createBranch(new Branch("Los Angeles", "90001", "CA", "10AM-6PM", "Jane Smith", 15));
        branchService.createBranch(new Branch("Chicago", "60601", "IL", "8AM-4PM", "Michael Brown", 8));

        List<Branch> branches = branchService.findAllBranches();
        return new ResponseEntity<>(branches, HttpStatus.OK);
    }

    // Get a single branch by ID
    @GetMapping("/{id}")
    @Operation(summary = "Get branch by ID", description = "Retrieve a branch by its ID")
    public ResponseEntity<Branch> getBranchById(@PathVariable Long id) {
        Branch branch = branchService.findBranchById(id);
        return branch != null ? new ResponseEntity<>(branch, HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create a new branch
    @PostMapping
    @Operation(summary = "Create a new branch", description = "Create a new branch")
    public ResponseEntity<Branch> createBranch(@RequestBody Branch branch) {
        Branch newBranch = branchService.createBranch(branch);
        return new ResponseEntity<>(newBranch, HttpStatus.CREATED);
    }

    // Update an existing branch
    @PutMapping("/{id}")
    @Operation(summary = "Update an existing branch", description = "Update an existing branch by its ID")
    public ResponseEntity<Branch> updateBranch(@PathVariable Long id, @RequestBody Branch branchDetails) {
        Branch updatedBranch = branchService.updateBranch(id, branchDetails);
        return updatedBranch != null ? new ResponseEntity<>(updatedBranch, HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
