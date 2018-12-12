const pubServices = require('pub-services');

function getListPub(){
  const namesList = pubServices.services.pubService.fetchPubs() ;
  console.log('nom des pubs',namesList);
}

module.exports = {
  getListPub
}
