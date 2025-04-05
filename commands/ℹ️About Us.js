/*CMD
  command: ℹ️About Us
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

// see all parameters in https://core.telegram.org/bots/api#sendphoto
Api.sendPhoto({
  photo: "https://ibb.co/sdxhWxYn", // it is picture!
  caption: "💸 Welcome to BB Refer and earn  bot Your Gateway to Unlimited Earnings! 🚀🔥At BB Refer bot, we empower you to earn effortlessly while enjoying the best rewards! 🌟\n\n-------------------------------------------------------\n\n🔓 Unlock Your Earning Power Today! 💎\n✅ Minimum Withdrawal – Cash out with just 1BB ! Fast, secure, and hassle-free! 🎁💳\n✅ Multiple Earning Avenues – Explore exciting ways to boost your income daily! 📈✨\n✅ 24/7 Secure Payments – Withdraw in stantly & safely whenever you need! 🚀\n✅ Referral Rewards – Earn 2BB per referral and grow your earnings! 👥💰\n\n-------------------------------------------------------\n\n🚀 Start Your Journey to Financial Freedom Today!\n\n🕒 Every second counts! Sign up now and start earning REAL BB points with BB Reffer and earn bot! 💵💎",

  
  reply_markup: { inline_keyboard: [
    // line 1
    [
      // open the link on button pressing
      { text: "👩‍💻 Account", callback_data: "👩‍💻 Account" },
      // run command /onButton2 on button pressing
      { text: "🧑‍🤝‍🧑 Get invite link", callback_data: "🧑‍🤝‍🧑 Refer" }
    ],
    // line 2
    [
       // see all params in
       // https://core.telegram.org/bots/api#inlinekeyboardbutton
       { text: "🏫Main menu", callback_data: "/mainMenu" }
    ]
  ]}
});
