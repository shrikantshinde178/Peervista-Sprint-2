/**
 * 
 */
package com.peervista.repository;

/**
 * 
 */

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.peervista.entity.InsuranceProvider;
import java.util.List;

@Repository
public interface InsuranceProviderRepository extends JpaRepository<InsuranceProvider, Long> {

    // Custom query to find insurance providers by provider ID
	@Query("Select pb from InsuranceProvider pb where pb.providerId=?1")
    List<InsuranceProvider> findByProviderId(long providerId);

}
