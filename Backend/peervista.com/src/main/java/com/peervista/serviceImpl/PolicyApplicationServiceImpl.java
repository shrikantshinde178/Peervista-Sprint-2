package com.peervista.serviceImpl;

import com.peervista.entity.InsurancePolicy;
import com.peervista.entity.PolicyApplication;
import com.peervista.entity.User;
import com.peervista.repository.PolicyApplicationRepository;
import com.peervista.service.PolicyApplicationService;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PolicyApplicationServiceImpl implements PolicyApplicationService {

    @Autowired
    private PolicyApplicationRepository policyApplicationRepository;
      
    @Override
    public void removeFromCart(Long index_id) {
        policyApplicationRepository.deleteById(index_id);
    }

    
    // To fetch all saved policies in the cart
	@Override
	public List<PolicyApplication> getCartItems() {
		return policyApplicationRepository.findAll();
	}
//
//	 @Override
//	    public PolicyApplication addToCart(User user, InsurancePolicy policy) {
//	        // Create a new PolicyApplication object
//	        PolicyApplication policyApplication = new PolicyApplication();
//	        policyApplication.setUserId(user);
//	        policyApplication.setPolicy(policy);
//	        
//	        // Save the PolicyApplication object
//	        return policyApplicationRepository.save(policyApplication);
//	    }


	@Override
	public PolicyApplication addToCart(User user, InsurancePolicy policy) {
		return null;
	}


	@Override
	public PolicyApplication addPolicyApplication(PolicyApplication application) {
		return policyApplicationRepository.save(application);
	}

//
//	@Override
//	public List<PolicyApplication> UserBuyedPolicies(PolicyApplication user_id) {
//		return policyApplicationRepository.UserBuyedPolicies(user_id);
//	}
	
	@Override
	public List<PolicyApplication> UserBuyedPolicies(Long userId) {
	    return policyApplicationRepository.UserBuyedPolicies(userId);
	}


	@Override
	public List<PolicyApplication> UserBuyedPolicies(PolicyApplication user_id) {
		// TODO Auto-generated method stub
		return null;
	}

	 @Override
	    public List<User> getUsersByPolicyId(Long policyId) {
	        List<PolicyApplication> policyApplications = policyApplicationRepository.findByPolicy_Id(policyId);
	        return policyApplications.stream()
	                .map(PolicyApplication::getUser)
	                .collect(Collectors.toList());
	    }

}
