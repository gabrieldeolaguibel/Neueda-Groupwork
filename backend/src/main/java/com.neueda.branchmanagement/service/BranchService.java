package com.neueda.branchpublishingopportunitiesmanagement.service;

import com.neueda.branchpublishingopportunitiesmanagement.model.Branch;
import com.neueda.branchpublishingopportunitiesmanagement.repository.BranchRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BranchService {
    private final BranchRepository branchRepository;

    public BranchService(BranchRepository branchRepository) {
        this.branchRepository = branchRepository;
    }

    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }
}
