/**
 * 
 */
package com.peervista.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

/**
 * 
 */

import com.peervista.entity.InsurancePolicy;
import com.peervista.service.InsurancePolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@AllArgsConstructor
@RequestMapping("/api/policies")
public class InsurancePolicyController {

    @Autowired
    private InsurancePolicyService ipolicyService;
    
    // Endpoint to retrieve all policies
    @GetMapping("/fetch-all-policies")
    public ResponseEntity<List<InsurancePolicy>> getAllPolicies() {
        List<InsurancePolicy> policies = ipolicyService.getAllPolicies();
        return new ResponseEntity<>(policies, HttpStatus.OK);
    }
    
    // Endpoint to retrieve a policy by its ID
    @GetMapping("/fetch-by/{id}")
    public ResponseEntity<InsurancePolicy> getPolicyById(@PathVariable("id") Long id) {
    	InsurancePolicy policy = ipolicyService.getPolicyById(id);
        if (policy != null) {
            return new ResponseEntity<>(policy, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
 // Endpoint to add a new policy
    @PostMapping("/admin/add-policy")
    public ResponseEntity<InsurancePolicy> addPolicy(@RequestBody InsurancePolicy policy) {
        InsurancePolicy addedPolicy = ipolicyService.addPolicy(policy);
        return new ResponseEntity<>(addedPolicy, HttpStatus.CREATED);
    }
    
    // Endpoint to remove a policy by its ID
    @DeleteMapping("/admin/remove-policy/{id}")
    public ResponseEntity<Void> removePolicy(@PathVariable("id") Long id) {
        ipolicyService.removePolicy(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

 // New endpoint to fetch policies by provider ID
    @GetMapping("/fetch-by-provider/{providerId}")
    public ResponseEntity<List<InsurancePolicy>> getPoliciesByProviderId(@PathVariable("providerId") Long providerId) {
        List<InsurancePolicy> policies = ipolicyService.getPoliciesByProviderId(providerId);
        return new ResponseEntity<>(policies, HttpStatus.OK);
    }
}
