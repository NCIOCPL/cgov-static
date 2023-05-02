// Sites tagged for DCEG anaytics suite
// Last updated: 2016-07-11
var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = '';
var wa_search_function_name = '';
var wa_production_url_match = '';
var wa_production_linkInternalFilters = 'javascript:,';
wa_production_linkInternalFilters += 'aghealth.nih.gov,';
wa_production_linkInternalFilters += 'analysistools.nci.nih.gov/nevustool,';
wa_production_linkInternalFilters += 'atbcstudy.cancer.gov,';
wa_production_linkInternalFilters += 'breastimaging.cancer.gov,';
wa_production_linkInternalFilters += 'chernobyl.cancer.gov,';
wa_production_linkInternalFilters += 'dceg2.cancer.gov';
wa_production_linkInternalFilters += 'dietandhealth.cancer.gov,';
wa_production_linkInternalFilters += 'eagle.cancer.gov,';
wa_production_linkInternalFilters += 'emblem.cancer.gov,';
wa_production_linkInternalFilters += 'familial-testicular-cancer.cancer.gov,';
wa_production_linkInternalFilters += 'hivmatch.cancer.gov,';
wa_production_linkInternalFilters += 'icbc.cancer.gov,';
wa_production_linkInternalFilters += 'lfs.cancer.gov,';
wa_production_linkInternalFilters += 'marrowfailure.cancer.gov,';
wa_production_linkInternalFilters += 'ovariancancer.gog199.cancer.gov,';
wa_production_linkInternalFilters += 'ppb.cancer.gov,';
wa_production_linkInternalFilters += 'radtechstudy.nci.nih.gov,';
wa_production_linkInternalFilters += 'rbstudy.cancer.gov,';
wa_production_linkInternalFilters += 'transplantmatch.cancer.gov';
wa_production_linkInternalFilters += 'rasopathies.cancer.gov';
var wa_dev_linkInternalFilters = 'javascript:';
var wa_is_production_report_suite = false;
var wa_p30 = "";
var wa_p44 = "";
var wa_hier2 = "";
var page_URL = document.URL;


if (page_URL.indexOf('aghealth.nih.gov') != -1) {	
	wa_channel = 'DCEG - Agricultural Health Study';
	wa_search_function_name = 'DCEG - Agricultural Health Study - Search';
	wa_production_url_match = 'aghealth.nih.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('analysistools.nci.nih.gov/nevustool') != -1) {	
	wa_channel = 'DCEG - Moles to Melanoma';
	wa_search_function_name = 'DCEG - Moles to Melanoma - Search';
	wa_production_url_match = 'analysistools.nci.nih.gov/nevustool';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('atbcstudy.cancer.gov') != -1) {	
	wa_channel = 'DCEG - ATBC Study';
	wa_search_function_name = 'DCEG - ATBC Study - Search';
	wa_production_url_match = 'atbcstudy.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('breastimaging.cancer.gov') != -1) {	
	wa_channel = 'DCEG - Breast Imaging';
	wa_search_function_name = 'DCEG - Breast Imaging - Search';
	wa_production_url_match = 'breastimaging.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('chernobyl.cancer.gov') != -1) {	
	wa_channel = 'DCEG - Chernobyl';
	wa_search_function_name = 'DCEG - Chernobyl - Search';
	wa_production_url_match = 'chernobyl.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('dceg2.cancer.gov') != -1) {	
	wa_channel = 'DCEG - Main';
	wa_search_function_name = 'DCEG - Main - Search';
	wa_production_url_match = 'dceg2.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('dietandhealth.cancer.gov') != -1) {	
	wa_channel = 'DCEG - Diet and Health';
	wa_search_function_name = 'DCEG - Diet and Health - Search';
	wa_production_url_match = 'dietandhealth.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('eagle.cancer.gov') != -1) {	
	wa_channel = 'DCEG - EAGLE';
	wa_search_function_name = 'DCEG - EAGLE - Search';
	wa_production_url_match = 'eagle.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('emblem.cancer.gov') != -1) {	
	wa_channel = 'DCEG - EMBLEM';
	wa_search_function_name = 'DCEG - EMBLEM - Search';
	wa_production_url_match = 'emblem.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('familial-testicular-cancer.cancer.gov') != -1) {	
	wa_channel = 'DCEG - Familial Testicular Cancer';
	wa_search_function_name = 'DCEG - Familial Testicular Cancer - Search';
	wa_production_url_match = 'familial-testicular-cancer.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('hivmatch.cancer.gov') != -1) {	
	wa_channel = 'DCEG - HIV Match';
	wa_search_function_name = 'DCEG - HIV Match - Search';
	wa_production_url_match = 'hivmatch.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('icbc.cancer.gov') != -1) {	
	wa_channel = 'DCEG - ICBC';
	wa_search_function_name = 'DCEG - ICBC - Search';
	wa_production_url_match = 'icbc.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('lfs.cancer.gov') != -1) {	
	wa_channel = 'DCEG - LFS Study';
	wa_search_function_name = 'DCEG - LFS Study - Search';
	wa_production_url_match = 'lfs.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('marrowfailure.cancer.gov') != -1) {
	wa_channel = 'DCEG - Marrow Failure';
	wa_search_function_name = 'DCEG - Marrow Failure - Search';
	wa_production_url_match = 'marrowfailure.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('ovariancancer.gog199.cancer.gov') != -1) {	
	wa_channel = 'DCEG - Ovarian Cancer';
	wa_search_function_name = 'DCEG - Ovarian Cancer - Search';
	wa_production_url_match = 'ovariancancer.gog199.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('ppb.cancer.gov') != -1) {	
	wa_channel = 'DCEG - PPB Study';
	wa_search_function_name = 'DCEG - PPB Study - Search';
	wa_production_url_match = 'ppb.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('radtechstudy.nci.nih.gov') != -1) {	
	wa_channel = 'DCEG - RadTech Study';
	wa_search_function_name = 'DCEG - RadTech Study - Search';
	wa_production_url_match = 'radtechstudy.nci.nih.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('rbstudy.cancer.gov') != -1) {	
	wa_channel = 'DCEG RB Study';
	wa_search_function_name = 'DCEG RB Study';
	wa_production_url_match = 'rbstudy.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('transplantmatch.cancer.gov') != -1) {	
	wa_channel = 'DCEG - Transplant Match';
	wa_search_function_name = 'DCEG - Transplant Match - Search';
	wa_production_url_match = 'transplantmatch.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (page_URL.indexOf('rasopathies.cancer.gov') != -1) { 
        wa_channel = 'DCEG - RASopathies'; 
        wa_search_function_name = 'DCEG - RASopathies- Search'; 
        wa_production_url_match = 'rasopathies.nci.nih.gov'; 
        wa_is_production_report_suite = true;
}
else {
	wa_channel = 'DCEG - Development';
	wa_search_function_name = 'DCEG - Development - Search';
	wa_is_production_report_suite = false;
}


if (wa_is_production_report_suite) 
    // production 
    var s_account=wa_production_report_suite;
else 
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();