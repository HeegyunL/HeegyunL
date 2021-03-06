package com.git.gagymservice.reservation;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.git.gagymservice.reservation.QReservation.reservation;

@Repository
public class ReservationRepositorySupport {
	private JPAQueryFactory query;
	
	@Autowired
	public ReservationRepositorySupport(EntityManager em) {
		this.query = new JPAQueryFactory(em);
	}
	
	public List<AmountByCategory> statsAmountByCategory(String trainerName ) {
		
	return query
			.select(Projections.fields(AmountByCategory.class,
			reservation.trainerName,
			reservation.trainerName.count().as("amount")))
			.from(reservation)
			.join(reservation).on(reservation.id.eq(reservation.id))
			.groupBy(reservation.trainerName)
			.orderBy(reservation.trainerName.asc())
			.fetch();
	}	
}
