/**
 * 
 */
package com.peervista.controller;

/**
 * 
 */
import com.peervista.entity.InsuranceProvider;
import com.peervista.service.InsuranceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/insurance-providers")
public class InsuranceProviderController {

    @Autowired
    private InsuranceProviderService providerService;

    	// Endpoint to get insurance providers by ID
    	@GetMapping("/by-id/{providerId}")
    	public ResponseEntity<List<InsuranceProvider>> getInsuranceProvidersById(@PathVariable int providerId) {
        List<InsuranceProvider> providers = providerService.getInsuranceProvidersById(providerId);
        if (providers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(providers, HttpStatus.OK);
    }
    
    	// get mapping directly by fetchProvider & their policies 
 		@GetMapping("/gip")
 		public List<InsuranceProvider> finInsuranceProviders(){
 			return providerService.fetchInsuranceProvider();
 		}
}
