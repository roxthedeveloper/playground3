'use strict';

var async = require('async');

module.exports = function(app) {
  var TESTING = true;
  var mysqlDs = app.dataSources.mysqlDs;

  if (TESTING) {
    async.parallel({
      members: async.apply(createMembers),
    }, function(err, results) {
      if (err) throw err;

      async.parallel({
        workevents: async.apply(createWorkEvents, results.members),
        locations: async.apply(createLocations),
      }, function(err, results) {
        if (err) throw err;
        createHappensAt(results.locations, results.workevents, function(err) {
          console.log('> models created successfully');
        });
      });
    });
  } else {
    var lbTables = ['Member', 'WorkEvent', 'Location', 'HappensAt'];

    mysqlDs.autoupdate(lbTables, function(err) { //use autoupdate to keep existing data
      if (err) throw err;
      console.log('Table [' + lbTables + '] created in', mysqlDs.adapter.name);
    });
  }

  //--------------------------------------------------------------------------------------------helpers
  function createMembers(cb) {
    mysqlDs.automigrate('Member', function(err) {
      if (err) return cb(err);
        //insert data into db
      var Member = app.models.Member;
      Member.create([
                {email: 'test@email.com', password: '1111'},
                {email: 'abc@email.com', password: '1111'},
      ], cb);
    });
  }

  function createLocations(cb) {
    mysqlDs.automigrate('Location', function(err) {
      if (err) return cb(err);
      var Loc = app.models.Location;
      Loc.create([
        {
          name: 'Graydon Hall',
          type: 'Banquet Hall',
          fullAddress: 'Graydon Hall Manor, Toronto, ON, Canada',
          geoLat: '43.76475500000001',
          geoLng: '-79.34310399999998',
        },
        {
          name: 'Old Mill',
          type: 'Banquet Hall',
          fullAddress: 'Old Mill Toronto, Old Mill Road, Etobicoke, ON, Canada',
          geoLat: '43.6507539',
          geoLng: '-79.49338490000002',
        },
      ], cb);
    });
  }

  function createWorkEvents(memebers, cb) {
    mysqlDs.automigrate('WorkEvent', function(err) {
      if (err) return cb(err);
            //insert data into db
      var WorkEvent = app.models.WorkEvent;
      WorkEvent.create([
        {
          title: 'wedding for jackson',
          type: 'wedding',
          description: 'a short wedding in summer',
          start: (new Date(2017, 1, 2, 9, 10, 0, 0)).toJSON(),
          end: (new Date(2017, 1, 2, 20, 10, 0, 0)).toJSON(),
          createdOn: (new Date()).toJSON(),
          modifiedOn: (new Date()).toJSON(),
          ownerId: memebers[0].id,
        },
        {
          title: 'wedding for wesley',
          type: 'wedding',
          description: 'a long wedding in summer',
          start: (new Date(2017, 4, 2, 10, 10, 0, 0)).toJSON(),
          end: (new Date(2017, 4, 2, 20, 10, 0, 0)).toJSON(),
          createdOn: (new Date()).toJSON(),
          modifiedOn: (new Date()).toJSON(),
          ownerId: memebers[0].id,
        },
        {
          title: 'wedding for jason',
          type: 'wedding',
          description: 'a big fat greek wedding in winter',
          start: (new Date(2017, 10, 2, 7, 10, 0, 0)).toJSON(),
          end: (new Date(2017, 10, 2, 22, 10, 0, 0)).toJSON(),
          createdOn: (new Date()).toJSON(),
          modifiedOn: (new Date()).toJSON(),
          ownerId: memebers[1].id,
        },
        {
          title: 'engagement for mickey',
          type: 'engagement',
          description: 'a short engagement session in fall',
          start: (new Date(2017, 10, 7, 7, 10, 0, 0)).toJSON(),
          end: (new Date(2017, 10, 7, 8, 10, 0, 0)).toJSON(),
          createdOn: (new Date()).toJSON(),
          modifiedOn: (new Date()).toJSON(),
          ownerId: memebers[1].id,
        },
        {
          title: 'engagement for victor',
          type: 'engagement',
          description: 'a beautiful engagement session in winter',
          start: (new Date(2017, 11, 15, 7, 10, 0, 0)).toJSON(),
          end: (new Date(2017, 11, 15, 9, 10, 0, 0)).toJSON(),
          createdOn: (new Date()).toJSON(),
          modifiedOn: (new Date()).toJSON(),
          ownerId: memebers[1].id,
        },
      ], cb);
    });
  }

  function createHappensAt(locations, workevents, cb) {
    mysqlDs.automigrate('HappensAt', function(err) {
      if (err) return cb(err);
      var HappensAt = app.models.HappensAt;
      HappensAt.create([
        {eventId: workevents[0].id, locationId: locations[0].id},
        {eventId: workevents[1].id, locationId: locations[0].id},
        {eventId: workevents[1].id, locationId: locations[1].id},
        {eventId: workevents[3].id, locationId: locations[0].id},
        {eventId: workevents[3].id, locationId: locations[1].id},
        {eventId: workevents[4].id, locationId: locations[1].id},
      ], cb);
    });
  }
};


//Auto generate service for angular to access
//lb-ng server/server.js client/js/services/lb-services.js
