package com.hippiestereo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.hippiestereo.config.JwtFilter;

@SpringBootApplication
public class LagoonBackendApplication {

	@Bean
	public FilterRegistrationBean<JwtFilter> jwtFilter(){
		
		final FilterRegistrationBean<JwtFilter> registrationBean = new FilterRegistrationBean<JwtFilter>();
		
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/rest/*");
		
		return registrationBean;
		
	}
	
	public static void main(String[] args) {
		SpringApplication.run(LagoonBackendApplication.class, args);
	}
	
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("*").allowedOrigins("http://localhost:9000");
//			}
//		};
//	}

}
