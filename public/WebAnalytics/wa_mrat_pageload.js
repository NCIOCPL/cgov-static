// Version 2.0
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/wa_mrat_pre.js" ></script>');
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/wcms/s_code.js" ></script>');
document.write('<script type="text/javascript" src="//static.cancer.gov/webanalytics/wa_mrat_post.js" ></script>');
var s = document.createElement('script');
s.type='text/javascript';
s.id="_fed_an_ua_tag";
s.src='https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=HHS&subagency=NCI';
document.head.appendChild(s);

// Add this to execute Omniture page-load event:
// <script language="JavaScript" type="text/javascript" src="//static.cancer.gov/webanalytics/wa_mrat_pageload.js"></script>
