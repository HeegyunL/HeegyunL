package com.git.gagymservice.partner;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class Partner {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String gymName;
	private String gymCoNum;
	private String gymLocateSi;
	private String gymLocateGunGu;
	@Column(columnDefinition = "VARCHAR(1000)")
	private String gymAddress;
	private String gymPhoneNum;
	private String gymTime;
	private String gymService;
	@Column(columnDefinition = "TEXT")
	private String gymPhoto;
	private String fileType;
	private String fileName;
	private String gym1DayPrice;
	private String gym3DayPrice;
	private String gym7DayPrice;
	private String gymMonthPrice;
	private String gym3MonthPrice;
	private String gym6MonthPrice;
	private String gymYearPrice;
//	private List gymTrainer;

}
