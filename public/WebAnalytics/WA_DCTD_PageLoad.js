// Load analytics Javascript for from static.cancer.gov
document.write('<script type="text/javascript" src="https://static.cancer.gov/webanalytics/WA_DCTD_pre.js" ></script>');
document.write('<script type="text/javascript" src="https://static.cancer.gov/webanalytics/s_code.js" ></script>');
document.write('<script type="text/javascript" src="https://static.cancer.gov/webanalytics/WA_DCTD_post.js" ></script>');
var s = document.createElement('script');
s.type='text/javascript';
s.id="_fed_an_ua_tag";
s.src='https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=HHS&subagency=NCI';
document.head.appendChild(s);

// Insert this on every HTML page just above the closing body tag:
// <!-- **** NCI Web Analytics - DO NOT ALTER **** -->
// <script language="JavaScript" type="text/javascript" src="https://static.cancer.gov/webanalytics/WA_DCTD_PageLoad.js"></script>
// <!-- **** End NCI Web Analytics **** -->
