function fetchPubs(){
  var jsonPubList = require('../mocks/pub.json');
  console.log(jsonPubList);
  return jsonPubList;
}

module.exports = {
  fetchPubs: fetchPubs
}
