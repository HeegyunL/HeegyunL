package com.git.gagymservice.chart;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ColumnStat {
	private Long amounts;
	private List<ColumnBar> columnBar;
}