const Discord = require("discord.js");
const axios = require("axios");
const bot = new Discord.Client();

const token = "";

const prefix = "!";

bot.on("ready", () => {
  console.log("Bot Running Smooth!");
});

bot.on("message", async msg => {
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  console.log(args);

  if (command === "coins") {
    let getCoins = async () => {
      let response = await axios.get("https://asymetrex.com/api/currency_list");
      let coins = response.data;
      return coins;
    };
    let coinsValue = await getCoins();
    console.log(coinsValue);
    msg.reply(
      `Current AsymetrEX listings are: \n\n ${coinsValue.btc.name} \n ${
        coinsValue.ltc.name
      } \n ${coinsValue.doge.name} \n ${coinsValue.osl.name} \n ${
        coinsValue.nbxc.name
      } \n ${coinsValue.mon.name} \n ${coinsValue.xero.name} \n ${
        coinsValue.etho.name
      } \n ${coinsValue.xam.name} \n ${coinsValue.dynge.name} \n ${
        coinsValue.cx.name
      } \n ${coinsValue.enix.name} \n ${coinsValue.eoe.name} \n ${
        coinsValue.ath.name
      } \n ${coinsValue.bitc.name} \n ${coinsValue.prkl.name} \n ${
        coinsValue.ubq.name
      }`
    );
  }

  // Atheios

  if (command === "ath") {
    let getAth = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/athbtc"
      );
      let ath = response.data;
      return ath;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let athValue = await getAth();
    let usdValue = await getUSD();
    let athusd = athValue.ticker.last * usdValue.bitcoin.usd;
    console.log(athValue);
    msg.reply(
      `Atheios - ATH is currently trading for: \n ${athusd} USD \n OR \n ${
        athValue.ticker.last
      } BTC`
    );
  }

  // PERKLE

  if (command === "prkl") {
    let getPrkl = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/prklbtc"
      );
      let prkl = response.data;
      return prkl;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let prklValue = await getPrkl();
    let usdValue = await getUSD();
    let prklusd = prklValue.ticker.last * usdValue.bitcoin.usd;
    console.log(prklValue);
    msg.reply(
      `Perkle - PRKL is currently trading for: \n ${prklusd} USD \n OR \n ${
        prklValue.ticker.last
      } BTC`
    );
  }

  // Ubiq

  if (command === "ubq") {
    let getUbq = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/ubqbtc"
      );
      let ubq = response.data;
      return ubq;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let ubqValue = await getUbq();
    let usdValue = await getUSD();
    let ubqusd = ubqValue.ticker.last * usdValue.bitcoin.usd;
    console.log(ubqValue);
    msg.reply(
      `Ubiq - UBQ is currently trading for; \n ${ubqusd} USD \n OR \n ${
        ubqValue.ticker.last
      } BTC`
    );
  }

  // Ether-1

  if (command === "etho") {
    let getEtho = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/ethobtc"
      );
      let etho = response.data;
      return etho;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let ethoValue = await getEtho();
    let usdValue = await getUSD();
    let ethousd = ethoValue.ticker.last * usdValue.bitcoin.usd;
    console.log(ethoValue);
    msg.reply(
      `Ether-1 - ETHO is currently trading for: \n ${ethousd} USD \n OR \n ${
        ethoValue.ticker.last
      } BTC`
    );
  }

  // Volume

  if (command === "volume") {
    let getVolume = async () => {
      let response = await axios.get("https://asymetrex.com/api/");
      let volume = response.data;
      return volume;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let volumeValue = await getVolume();
    let usdValue = await getUSD();
    let usdvolume =
      Math.round(volumeValue.total_volume * usdValue.bitcoin.usd) / 100;
    console.log(volumeValue);
    msg.reply(
      `Current AsymetrEX volume is: \n\n ${
        volumeValue.total_volume
      } BTC \n ${usdvolume} USD (Second Bot)`
    );
  }
});

bot.login(token);

