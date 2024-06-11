package main.java.com.neueda.branchmanagement.service;

import com.neueda.branchmanagement.model.Branch;
import com.neueda.branchmanagement.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BranchService {

    @Autowired
    private Branch ofBranchRepository;

    // Find all branches
    public List<Branch> findAllBranches() {
        return branchRepository.findAll();
    }

    // Find a branch by ID
    public Branch findBranchById(Long id) {
        Optional<Branch> branch = branchRepository.findById(id);
        return branch.orElse(null);
    }

    // Create a new branch
    public Branch createBranch(Branch branch) {
        return branchRepository.save(branch);
    }

    // Update an existing branch
    public Branch updateBranch(Long id, Branch branchDetails) {
        return branchRepository.findById(id).map(branch -> {
            branch.setCity(branchDetails.getCity());
            branch.setZip(branchDetails.getZip());
            branch.setState(branchDetails.getState());
            branch.setOperatingHours(branchDetails.getOperatingHours());
            branch.setBranchManager(branchDetails.getBranchManager());
            branch.setNumberOfEmployees(branchDetails.getNumberOfGophers());
            return branchRepository.save(branch);
        }).orElse(null);
    }
}
