document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/WA_TTC_pre.js" ></script>');
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/s_code.js" ></script>');
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/WA_TTC_post.js" ></script>');
var s = document.createElement('script');
s.type='text/javascript';
s.id="_fed_an_ua_tag";
s.src='https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=HHS&subagency=NCI';
document.head.appendChild(s);

// Add the lines below (removing the javascript comments) just before the end 
// body tag to execute Omniture page-load event and to make the search click
// event available:
/*
<!-- **** NCI Web Analytics  - DO NOT ALTER **** -->
<script type="text/javascript" src="//static.cancer.gov/webanalytics/WA_TTC_HTTPS_PageLoad.js"></script>
<!-- **** End NCI Web Analytics Page **** -->
*/