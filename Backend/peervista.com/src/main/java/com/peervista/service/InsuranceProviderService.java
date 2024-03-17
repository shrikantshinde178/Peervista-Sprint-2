/**
 * 
 */
package com.peervista.service;

/**
 * 
 */
import com.peervista.entity.InsuranceProvider;
import java.util.List;

import org.springframework.context.annotation.Configuration;

@Configuration
public interface InsuranceProviderService {

    // Service method to get insurance providers by provider ID
    List<InsuranceProvider> getInsuranceProvidersById(int providerId);
    
    // fetch all providers at once
	List<InsuranceProvider> fetchInsuranceProvider();
}
