const request = require('request-promise');

class ProxyResponse {
  constructor(status, headers, body = '') {
    if (!status) throw new Error('Missing status response property');
    if (!headers) throw new Error('Missing headers response property');
    this.status = status;
    this.headers = headers;
    this.body = body;
  }
}

async function testCall() {
  const requestOptions = {
    uri: 'https://api.test-godaddy.com/v1/domains?statusGroups=PRE_REGISTRATION%2CREDEMPTION%2CRENEWABLE%2CVERIFICATION_ICANN%2CVISIBLE',
    resolveWithFullResponse: true,
    json: true,
    headers: {
      connection: 'keep-alive',
      'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': '"Windows"',
      accept: '*/*',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      cookie: 'visitor=vid=cb949acd-92ba-581e-93ca-fd97e521e44f; _policy=%7B%22restricted_market%22:true,%22tracking_market%22:%22explicit%22%7D; pwinteraction=Fri%2C%2016%20Dec%202022%2021%3A26%3A38%20GMT; pathway=8a24253a-5b68-4040-9ebe-2591e9308632; traffic=; expBannerSplit=B; fb_sessiontraffic=S_TOUCH=&pathway=8a24253a-5b68-4040-9ebe-2591e9308632&V_DATE=&pc=5&C_TOUCH=2022-12-20T13:53:37.285Z; OPTOUTMULTI=0:0%7Cc2:1%7Cc9:1%7Cc11:1; mp_ecba92171afd4d3630970a9aa8454ff2_mixpanel=%7B%22distinct_id%22%3A%20%221851cd4f18243c-097aae6a3d89ed-42015612-5b168-1851cd4f183752%22%2C%22%24device_id%22%3A%20%221851cd4f18243c-097aae6a3d89ed-42015612-5b168-1851cd4f183752%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22Application%22%3A%20%22start%22%2C%22Onboarding%20Locale%22%3A%20%22en-US%22%2C%22Business%20Name%22%3A%20%22%22%2C%22templateType%22%3A%20%22default%22%2C%22Onboarding%20ITC%22%3A%20%22commerce_sd_dev%22%2C%22Is%20Mobile%20App%22%3A%20false%2C%22Used%20SSO%20Modal%22%3A%20false%2C%22__mps%22%3A%20%7B%22%24os%22%3A%20%22Windows%22%2C%22%24browser%22%3A%20%22Chrome%22%2C%22%24browser_version%22%3A%20108%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22Purchase%20Path%22%3A%20%22commerce_solution_discovery%22%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22Listing%20ID%22%3A%20%22wsb-vnext-freemat-3%22%7D; utag_main=v_id:01851cd4f5370002ce939caebd9800083007507b004de$_sn:2$_ss:0$_st:1671546217929$ses_id:1671544269698%3Bexp-session$_pn:3%3Bexp-session'
    },
    credentials: 'include',
    encoding: null,
    method: 'GET'
  };

  let proxyResponse;
  try {
    const apiResponse = await request(requestOptions);
    const { statusCode, headers, body } = apiResponse;
    proxyResponse = new ProxyResponse(statusCode, headers, body);
  } catch (err) {
    const { statusCode = 500, response: { headers = {} } = {}, error } = err;
    proxyResponse = new ProxyResponse(statusCode, headers, error);
  }

  console.log(
    '====================================================TEST==============================================='
  );
  console.log(proxyResponse);
  return proxyResponse;
}

testCall();

