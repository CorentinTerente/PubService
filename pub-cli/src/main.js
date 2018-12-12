var pubServices = require('pub-services');

function getListPub(){
  jsonList = pubServices.services.pubService.fetchPubs() ;
  console.log(jsonList[0].name);
}

module.exports = {
  getListPub: getListPub
}
