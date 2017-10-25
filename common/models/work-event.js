'use strict';

module.exports = function(WorkEvent) {
    //called before a new instance of WorkEvent is created
    //  insert ownerId using the access token attached to the request.
    //  sets created and modified dates
  WorkEvent.beforeRemote('create', function(context, user, next) {
    context.args.data.createdOn = Date.now();
    context.args.data.modifiedOn = Date.now();
    context.args.data.ownerId = context.req.accessToken.userId;
    next();
  });
};
