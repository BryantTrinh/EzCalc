const { Client, Message, MessageEmbed } = require('discord.js');
const math = require('mathjs');

module.exports = {
  name: "calculator",
  /**
   * @param { Client } client
   * @param { Message } message
   * @param { MessageEmbed } arguments
   */

  run: async (client, message, args) => {
    try {
      message.channel.send(new MessageEmbed() 
        .addField('Problem', args.join(" "))
        .addField('Answer', math.evaluate(args.join(" ")))
      );
    } catch (err) {
      message.channel.send("Problem not valid!");
    }
  },
};
