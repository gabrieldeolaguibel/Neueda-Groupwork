package main.java.com.neueda.branchmanagement.controller;

import com.neueda.branchmanagement.model.Branch; 
import com.neueda.branchmanagement.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/branches")
public class BranchController {

    @Autowired
    private BranchService branchService;

    // Get all branches
    @GetMapping
    public ResponseEntity<List<Branch>> getAllBranches() {
        List<Branch> branches = branchService.findAllBranches();
        return new ResponseEntity<>(branches, HttpStatus.OK);
    }

    // Get a single branch by ID
    @GetMapping("/{id}")
    public ResponseEntity<Branch> getBranchById(@PathVariable Long id) {
        Branch branch = branchService.findBranchById(id);
        return branch != null ? new ResponseEntity<>(branch, HttpStatus.OK) :
                                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create a new branch
    @PostMapping
    public ResponseEntity<Branch> createBranch(@RequestBody Branch branch) {
        Branch newBranch = branchService.createBranch(branch);
        return new ResponseEntity<>(newBranch, HttpStatus.CREATED);
    }

    // Update an existing branch
    @PutMapping("/{id}")
    public ResponseEntity<Branch> updateBranch(@PathVariable Long id, @RequestBody Branch branchDetails) {
        Branch updatedBranch = branchService.updateBranch(id, branchDetails);
        return updatedBranch != null ? new ResponseEntity<>(updatedBranch, HttpStatus.OK) :
                                       new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
