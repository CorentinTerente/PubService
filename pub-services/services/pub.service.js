class Beer {
  constructor(type,name){
    this.type = type;
    this.name = name;
  }
}


class Pub {
  constructor (name,owner,openDays,openHours,beers){
    this.name = name;
    this.owner = owner;
    this.openDays = openDays;
    this.openHours = openHours;
    this.beers = beers;
  }
}


function fetchPubs(){
  const pubs = require('../mocks/pub.json').map(pub => new Pub(pub.name,pub.owner,pub.openDays,pub.openHours,pub.beers.map(beer => new Beer(beer.type,beer.name))));
  console.log('pub service',pubs);
  const names = pubs.map(pub => pub.name);
  return names;
}

module.exports = {
  fetchPubs
}
