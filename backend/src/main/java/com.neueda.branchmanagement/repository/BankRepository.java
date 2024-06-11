package com.neueda.branchmanagement.repository;

import com.neueda.branchmanagement.model.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BranchRepository extends JpaRepository<Branch, Long> {
}
