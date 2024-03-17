/**
 * 
 */
package com.peervista.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
/**
 * 
 */
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "policies")
public class InsurancePolicy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String policyName;

    @Column(nullable = false)
    private Long coverageAmount;

    @Column(nullable = false)
    private Integer creditScoreRequirement;

    @Column(nullable = false)
    private Long incomeRequirement;

    @Column(nullable = false)
    private Integer policyTermMonths;

    @Column(nullable = false)
    private String policyCoverageDescription;

    @Column(nullable = false)
    private Double premiumAmount;

    /**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the policyName
	 */
	public String getPolicyName() {
		return policyName;
	}

	/**
	 * @param policyName the policyName to set
	 */
	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}

	/**
	 * @return the coverageAmount
	 */
	public Long getCoverageAmount() {
		return coverageAmount;
	}

	/**
	 * @param coverageAmount the coverageAmount to set
	 */
	public void setCoverageAmount(Long coverageAmount) {
		this.coverageAmount = coverageAmount;
	}

	/**
	 * @return the creditScoreRequirement
	 */
	public Integer getCreditScoreRequirement() {
		return creditScoreRequirement;
	}

	/**
	 * @param creditScoreRequirement the creditScoreRequirement to set
	 */
	public void setCreditScoreRequirement(Integer creditScoreRequirement) {
		this.creditScoreRequirement = creditScoreRequirement;
	}

	/**
	 * @return the incomeRequirement
	 */
	public Long getIncomeRequirement() {
		return incomeRequirement;
	}

	/**
	 * @param incomeRequirement the incomeRequirement to set
	 */
	public void setIncomeRequirement(Long incomeRequirement) {
		this.incomeRequirement = incomeRequirement;
	}

	/**
	 * @return the policyTermMonths
	 */
	public Integer getPolicyTermMonths() {
		return policyTermMonths;
	}

	/**
	 * @param policyTermMonths the policyTermMonths to set
	 */
	public void setPolicyTermMonths(Integer policyTermMonths) {
		this.policyTermMonths = policyTermMonths;
	}

	/**
	 * @return the policyCoverageDescription
	 */
	public String getPolicyCoverageDescription() {
		return policyCoverageDescription;
	}

	/**
	 * @param policyCoverageDescription the policyCoverageDescription to set
	 */
	public void setPolicyCoverageDescription(String policyCoverageDescription) {
		this.policyCoverageDescription = policyCoverageDescription;
	}

	/**
	 * @return the premiumAmount
	 */
	public Double getPremiumAmount() {
		return premiumAmount;
	}

	/**
	 * @param premiumAmount the premiumAmount to set
	 */
	public void setPremiumAmount(Double premiumAmount) {
		this.premiumAmount = premiumAmount;
	}

	/**
	 * @return the premiumPaymentFrequency
	 */
	public String getPremiumPaymentFrequency() {
		return premiumPaymentFrequency;
	}

	/**
	 * @param premiumPaymentFrequency the premiumPaymentFrequency to set
	 */
	public void setPremiumPaymentFrequency(String premiumPaymentFrequency) {
		this.premiumPaymentFrequency = premiumPaymentFrequency;
	}

	/**
	 * @return the insuranceProvider
	 */
	public InsuranceProvider getInsuranceProvider() {
		return insuranceProvider;
	}

	/**
	 * @param insuranceProvider the insuranceProvider to set
	 */
	public void setInsuranceProvider(InsuranceProvider insuranceProvider) {
		this.insuranceProvider = insuranceProvider;
	}

	@Column(nullable = false)
    private String premiumPaymentFrequency;
    	
    // Each(Multiple) policy belongs to a single provider.
    @ManyToOne
    @JoinColumn(name = "provider_id", nullable = false)
    private InsuranceProvider insuranceProvider;
    
 
}