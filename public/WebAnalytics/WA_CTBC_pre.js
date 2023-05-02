var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = 'Clinical Trials Basics Course';
var wa_search_function_name = 'Clinical Trials Basics Course - Search';
var wa_production_url_match = 'training.cancer.gov';
var wa_dev_url_match = 'trainingqa.cancer.gov';
var wa_production_linkInternalFilters = 'javascript:,training.cancer.gov';
var wa_dev_linkInternalFilters = 'javascript:,trainingqa.cancer.gov';

if (document.URL.indexOf(wa_production_url_match) != -1)
    // production 
    var s_account=wa_production_report_suite;
else 
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();

