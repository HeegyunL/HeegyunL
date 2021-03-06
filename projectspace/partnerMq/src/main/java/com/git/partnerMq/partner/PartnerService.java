package com.git.partnerMq.partner;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
public class PartnerService {

	private RabbitTemplate rabbit;

	private PartnerService(RabbitTemplate rabbit) {
		this.rabbit = rabbit;
	}

	public void sendPartner(Partner partner) {
		System.out.println(partner);
		rabbit.convertAndSend("service.gym.create1", partner);
	}
}