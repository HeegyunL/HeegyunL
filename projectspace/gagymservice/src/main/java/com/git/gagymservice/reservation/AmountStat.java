package com.git.gagymservice.reservation;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AmountStat {
	private Long amounts;
	private List<AmountByCategory> amountsByCategories;
}