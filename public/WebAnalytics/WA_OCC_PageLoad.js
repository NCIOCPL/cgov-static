// Load analytics Javascript for from static.cancer.gov
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/WA_OCC_pre.js" ></script>');
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/s_code.js" ></script>');
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/WA_OCC_post.js" ></script>');
document.write('<script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/4407.js" async="async" ></script>');
var s = document.createElement('script');
s.type='text/javascript';
s.id="_fed_an_ua_tag";
s.src='https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=HHS&subagency=NCI';
document.head.appendChild(s);

// Insert this on every HTML page just above the closing body tag:
// <!-- **** NCI Web Analytics - DO NOT ALTER **** -->
// <script language="JavaScript" type="text/javascript" src="//static.cancer.gov/webanalytics/WA_OCC_PageLoad.js"></script>
// <!-- **** End NCI Web Analytics **** -->
