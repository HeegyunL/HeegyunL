package com.git.gagymservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class GagymserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GagymserviceApplication.class, args);
	}

}
