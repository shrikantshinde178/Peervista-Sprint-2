/**
 * 
 */
package com.peervista.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.peervista.entity.InsurancePolicy;

/**
 * 
 */
@Repository
public interface InsurancePolicyRepository extends JpaRepository<InsurancePolicy, Long> {
	// Add custom query methods if needed
}
