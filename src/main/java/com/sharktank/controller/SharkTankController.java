package com.sharktank.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.sharktank.dto.CompanyDto;
import com.sharktank.dto.UAMFilterDto;
import com.sharktank.service.SharkTankService;
@Controller
public class SharkTankController {
	private static final Logger logger = LoggerFactory.getLogger(SharkTankController.class);
	@Autowired
	SharkTankService sharkTankService;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String getSharingPage(Model model) {
		return "dashboard";
	}

	

	@RequestMapping(value = "fetchCompanyList", method = { RequestMethod.POST, RequestMethod.GET })
	public String fetchCompanyList(Model model) {
		List<CompanyDto> companyList = sharkTankService.fetchCompanyList(null, 0, 10);
		model.addAttribute("companyList", companyList);
		int totalCount = sharkTankService.fetchTotalCompanyCounts();
		model.addAttribute("totalCount", totalCount);
		List<String> investors = sharkTankService.fetchDistinctInvestors();
		model.addAttribute("investors", investors);
		List<Integer> seasons = sharkTankService.fetchDistinctSeasons();
		model.addAttribute("seasons", seasons);
		return "sharktank-company";
	}

	@RequestMapping(value = "filterCompany", method = RequestMethod.POST)
	public String filterCompany(@ModelAttribute UAMFilterDto uamFilter, Model model) {
		model.addAttribute("genderSearch", "");
		model.addAttribute("investmentAmt", "");
		model.addAttribute("investorSearch", "");
		model.addAttribute("seasonSearch", "");
		model.addAttribute("filter", "");
		List<CompanyDto> userList = sharkTankService.fetchCompanyList(uamFilter, 0, 10);
		int totalCount = sharkTankService.fetchTotalCompanyCounts(uamFilter);
		if (null != uamFilter) {
			if (null != uamFilter.getGenderSearch()) {
				model.addAttribute("genderSearch", uamFilter.getGenderSearch());
				model.addAttribute("filter", "gender");
			} else if (null != uamFilter.getInvestmentAmt()) {
				model.addAttribute("investmentAmt", uamFilter.getInvestmentAmt());
				model.addAttribute("filter", "amount");
			} else if (null != uamFilter.getInvestorSearch()) {
				model.addAttribute("investorSearch", uamFilter.getInvestorSearch());
				model.addAttribute("filter", "investor");
			} else if (null != uamFilter.getSeasonSearch()) {
				model.addAttribute("seasonSearch", uamFilter.getSeasonSearch());
				model.addAttribute("filter", "season");
			}

		}
		model.addAttribute("companyList", userList);
		model.addAttribute("totalCount", totalCount);
		List<String> investors = sharkTankService.fetchDistinctInvestors();
		model.addAttribute("investors", investors);
		List<Integer> seasons = sharkTankService.fetchDistinctSeasons();
		model.addAttribute("seasons", seasons);
		return "sharktank-company";
	}

	@RequestMapping(value = "fetchCompanyDetail", method = { RequestMethod.GET, RequestMethod.POST })
	public String fetchCompanyDetail( Model model,
			@RequestParam(value = "company") String company) {
		if (null != company && !company.isEmpty()) {
			CompanyDto companyDto = sharkTankService.fetchCompanyDetail(company);
			model.addAttribute("companyDto", companyDto);
		}
		return "company-detail";
	}

	@RequestMapping(value = "fetchCompanyLimit", method = RequestMethod.POST)
	@ResponseBody
	public String fetchCompanyLimit(@RequestParam(value = "start") Integer start,
			@RequestParam(value = "max") Integer max,
			@RequestParam(required = false, value = "uamFilter") String uamFilterString,
			Model model) {
		UAMFilterDto uamFilter = null;
		Gson gson = new Gson();
		if (null != uamFilterString && !uamFilterString.isEmpty()) {
			uamFilter = gson.fromJson(uamFilterString, UAMFilterDto.class);
		}
		List<CompanyDto> userList = sharkTankService.fetchCompanyList(uamFilter, start, max);
		return gson.toJson(userList);
	}

	
}







