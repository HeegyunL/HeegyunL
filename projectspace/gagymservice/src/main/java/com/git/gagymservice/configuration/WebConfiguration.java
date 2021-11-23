package com.git.gagymservice.configuration;



import org.springframework.context.annotation.Configuration;
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
						"http://52.79.120.222")
				.allowedMethods("*"); // 전체메서드를 허용(GET, POST, PUT....)
	}
}