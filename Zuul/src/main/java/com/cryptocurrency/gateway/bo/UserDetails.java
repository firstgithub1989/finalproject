package com.cryptocurrency.gateway.bo;

import javax.persistence.*;

@Entity
@Table(name = "cc_users")
public class UserDetails {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long userId;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private boolean enabled = true;
    private String address;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getAddress() { return address; }

    public void setAddress(String address) { this.address = address; }
}
