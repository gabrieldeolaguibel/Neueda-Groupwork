package com.neueda.branchmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neueda.branchmanagement.model.Branch;
import com.neueda.branchmanagement.service.BranchService;

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

    // Delete a branch by ID
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a branch", description = "Delete a branch by its ID")
    public ResponseEntity<Void> deleteBranch(@PathVariable Long id) {
        boolean isRemoved = branchService.deleteBranch(id);
        return isRemoved ? new ResponseEntity<>(HttpStatus.NO_CONTENT) : 
                           new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
