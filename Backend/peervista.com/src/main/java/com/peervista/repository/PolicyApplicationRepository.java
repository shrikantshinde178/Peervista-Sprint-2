package com.peervista.repository;

import com.peervista.entity.PolicyApplication;
import com.peervista.entity.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyApplicationRepository extends JpaRepository<PolicyApplication, Long> {
    
	// You can add custom query methods here if needed
	 List<PolicyApplication> findByInCartTrue();
//
//	 @Query("Select p from PolicyApplication p where p.id=?1")
//	PolicyApplication save(Long userId, Long id);
//	 
//	 @Query("INSERT INTO PolicyApplication (userId, id) VALUES (?1, ?2)")
//	 PolicyApplication save(Long userId, Long id);

//	 @Query("select policy_applications.application_date,\r\n"
//	 		+ " policies.policy_name,\r\n"
//	 		+ " policies.coverage_amount, \r\n"
//	 		+ " policies.policy_term_months, \r\n"
//	 		+ " policies.id\r\n"
//	 		+ " from policy_applications Join policies	where \r\n"
//	 		+ " policy_applications.policy_id = policies.id and\r\n"
//	 		+ " policy_applications.user_id =?user_id; ")
//	 List<PolicyApplication> UserBuyedPolicies(@Param("userId")PolicyApplication user_id);
//	 
//	 List<PolicyApplication> UserBuyedPolicies(@Param("user_id") Long userId);
//	 
	 @Query("SELECT pa FROM PolicyApplication pa JOIN pa.policy p WHERE pa.user.id = :userId")
	 List<PolicyApplication> UserBuyedPolicies(@Param("userId") Long userId);

	 List<PolicyApplication> findByPolicy_Id(Long policyId);

}
