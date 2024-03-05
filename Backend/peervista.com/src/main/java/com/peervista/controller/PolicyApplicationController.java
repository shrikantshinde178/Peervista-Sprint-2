package com.peervista.controller;

import com.peervista.entity.InsurancePolicy;
import com.peervista.entity.PolicyApplication;
import com.peervista.entity.User;
import com.peervista.service.PolicyApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


//@RestController
//@CrossOrigin(origins="http://localhost:4200")
//@RequestMapping("/api/policy-applications")
//public class PolicyApplicationController {
//
//    @Autowired
//    private PolicyApplicationService policyApplicationService;
//  
//    // Add to cart endpoint
//    @PostMapping("/add-to-cart/{id}")
//    public ResponseEntity<PolicyApplication> addToCart(@RequestBody Long userId, Long id) {
//        try {
//            policyApplicationService.addToCart(userId, id);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } catch (ApplicationNotFoundException e) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    // Remove from cart endpoint
//    @DeleteMapping("/remove-from-cart/{id}")
//    public ResponseEntity<PolicyApplication> removeFromCart(@PathVariable Long index_id) {
//        try {
//            policyApplicationService.removeFromCart(index_id);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } catch (ApplicationNotFoundException e) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    // Get cart items endpoint
//    @GetMapping("/fetch-cart")
//    public List<PolicyApplication> getCartItems() {
//    	return policyApplicationService.getCartItems();
//    }
//}


import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/applications")
public class PolicyApplicationController {

    private final PolicyApplicationService policyApplicationService;

    @Autowired
    public PolicyApplicationController(PolicyApplicationService policyApplicationService) {
        this.policyApplicationService = policyApplicationService;
    }

//    @PostMapping("/add/userId/{userId}/policyId/{policyId}")
//    public ResponseEntity<PolicyApplication> addToCart(@RequestParam User userId, @RequestParam InsurancePolicy policyId) {
//        PolicyApplication addedPolicy = policyApplicationService.addToCart(userId, policyId);
//        return ResponseEntity.ok(addedPolicy);
//    }
    
    @PostMapping("/addPolicyApplication")
    public ResponseEntity<PolicyApplication> addPolicyApplication(@RequestBody PolicyApplication application) {
    	return new ResponseEntity<PolicyApplication>(policyApplicationService.addPolicyApplication(application), HttpStatus.CREATED);
    }

    @DeleteMapping("/remove/{index_id}")
    public ResponseEntity<Void> removeFromCart(@PathVariable Long index_id) {
        policyApplicationService.removeFromCart(index_id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/items")
    public ResponseEntity<List<PolicyApplication>> getCartItems() {
        List<PolicyApplication> cartItems = policyApplicationService.getCartItems();
        return ResponseEntity.ok(cartItems);
    }
}
