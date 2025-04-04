/*CMD
  command: /mainMenu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var channel1 = Bot.getProperty("channel1")

if (channel1 !== undefined) {
  var joined = User.getProperty("joined")

  if (joined !== "Yes") {
    var notJoinedText = "<i>⚠️ Must join our channels to use the bot.</i>"

    Api.sendMessage({
      text: notJoinedText,
      parse_mode: "html"
    })

    Bot.runCommand("/start")
    return
  }
}

var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>"

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  })
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"

  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  })
  return
}

var referCount = User.getProperty("referCount")

if (referCount == undefined) {
  let refUser = Libs.ReferralLib.getAttractedBy()

  if (refUser) {
    var refBalance = Libs.ResourcesLib.anotherUserRes(
      "balance",
      refUser.telegramid
    )
    var perRefer = Bot.getProperty("perRefer")

    refBalance.add(parseFloat(perRefer))

    var currency = Bot.getProperty("currency")
    var refUserText =
      "<b>🎉 Congratulations \n\n💸 You got :</b> <code>" +
      perRefer +
      " " +
      currency +
      "</code> <b>for referring a new user! 💰</b>"

    Api.sendMessage({
      chat_id: refUser.telegramid,
      text: refUserText,
      parse_mode: "html"
    })

    User.setProperty("referCount", 1, "integer") // Set referCount to 1 to indicate that referral bonus is already given

    User.setProperty("referStatus", "valid", "string")
  }
}

var userName = user.first_name
var botLink = "@" + bot.name
var text = "*👋 Hello " + userName + "\n\n Welcome to " + botLink + "\n\n*✨ You have been logged in to to Your Dashboard! ✨\n\n📊 Manage your earnings and tasks effortlessly!\n💰 Invite friends & earn rewards!\n💼 Withdraw your earnings anytime!\n👇 Use the buttons below to navigate!"

var keyboard =
  "👩‍💻 Account,💳 Wallet\n🧑‍🤝‍🧑 Refer, 🏧 Withdraw, 🎁 Bonus\n📊 Statistics,ℹ️About Us, 📞 Support"

Bot.sendKeyboard(keyboard, text)

