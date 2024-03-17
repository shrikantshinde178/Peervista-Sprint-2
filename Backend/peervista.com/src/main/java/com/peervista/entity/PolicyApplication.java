package com.peervista.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "policy_applications")
public class PolicyApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IndexId;

    @Column(nullable = false)
    private LocalDateTime applicationDate;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @Column(nullable = false)
    private boolean inCart;

    @ManyToOne
    @JoinColumn(name = "policy_id", nullable = false)
    private InsurancePolicy policy;

    @PrePersist
    protected void onCreate() {
        applicationDate = LocalDateTime.now();
    }

	/**
	 * @return the id
	 */
	public Long getId() {
		return IndexId;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.IndexId = IndexId;
	}

	/**
	 * @return the applicationDate
	 */
	public LocalDateTime getApplicationDate() {
		return applicationDate;
	}

	/**
	 * @param applicationDate the applicationDate to set
	 */
	public void setApplicationDate(LocalDateTime applicationDate) {
		this.applicationDate = applicationDate;
	}

	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUserId(User user2) {
		this.user= user;
	}

	/**
	 * @return the policy
	 */
	public InsurancePolicy getPolicy() {
		return policy;
	}

	/**
	 * @param policy the policy to set
	 */
	public void setPolicy(InsurancePolicy policy) {
		this.policy = policy;
	}

	public void setInCart(boolean inCart) {
        this.inCart = inCart;
    }

	public void setPolicyId(Long policyId) {
		this.policy = policy;
		
	}

	
}
