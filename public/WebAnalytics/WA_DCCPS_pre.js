// Version 2.2
// Last updated: 09-7-2018
var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = ''; 
var wa_search_function_name = ''; 
var wa_production_url_match = ''; 
var wa_production_linkInternalFilters = 'javascript:,cancercontrol.cancer.gov/is,';
wa_production_linkInternalFilters += 'ccplanet.cancer.gov,';
wa_production_linkInternalFilters += 'cancercontrolplanet.cancer.gov,';
wa_production_linkInternalFilters += 'ccplanettraining.cancer.gov,';
wa_production_linkInternalFilters += 'researchtoreality.cancer.gov,';
wa_production_linkInternalFilters += 'outcomes.cancer.gov,';
wa_production_linkInternalFilters += 'breastscreening.cancer.gov,';
wa_production_linkInternalFilters += 'crn.cancer.gov,';
wa_production_linkInternalFilters += 'cancercontrol.cancer.gov/brp,';
wa_production_linkInternalFilters += 'staffprofiles.cancer.gov/brp,';
wa_production_linkInternalFilters += 'hints.cancer.gov,';
wa_production_linkInternalFilters += 'smokefree.gov,';
wa_production_linkInternalFilters += 'women.smokefree.gov,';
wa_production_linkInternalFilters += 'teen.smokefree.gov,';
wa_production_linkInternalFilters += 'espanol.smokefree.gov,';
wa_production_linkInternalFilters += 'meetings.smokefree.gov,';
wa_production_linkInternalFilters += 'veterans.smokefree.gov,';
wa_production_linkInternalFilters += 'class.cancer.gov,';
wa_production_linkInternalFilters += 'epi.grants.cancer.gov,';
wa_production_linkInternalFilters += 'li-gis.cancer.gov,';
wa_production_linkInternalFilters += 'surveillance.cancer.gov,';
wa_production_linkInternalFilters += 'costprojections.cancer.gov,';
wa_production_linkInternalFilters += 'cisnet.cancer.gov,';
wa_production_linkInternalFilters += 'cisnet.cancer.gov/projections/colorectal,';
wa_production_linkInternalFilters += 'gis.cancer.gov,';
wa_production_linkInternalFilters += 'sae.cancer.gov,';
wa_production_linkInternalFilters += 'statfund.cancer.gov,';
wa_production_linkInternalFilters += 'statecancerprofiles.cancer.gov,';
wa_production_linkInternalFilters += 'cancercontrol.cancer.gov/ocs,';
wa_production_linkInternalFilters += 'cancercontrol.cancer.gov/funding,';
wa_production_linkInternalFilters += 'cancercontrol.cancer.gov,';
wa_production_linkInternalFilters += 'maps.cancer.gov/overview,';
wa_production_linkInternalFilters += 'progressreport.cancer.gov,';
wa_production_linkInternalFilters += 'publications.nci.nih.gov,';
wa_production_linkInternalFilters += 'seer.cancer.gov,';
wa_production_linkInternalFilters += 'training.seer.cancer.gov,';
wa_production_linkInternalFilters += 'intranet.cancer.gov/dccps,';
wa_production_linkInternalFilters += 'dietassessmentprimer.cancer.gov,';
wa_production_linkInternalFilters += 'knowyourchances.cancer.gov,';
wa_production_linkInternalFilters += 'ratecalc.cancer.gov,';
wa_production_linkInternalFilters += 'rtips.cancer.gov,';
wa_production_linkInternalFilters += 'sbir-cancercontrol.cancer.gov,';
wa_production_linkInternalFilters += 'survivorship.cancer.gov';
wa_production_linkInternalFilters += 'cessationtoolkit.cancer.gov';

var wa_dev_linkInternalFilters = 'javascript:'; 
var wa_is_production_report_suite = false;
var wa_p30 = "";
var wa_p44 = "";
var wa_hier2 = "";
var page_URL = document.URL.toLowerCase();


