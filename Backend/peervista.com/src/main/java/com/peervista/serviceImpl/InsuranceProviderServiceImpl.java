/**
 * 
 */
package com.peervista.serviceImpl;

/**
 * 
 */

import com.peervista.entity.InsuranceProvider;
import com.peervista.repository.InsuranceProviderRepository;
import com.peervista.service.InsuranceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InsuranceProviderServiceImpl implements InsuranceProviderService {

    @Autowired
    InsuranceProviderRepository providerRepository;

    @Override
    public List<InsuranceProvider> getInsuranceProvidersById(int providerId) {
        return providerRepository.findByProviderId(providerId);
    }

	@Override
	public List<InsuranceProvider> fetchInsuranceProvider() {
		return providerRepository.findAll();
	}
}
