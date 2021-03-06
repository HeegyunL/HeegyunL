package com.git.gagymservice.trainer;

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
public class Trainer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String gymCode;
	private String trainerName;
	private String trainerIntro;
	@Column(columnDefinition = "TEXT")
	private String trainerPhotoUrl;
	private String fileType;
	private String fileName;
    private String pt1TimePrice;
    private String pt10TimePrice;
    private String pt30TimePrice;
    private String yoga1TimePrice;
    private String yoga10TimePrice;
    private String yoga30TimePrice;
    private String pilates1TimePrice;
    private String pilates10TimePrice;
    private String pilates30TimePrice;
    
   
}
