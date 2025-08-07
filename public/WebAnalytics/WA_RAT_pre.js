var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = '';
var wa_search_function_name = 'OCE - Support Services - Search';
var wa_production_url_match = 'analysistools.nci.nih.gov/';
var wa_production_linkInternalFilters = 'javascript:,analysistools.nci.nih.gov/';
var wa_dev_linkInternalFilters = 'javascript:'; 
var wa_is_production_report_suite = false;
var page_URL = document.URL.toLowerCase();


if (new URL(page_URL).hostname === 'mrisktool.cancer.gov') {	
	wa_channel = 'DCEG - MRAT';
	wa_search_function_name = 'DCEG - MRAT Search';
	wa_production_url_match = 'mrisktool.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'bcrisktool.cancer.gov') {	
	wa_channel = 'DCEG - BCRAT';
	wa_search_function_name = 'DCEG - BCRAT Search';
	wa_production_url_match = 'bcrisktool.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'ccrisktool.cancer.gov') {	
	wa_channel = 'DCEG - CCRAT';
	wa_search_function_name = 'DCEG - CCRAT Search';
	wa_production_url_match = 'ccrisktool.cancer.gov';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'analysistools.nci.nih.gov' && new URL(page_URL).pathname.startsWith('/biomarkertools')) {	
	wa_channel = 'DCEG - Biomarker Tools';
	wa_search_function_name = '	DCEG - Biomarker Tools Search';
	wa_production_url_match = 'analysistools.nci.nih.gov/biomarkerTools';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'analysistools.nci.nih.gov' && new URL(page_URL).pathname.startsWith('/apc')) {	
	wa_channel = 'DCEG - Age Period Cohort Tool';
	wa_search_function_name = 'DCEG - Age Period Cohort Tool Search';
	wa_production_url_match = 'analysistools.nci.nih.gov/apc';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'analysistools.nci.nih.gov' && new URL(page_URL).pathname.startsWith('/ldlink')) {	
	wa_channel = 'DCEG - LD Link';
	wa_search_function_name = 'DCEG - LD Link - Search';
	wa_production_url_match = 'analysistools.nci.nih.gov/LDlink';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'analysistools.nci.nih.gov' && new URL(page_URL).pathname.startsWith('/lungcancerscreening')) {	
	wa_channel = '	DCEG - Lung Cancer Screening';
	wa_search_function_name = '	DCEG - Lung Cancer Screening Search';
	wa_production_url_match = 'analysistools.nci.nih.gov/lungCancerScreening';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'analysistools.nci.nih.gov' && new URL(page_URL).pathname.startsWith('/nevustool')) {	
	wa_channel = 'DCEG - Moles to Melanoma';
	wa_search_function_name = 'DCEG - Moles to Melanoma Search';
	wa_production_url_match = 'analysistools.nci.nih.gov/nevustool';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'analysistools.nci.nih.gov' && new URL(page_URL).pathname.startsWith('/pathway')) {	
	wa_channel = 'DCEG - Pathway Analysis';
	wa_search_function_name = 'DCEG - Pathway Analysis Search';
	wa_production_url_match = 'analysistools.nci.nih.gov/pathway';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'analysistools.nci.nih.gov' && new URL(page_URL).pathname.startsWith('/jpsurv')) {	
	wa_channel = 'DCCPS - JPSurv';
	wa_search_function_name = 'DCCPS - JPSurv Search';
	wa_production_report_suite = 'ncienterprise';
	wa_production_url_match = 'analysistools.nci.nih.gov/jpsurv';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'analysistools.nci.nih.gov') {	
	wa_channel = 'DCEG - Analysis Tools Other Pages';
	wa_search_function_name = 'DCEG - Analysis Tools Other Pages Search';
	wa_production_url_match = '	analysistools.nci.nih.gov/';
}
else {
	wa_channel = 'RAT - Development';
	wa_search_function_name = 'RAT - Development - Search';
	wa_is_production_report_suite = false;
}

if (document.URL.indexOf(wa_production_url_match) != -1)
    // production 
    var s_account=wa_production_report_suite;
else 
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();

