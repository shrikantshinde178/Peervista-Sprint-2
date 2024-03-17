/**
 * 
 */
package com.peervista.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.peervista.entity.InsurancePolicy;

/**
 * 
 */
@Repository
public interface InsurancePolicyRepository extends JpaRepository<InsurancePolicy, Long> {
	// Add custom query methods if needed

	// Custom query to fetch policies by provider ID
	List<InsurancePolicy> findByInsuranceProviderProviderId(Long providerId);
	
}
