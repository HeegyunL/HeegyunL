package com.git.gagymservice.reservation;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
//엔터티 모델
@Entity
@IdClass(ReservationDetailId.class)
public class ReservationDetail {
	@Id
	private long salesOrderId;
	@Id
	private int seq;
	
	@ManyToOne
	private Reservation reservation;
	
	private String trainerName;
}
