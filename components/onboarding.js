var debug = require('debug')('botkit:onboarding');

module.exports = function(controller) {

    controller.on('onboard', function(bot) {

        debug('Starting an onboarding experience!');
            bot.startPrivateConversation({user: bot.config.createdBy},function(err,convo) {
              if (err) {
                console.log(err);
              } else {
                convo.say("Hi I'm Terry the Thesaurus Bot. Send me a word you'd like a synonym for and i'll go get you some.");
              }
            });
    });

}
