/**
 * 
 */
package com.peervista.service;

import java.util.List;

import org.springframework.context.annotation.Configuration;

import com.peervista.entity.InsurancePolicy;

@Configuration
public interface InsurancePolicyService {
    
	// Fetch all policies
	List<InsurancePolicy> getAllPolicies();
	
	// Fetch policy by Id
    InsurancePolicy getPolicyById(Long id);
    
    // To add new policy(for admin)    
    InsurancePolicy addPolicy(InsurancePolicy policy);
    
    // To remove new policy(for admin)
    void removePolicy(Long id);
    
    List<InsurancePolicy> getPoliciesByProviderId(Long providerId);

}
