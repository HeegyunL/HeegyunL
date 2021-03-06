package com.git.gagymservice.reservation;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class Reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String memberName;
	private String memberPhone;
	private String memberRequest;
	private String gymName;
	private String trainerName;
	private String boughtService;
	
	private String category;
	
	@OneToMany
	@JoinColumn(name="salesOrderId")
	private List<ReservationDetail> details;
	
	private String status;
	
	

	
}
