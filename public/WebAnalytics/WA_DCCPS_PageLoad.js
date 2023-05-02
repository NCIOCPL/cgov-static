// Version 2.1
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/WA_DCCPS_pre.js" ></script>');
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/s_code.js" ></script>');
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/WA_DCCPS_post.js" ></script>');
var s = document.createElement('script');
s.type='text/javascript';
s.id="_fed_an_ua_tag";
s.src='https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=HHS&subagency=NCI';
document.head.appendChild(s);

// Add the line below just before the end body tag to execute Omniture page-load event:
// <script language="JavaScript" type="text/javascript" src="//static.cancer.gov/webanalytics/WA_DCCPS_PageLoad.js"></script>