if (new URL(page_URL).hostname === 'healthcaredelivery.cancer.gov' && new URL(page_URL).pathname.startsWith('/icsn')) {	
	wa_channel = 'DCCPS - HDRP';
	wa_search_function_name = 'DCCPS - HDRP - Search';
	wa_production_url_match = 'healthcaredelivery.cancer.gov/icsn/';
	wa_is_production_report_suite = true;
	wa_p30 = 'International Screening Network';
}
else if (new URL(page_URL).hostname === 'healthcaredelivery.cancer.gov') {	
	wa_channel = 'DCCPS - HDRP';
	wa_search_function_name = 'DCCPS - HDRP - Search';
	wa_production_url_match = 'healthcaredelivery.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Healthcare Delivery Research Main';
}
else if (new URL(page_URL).hostname === 'breastscreening.cancer.gov') {	
	wa_channel = 'DCCPS - HDRP';
	wa_search_function_name = 'DCCPS - HDRP - Search';
	wa_production_url_match = 'breastscreening.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Breast Cancer Surveillance Consortium';
}
else if (new URL(page_URL).hostname === 'cancercontrol.cancer.gov' && new URL(page_URL).pathname.startsWith('/brp')) {	
	wa_channel = 'DCCPS - BRP';
	wa_search_function_name = 'DCCPS - BRP - Search';
	wa_production_url_match = 'cancercontrol.cancer.gov/brp';
	wa_is_production_report_suite = true;
	wa_p30 = 'Behavioral Research Main';
	wa_p44 = 'BRP Main';
}
else if (new URL(page_URL).hostname === 'staffprofiles.cancer.gov' && new URL(page_URL).pathname.startsWith('/brp')) {	
	wa_channel = 'DCCPS - BRP';
	wa_search_function_name = 'DCCPS - BRP - Search';
	wa_production_url_match = 'staffprofiles.cancer.gov/brp';
	wa_is_production_report_suite = true;
	wa_p30 = 'Behavioral Research Main';
	wa_p44 = 'BRP Staff and Grantee Profiles';
}
else if (new URL(page_URL).hostname === 'cancercontrol.cancer.gov' && new URL(page_URL).pathname.startsWith('/funding')) {	
	wa_channel = 'DCCPS - OD Funding';
	wa_search_function_name = 'DCCPS - OD Funding - Search';
	wa_production_url_match = 'cancercontrol.cancer.gov/funding';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'cancercontrol.cancer.gov' && new URL(page_URL).pathname.startsWith('/is')) {	
	wa_channel = 'DCCPS - IS';
	wa_search_function_name = 'DCCPS - IS - Search';
	wa_production_url_match = 'cancercontrol.cancer.gov/is';
	wa_is_production_report_suite = true;
	wa_p30 = 'Implementation Science Main';
	wa_p44 = 'IS Main';
}
else if (new URL(page_URL).hostname === 'cancercontrol.cancer.gov' && new URL(page_URL).pathname.startsWith('/ocs')) {	
	wa_channel = 'DCCPS - OCS';
	wa_search_function_name = 'DCCPS - OCS - Search';
	wa_production_url_match = 'cancercontrol.cancer.gov/ocs';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'cancercontrol.cancer.gov') {	
	wa_channel = 'DCCPS - OD';
	wa_search_function_name = 'DCCPS - OD - Search';
	wa_production_url_match = 'cancercontrol.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'DCCPS OD Main';
}
else if (new URL(page_URL).hostname === 'cancercontrolplanet.cancer.gov') {	
	wa_channel = 'DCCPS - IS';
	wa_search_function_name = 'DCCPS - IS - Search';
	wa_production_url_match = 'cancercontrolplanet.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'PLANET';
	wa_p44 = 'CC PLANET International';
}
else if (new URL(page_URL).hostname === 'cyberseminar.cancercontrolplanet.org') {	
	wa_channel = 'DCCPS - IS';
	wa_search_function_name = 'DCCPS - IS - Search';
	wa_production_url_match = 'cyberseminar.cancercontrolplanet.org';
	wa_is_production_report_suite = true;
	wa_p30 = 'PLANET';
	wa_p44 = 'CC PLANET Cyber Seminar';
}
else if (new URL(page_URL).hostname === 'ccplanet.cancer.gov') {	
	wa_channel = 'DCCPS - IS';
	wa_search_function_name = 'DCCPS - IS - Search';
	wa_production_url_match = 'ccplanet.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'PLANET';
	wa_p44 = 'CC PLANET';
}
else if (new URL(page_URL).hostname === 'ccplanettraining.cancer.gov') {
	wa_channel = 'DCCPS - IS';
	wa_search_function_name = 'DCCPS - IS - Search';
	wa_production_url_match = 'ccplanettraining.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'PLANET';
	wa_p44 = 'CC PLANET Training';
}
else if (new URL(page_URL).hostname === 'cisnet.cancer.gov/projections' && new URL(page_URL).pathname.startsWith('/colorectal')) {	
	wa_channel = 'DCCPS - SRP';
	wa_search_function_name = 'DCCPS - SRP - Search';
	wa_production_url_match = 'cisnet.cancer.gov/projections/colorectal';
	wa_is_production_report_suite = true;
	wa_p30 = 'CISNET';
	wa_p44 = 'CISNET Projections'; 
}
else if (new URL(page_URL).hostname === 'cisnet.cancer.gov') {	
	wa_channel = 'DCCPS - SRP';
	wa_search_function_name = 'DCCPS - SRP - Search';
	wa_production_url_match = 'cisnet.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'CISNET';
	wa_p44 = 'CISNET Main';	
}
else if (new URL(page_URL).hostname === 'class.cancer.gov') {	
	wa_channel = 'DCCPS - BRP';
	wa_search_function_name = 'DCCPS - BRP - Search';
	wa_production_url_match = 'class.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'CLASS';
	wa_p44 = 'CLASS';
}
else if (new URL(page_URL).hostname === 'costprojections.cancer.gov') {	
	wa_channel = 'DCCPS - SRP';
	wa_search_function_name = 'DCCPS - SRP - Search';
	wa_production_url_match = 'costprojections.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Costs of Care';
}
else if (new URL(page_URL).hostname === 'crn.cancer.gov') {	
	wa_channel = 'DCCPS - HDRP';
	wa_search_function_name = 'DCCPS - HDRP - Search';
	wa_production_url_match = 'crn.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'HMO Cancer Research Network';
}
else if (new URL(page_URL).hostname === 'epi.grants.cancer.gov') {      
    wa_channel = 'DCCPS - EGRP'; 
    wa_search_function_name = 'DCCPS - EGRP - Search'; 
    wa_production_url_match = 'epi.grants.cancer.gov'; 
    wa_is_production_report_suite = true; 
    wa_p30 = 'Epidemiology Genomics Main';
}
else if (new URL(page_URL).hostname === 'epi.grants.cancer.gov' && new URL(page_URL).pathname.startsWith('/blog')) {	
	wa_channel = 'DCCPS - EGRP';
	wa_search_function_name = 'DCCPS - EGRP - Search';
	wa_production_url_match = 'epi.grants.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Epidemiology Matters Blog';
}
else if (new URL(page_URL).hostname === 'espanol.smokefree.gov') {	
	wa_channel = 'DCCPS - BRP';
	wa_search_function_name = 'DCCPS - BRP - Search';
	wa_production_url_match = 'espanol.smokefree.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Smokefree';
	wa_p44 = 'Smokefree Espanol';
}
else if (new URL(page_URL).hostname === 'li-gis.cancer.gov') {	
	wa_channel = 'DCCPS - EGRP';
	wa_search_function_name = 'DCCPS - EGRP - Search';
	wa_production_url_match = 'li-gis.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'LI GIS';
}
else if (new URL(page_URL).hostname === 'gis.cancer.gov') {	
	wa_channel = 'DCCPS - SRP';
	wa_search_function_name = 'DCCPS - SRP - Search';
	wa_production_url_match = 'gis.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'GIS';
}
else if (new URL(page_URL).hostname === 'hints.cancer.gov') {	
	wa_channel = 'DCCPS - BRP';
	wa_search_function_name = 'DCCPS - BRP - Search';
	wa_production_url_match = 'hints.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'HINTS';
	wa_p44 = 'HINTS main';
}
else if (new URL(page_URL).hostname === 'intranet.cancer.gov' && new URL(page_URL).pathname.startsWith('/dccps')) {	
	wa_channel = 'DCCPS - Intranet';
	wa_search_function_name = 'DCCPS - Intranet - Search';
	wa_production_url_match = 'intranet.cancer.gov/dccps';
	wa_is_production_report_suite = true;
}
else if (new URL(page_URL).hostname === 'maps.cancer.gov' && new URL(page_URL).pathname.startsWith('/overview')) {	
	wa_channel = 'DCCPS - OD';
	wa_search_function_name = 'DCCPS - OD - Search';
	wa_production_url_match = 'maps.cancer.gov/overview';
	wa_is_production_report_suite = true;
	wa_p30 = 'Funding Info and Trends';
}
else if (new URL(page_URL).hostname === 'meetings.smokefree.gov') {	
	wa_channel = 'DCCPS - BRP';
	wa_search_function_name = 'DCCPS - BRP - Search';
	wa_production_url_match = 'meetings.smokefree.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Smokefree';
	wa_p44 = 'Smokefree Meetings';
}
else if (new URL(page_URL).hostname === 'veterans.smokefree.gov') {	
	wa_channel = 'DCCPS - BRP'; 
	wa_search_function_name = 'DCCPS - BRP - Search'; 
	wa_production_url_match = 'veterans.smokefree.gov'; 
	wa_is_production_report_suite = true; 
	wa_p30 = 'Smokefree'; 
	wa_p44 = 'Smokefree Veterans'; 
}
else if (new URL(page_URL).hostname === 'progressreport.cancer.gov') {	
	wa_channel = 'DCCPS - OD';
	wa_search_function_name = 'DCCPS - OD - Search';
	wa_production_url_match = 'progressreport.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Cancer Trends Progress Report';
}
else if (new URL(page_URL).hostname === 'publications.nci.nih.gov') {	
	wa_channel = 'DCCPS - OD';
	wa_search_function_name = 'DCCPS - OD - Search';
	wa_production_url_match = 'publications.nci.nih.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Cancer Control Publications';
}
else if (new URL(page_URL).hostname === 'researchtoreality.cancer.gov') {	
	wa_channel = 'DCCPS - IS';
	wa_search_function_name = 'DCCPS - IS - Search';
	wa_production_url_match = 'researchtoreality.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'R2R';
	wa_p44 = 'R2R';
}
else if (new URL(page_URL).hostname === 'sae.cancer.gov') {	
	wa_channel = 'DCCPS - SRP';
	wa_search_function_name = 'DCCPS - SRP - Search';
	wa_production_url_match = 'sae.cancer.gov';
	wa_is_production_report_suite = true;
    wa_p30 = 'Small Area Estimates';
}
else if (new URL(page_URL).hostname === 'training.seer.cancer.gov') {	
	wa_channel = 'DCCPS - SEER';
	wa_search_function_name = 'DCCPS - SEER - Search';
	wa_production_url_match = 'training.seer.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'SEER Training';
}
else if (new URL(page_URL).hostname === 'seer.cancer.gov') {	
	wa_channel = 'DCCPS - SEER';
	wa_search_function_name = 'DCCPS - SEER - Search';
	wa_production_url_match = 'seer.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'SEER Main';
}
else if (new URL(page_URL).hostname === 'statecancerprofiles.cancer.gov') {	
	wa_channel = 'DCCPS - SRP';
	wa_search_function_name = 'DCCPS - SRP - Search';
	wa_production_url_match = 'statecancerprofiles.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'State Cancer Profiles';
}
else if (new URL(page_URL).hostname === 'statfund.cancer.gov') {	
	wa_channel = 'DCCPS - SRP';	
	wa_search_function_name = 'DCCPS - SRP - Search';
	wa_production_url_match = 'statfund.cancer.gov';
	wa_is_production_report_suite = true;
    wa_p30 = 'StatFund';
}
else if (new URL(page_URL).hostname === 'surveillance.cancer.gov') {	
	wa_channel = 'DCCPS - SRP';
	wa_search_function_name = 'DCCPS - SRP - Search';
	wa_production_url_match = 'surveillance.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Surveillance Research Main';
}
else if (new URL(page_URL).hostname === 'teen.smokefree.gov') {	
	wa_channel = 'DCCPS - BRP';
	wa_search_function_name = 'DCCPS - BRP - Search';
	wa_production_url_match = 'teen.smokefree.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Smokefree';
	wa_p44 = 'Smokefree Teen';
}
else if (new URL(page_URL).hostname === 'women.smokefree.gov') {	
	wa_channel = 'DCCPS - BRP';
	wa_search_function_name = 'DCCPS - BRP - Search';
	wa_production_url_match = 'women.smokefree.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Smokefree';
	wa_p44 = 'Smokefree Women';
}
else if (new URL(page_URL).hostname === 'smokefree.gov') {	
	wa_channel = 'DCCPS - BRP';
	wa_search_function_name = 'DCCPS - BRP - Search';
	wa_production_url_match = 'smokefree.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Smokefree';
	wa_p44 = 'Smokefree';
}
else if (new URL(page_URL).hostname === 'dietassessmentprimer.cancer.gov') {	
	wa_channel = 'DCCPS - EGRP';
	wa_search_function_name = 'DCCPS - EGRP - Search';
	wa_production_url_match = 'dietassessmentprimer.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Dietary Assessment Primer';
	wa_p44 = 'Dietary Assessment Primer';
}
else if (new URL(page_URL).hostname === 'knowyourchances.cancer.gov') {	
	wa_channel = 'DCCPS - SRP';
	wa_search_function_name = 'DCCPS - SRP - Search';
	wa_production_url_match = 'knowyourchances.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Know Your Chances';
	wa_p44 = 'Know Your Chances'; 
}
else if (new URL(page_URL).hostname === 'ratecalc.cancer.gov') {	
	wa_channel = 'DCCPS - Cancer Mortality Maps Rate Calc.';
	wa_production_url_match = 'ratecalc.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Cancer Mortality Maps Rate Calc.';
}
else if (new URL(page_URL).hostname === 'rtips.cancer.gov') {	
	wa_channel = 'DCCPS - IS';
	wa_search_function_name = 'DCCPS - IS - Search';
	wa_production_url_match = 'rtips.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Research Tested Intervention Programs (RTIPS)';
}
else if (new URL(page_URL).hostname === 'sbir-cancercontrol.cancer.gov') {	
	wa_channel = 'DCCPS - SBIR';
	wa_search_function_name = 'DCCPS - SBIR - Search';
	wa_production_url_match = 'sbir-cancercontrol.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'SBIR Cancer Control';
}
else if (new URL(page_URL).hostname === 'survivorship.cancer.gov') {	
	wa_channel = 'DCCPS - BRP';
	wa_search_function_name = 'DCCPS - BRP - Search';
	wa_production_url_match = 'survivorship.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Survivorship';
}
else if (new URL(page_URL).hostname === 'cessationtoolkit.cancer.gov') { 
	wa_channel = 'DCCPS - Cessation Toolkit'; 
	wa_search_function_name = 'DCCPS - Cessation Toolkit - Search';
	wa_production_url_match = 'cessationtoolkit.cancer.gov';
	wa_is_production_report_suite = true;
	wa_p30 = 'Cessation Toolkit';
}
else {
	wa_channel = 'DCCPS - Development';
	wa_search_function_name = 'DCCPS - Development - Search';
	wa_is_production_report_suite = false;
}


if (wa_is_production_report_suite) 
    // production 
    var s_account=wa_production_report_suite;
else 
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();