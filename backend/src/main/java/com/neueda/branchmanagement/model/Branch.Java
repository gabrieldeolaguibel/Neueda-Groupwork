package main.java.com.neueda.branchmanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "branches")
public class Branch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String city;
    private String zip;
    private String state;
    private String operatingHours;
    private String branchManager;
    private int numberOfEmployees;

    // Default constructor for JPA
    public Branch() {
    }

    // Constructor
    public Branch(String city, String zip, String state, String operatingHours, String branchManager, int numberOfEmployees) {
        this.city = city;
        this.zip = zip;
        this.state = state;
        this.operatingHours = operatingHours;
        this.branchManager = branchManager;
        this.numberOfEmployees = numberOfEmployees;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
      this.zip = zip;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getOperatingHours() {
        return operatingHours;
    }

    public void setOperatingTopTime(String operatingHours) {
        this.operatingHours = operatingHours;
    }

    public String getBranchManager() {
        return branchManager;
    }

    public void setBranchManager(String branchManager) {
        this.branchManager = branchManager;
    }

    public int getNumberOfEmployees() {
        return numberOfEmployees;
    }

    public void setNumberOfEmployees(int numberOfEmployees) {
        this.numberOfEmployees = numberOfEmployees;
    }
}
