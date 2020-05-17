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
      `Current AsymetrEX listings are: \n\n ${coinsValue.btc.name} \n ${coinsValue.ltc.name} \n ${coinsValue.doge.name} \n ${coinsValue.mon.name} \n ${coinsValue.xero.name} \n ${coinsValue.etho.name} \n ${coinsValue.xero.name} \n ${coinsValue.xam.name} \n ${coinsValue.cx.name} \n ${coinsValue.enix.name} \n ${coinsValue.ath.name} \n ${coinsValue.bitc.name} \n ${coinsValue.prkl.name} \n ${coinsValue.ubq.name} \n ${coinsValue.aqua.name} \n ${coinsValue.fts.name} \n ${coinsValue.ctl.name}`
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

  // Xerom

  if (command === "xero") {
    let getXero = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/xerobtc"
      );
      let xero = response.data;
      return xero;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let xeroValue = await getXero();
    let usdValue = await getUSD();
    let xerousd = xeroValue.ticker.last * usdValue.bitcoin.usd;
    console.log(xeroValue);
    msg.reply(
      `Xerom - XERO is currently trading for: \n ${xerousd} USD \n OR \n ${
        xeroValue.ticker.last
      } BTC`
    );
  }

  // Moneybyte

  if (command === "mon") {
    let getMon = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/monbtc"
      );
      let mon = response.data;
      return mon;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let monValue = await getMon();
    let usdValue = await getUSD();
    let monusd = monValue.ticker.last * usdValue.bitcoin.usd;
    console.log(monValue);
    msg.reply(
      `MoneyByte - MON is currently trading for: \n ${monusd} USD \n OR \n ${
        monValue.ticker.last
      } BTC`
    );
  }

  // Amity Network

  if (command === "xam") {
    let getXam = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/xambtc"
      );
      let xam = response.data;
      return xam;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let xamValue = await getXam();
    let usdValue = await getUSD();
    let xamusd = xamValue.ticker.last * usdValue.bitcoin.usd;
    console.log(xamValue);
    msg.reply(
      `Amity Network - XAM is currently trading for: \n ${xamusd} USD \n OR \n ${
        xamValue.ticker.last
      } BTC`
    );
  }

  // Catalyst

  if (command === "cx") {
    let getCx = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/cxbtc"
      );
      let cx = response.data;
      return cx;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let cxValue = await getCx();
    let usdValue = await getUSD();
    let cxusd = cxValue.ticker.last * usdValue.bitcoin.usd;
    console.log(cxValue);
    msg.reply(
      `Catalyst - CX is currently trading for: \n ${cxusd} USD \n OR \n ${
        cxValue.ticker.last
      } BTC`
    );
  }

  // Enix

  if (command === "enix") {
    let getEnix = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/enixbtc"
      );
      let enix = response.data;
      return enix;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let enixValue = await getEnix();
    let usdValue = await getUSD();
    let enixusd = enixValue.ticker.last * usdValue.bitcoin.usd;
    console.log(enixValue);
    msg.reply(
      `Enix - ENIX is currently trading for: \n ${enixusd} USD \n OR \n ${
        enixValue.ticker.last
      } BTC`
    );
  }

  // AquaChain

  if (command === "aqua") {
    let getAqua = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/aquabtc"
      );
      let aqua = response.data;
      return aqua;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let aquaValue = await getAqua();
    let usdValue = await getUSD();
    let aquausd = aquaValue.ticker.last * usdValue.bitcoin.usd;
    console.log(aquaValue);
    msg.reply(
      `Aquachain - AQUA is currently trading for: \n ${aquausd} USD \n OR \n ${
        aquaValue.ticker.last
      } BTC`
    );
  }

  // FTS Coin

  if (command === "fts") {
    let getFts = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/ftsbtc"
      );
      let fts = response.data;
      return fts;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let ftsValue = await getFts();
    let usdValue = await getUSD();
    let ftsusd = ftsValue.ticker.last * usdValue.bitcoin.usd;
    console.log(ftsValue);
    msg.reply(
      `FTS Coin - FTS is currently trading for: \n ${ftsusd} USD \n OR \n ${
        ftsValue.ticker.last
      } BTC`
    );
  }

  // Citadel

  if (command === "ctl") {
    let getCtl = async () => {
      let response = await axios.get(
        "https://asymetrex.com/api/tickers/ctlbtc"
      );
      let ctl = response.data;
      return ctl;
    };
    let getUSD = async () => {
      let response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      let usd = response.data;
      return usd;
    };
    let ctlValue = await getCtl();
    let usdValue = await getUSD();
    let ctlusd = ctlValue.ticker.last * usdValue.bitcoin.usd;
    console.log(ctlValue);
    msg.reply(
      `Citadel - CTL is currently trading for: \n ${ctlusd} USD \n OR \n ${
        ctlValue.ticker.last
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
      Math.round(volumeValue.total_volume * usdValue.bitcoin.usd);
    console.log(volumeValue);
    msg.reply(
      `Current AsymetrEX volume is: \n\n ${
        volumeValue.total_volume
      } BTC \n ${usdvolume} USD`
    );
  }
});

bot.login(token);
