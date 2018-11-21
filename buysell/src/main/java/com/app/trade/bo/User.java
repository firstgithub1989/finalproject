package com.app.trade.bo;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CC_USER")
public class User {
	/*USER_ID INT NOT NULL AUTO_INCREMENT primary key,
    EMAIL_ID varchar(40) NOT NULL UNIQUE,
    FIRST_NAME varchar(30),
    LAST_NAME varchar(30),
    USER_PASSWORD CHAR(128) NOT NULL,
    CREATE_DATE DATETIME,
    UPDATE_DATE DATETIME*/
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="USER_ID")
	private Integer userId;
	
	@Column(name="EMAIL_ID")
	private String emailId;
	
	@Column(name="FIRST_NAME")
	private String firstName;
	
	@Column(name="LAST_NAME")
	private String lastName;
	
	@Column(name="USER_PASSWORD")
	private String userPassword;
	
	@Column(name="CREATE_DATE")
	private Timestamp createDate;
	
	@Column(name="UPDATE_DATE")
	private Timestamp updateDate;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
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

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public Timestamp getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Timestamp createDate) {
		this.createDate = createDate;
	}

	public Timestamp getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(Timestamp updateDate) {
		this.updateDate = updateDate;
	}
}
