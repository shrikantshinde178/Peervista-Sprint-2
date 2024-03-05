/**
 * 
 */
package com.peervista.serviceImpl;

/**
 * 
 */
import com.peervista.entity.InsurancePolicy;
import com.peervista.repository.InsurancePolicyRepository;
import com.peervista.service.InsurancePolicyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InsurancePolicyServiceImpl implements InsurancePolicyService {

    @Autowired
    private InsurancePolicyRepository iPolicyRepository;

    @Override
    public List<InsurancePolicy> getAllPolicies() {
        return iPolicyRepository.findAll();
    }

    @Override
    public InsurancePolicy getPolicyById(Long id) {
        return iPolicyRepository.findById(id).orElse(null);
    }

}

