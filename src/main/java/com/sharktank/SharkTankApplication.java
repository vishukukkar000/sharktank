package com.sharktank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;

@SpringBootApplication(scanBasePackages = "com.sharktank",exclude = {SecurityAutoConfiguration.class })
public class SharkTankApplication{
	
	public static void main(String[] args){
		SpringApplication.run(SharkTankApplication.class, args);
		 
	}
	
}
