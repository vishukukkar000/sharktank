package com.sharktank;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DozerConfig {

	@Bean()
	@Qualifier("dozerBeanMapperBean")
    public DozerBeanMapper dozerBeanMapperBean() {
        DozerBeanMapper dozerBeanMapperBean = new DozerBeanMapper();
        return dozerBeanMapperBean;
    }
    
    

}