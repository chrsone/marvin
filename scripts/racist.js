// Description:
//  It's important that we do not descend into madness and racism
//
// Dependencies:
//  None
//
// Configuration:
//  None
// Commands:
//  marvin noracist - Receive appropriate gif

module.exports = function (robot) {

  robot.respond(/(noracist)/i, function (msg) {
    msg.send("http://i.imgur.com/HEOJs.gif");
  });

};
