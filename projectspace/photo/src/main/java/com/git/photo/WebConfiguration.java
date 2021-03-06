package com.git.photo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {

	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry

				.addMapping("/**")
				.allowedOrigins("http://localhost:3000", "http://127.0.0.1:5500/",
						"http://ec2-52-79-120-222.ap-northeast-2.compute.amazonaws.com",
						"http://ec2-15-164-54-15.ap-northeast-2.compute.amazonaws.com",
						"http://ec2-13-125-255-75.ap-northeast-2.compute.amazonaws.com",
						"http://ec2-15-164-54-15.ap-northeast-2.compute.amazonaws.com:8080",
						"http://ec2-15-164-54-15.ap-northeast-2.compute.amazonaws.com:8081",
						"http://ec2-52-79-120-222.ap-northeast-2.compute.amazonaws.com:8080",
						"http://ec2-52-79-120-222.ap-northeast-2.compute.amazonaws.com:8081",
						"http://ec2-13-125-255-75.ap-northeast-2.compute.amazonaws.com:8080",
						"http://ec2-13-125-255-75.ap-northeast-2.compute.amazonaws.com:8081",
						"http://52.79.120.222","http://52.79.120.222:8080","http://52.79.120.222:8081",
						"http://15.164.54.15","http://15.164.54.15:8080","http://15.164.54.15:8081")
						
				.allowedMethods("*"); // 전체메서드를 허용(GET, POST, PUT....)
	}
}	