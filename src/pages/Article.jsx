import React from 'react';

const Article = () => {
  return (
    <div className="container-article">
      <h2 className="article-title">
        The New York Stock Exchange president says the stock market is not a
        casino. Here’s what academic research says.
      </h2>
      <img src="https://images.mktw.net/im-299272" className="article-img" />
      <p className="article-description">
        Some economically-sensitive stocks have underperformed the broader
        market, while the U.S. dollar has risen. That combination makes some
        nervous about those stocks, but they needn’t worry.\r\n\r\nIndustrials
        and banks, two highly cyclical sectors, are marginally underperforming
        the border market since January 6, the date that marked a reversal of
        the Dollar’s downtrend. The Industrial Select Sector SPDR Fund (XLI) has
        underperformed the S&P 500 by almost 4 percentage points since January
        6, while the SPDR S&P Bank ETF (KBE) has underperformed by less than a
        tenth of a percentage point. Since that date, the U.S. Dollar Index
        (DXY) is up 1.6%.\r\n\r\nUsually, when the dollar rises, equities in
        general perform poorly because global investors are moving into safe
        haven assets as they see the global economic outlook weakening. “If USD
        were to show a notable strengthening this year, that would, to some
        extent, go against our bullish equity market call,” wrote JPMorgan
        global equity strategists in a note. That certainly doesn’t set up well
        for cyclical stocks.\r\n\r\nBut this moment is different; the dollar’s
        strength isn’t a refection of global risk aversion from investors, but
        rather a U.S. economy expected to perform handsomely relative to other
        countries for the longer-term, even as all economies rebound from the
        pandemic. Also, U.S. interest rates are expected to rise faster than in
        other countries over the next several years, making owning the greenback
        more attractive versus other currencies. That’s also consistent with the
        theme of U.S. economic growth outperformance.\r\n\r\nThis all lends
        itself to strong performance for cyclical stocks. “Weakness in cyclicals
        due to Dollar gains represent buying opportunities assuming USD strength
        is based on improving growth prospects,” wrote Dennis DeBusschere, head
        of portfolio strategy research at Evercore in a note. “Don’t dump
        cyclicals because the dollar is strengthening,” Yung Yu Ma, chief
        investment strategist at BMO Wealth Management told Barron’s.
        “Industrials and financials will do well.”\r\n\r\nGiven the positions of
        DeBusschere and Ma, some might be scratching their heads at why those
        cyclicals aren’t top performers this year. Actually, they have been
        spectacular outperformers since September 23, the start of a fresh rally
        in stocks and a move into assets that benefit with a strengthening
        economy. The Industrial Select Sector SPDR Fund is up 19%, roughly in
        line with the S&P 500’s gain. The SPDR S&P Bank ETF is up 65%. Notably,
        energy stocks, as seen by the Energy Select Sector SPDR Fund (XLE), is
        up 46% since that date. Ma says cyclical stocks are taking a breather,
        while other forgotten areas of the market catch up.\r\n\r\nBelieving in
        the global economy’s upturn means believing in cyclicals — regardless of
        what the dollar does.
      </p>
      <div className="article-expert-comment">
        <h3 className="article-expert-comment-title">Experts Comment</h3>
        <p className="article-expert-comment-text">
          Over long periods of time the market reflects the gradual growth of
          the larger economy.\nBut many people want to be rich now, or beat the
          average. This is gambling. It is based on a few stocks for a short
          period of time, and assumes all the other traders are rational in some
          way. \nIn the short term the market acts like a herd of cows: always
          looking to stampede in some direction. In the long run the cows always
          return to the barn.\nSo, be aware that gambling and a sure bet operate
          at different time scales. I have no interest in learning enough about
          any stock, to make day trades. \nAnd investing for the long term has
          more than doubled my money.
        </p>
      </div>
    </div>
  );
};

export default Article;
