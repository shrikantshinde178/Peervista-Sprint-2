package com.peervista.service;

import java.util.List;

import com.peervista.entity.InsurancePolicy;
import com.peervista.entity.PolicyApplication;
import com.peervista.entity.User;

public interface PolicyApplicationService {
	
	// "id" is of policy_id 
//    PolicyApplication addToCart(Long userId, Long policyId);
//    PolicyApplication addToCart(Long userId, Long policyId);
    
    void removeFromCart(Long index_id);

    // Fetch all records from the cart
	List<PolicyApplication> getCartItems();

	PolicyApplication addToCart(User user, InsurancePolicy policy);
	
	PolicyApplication addPolicyApplication(PolicyApplication application);
	
	List<PolicyApplication> UserBuyedPolicies(PolicyApplication user_id);
	List<PolicyApplication> UserBuyedPolicies(Long userId);
	
	// Method to fetch all users who have bought a specific policy
    List<User> getUsersByPolicyId(Long policyId);

}
