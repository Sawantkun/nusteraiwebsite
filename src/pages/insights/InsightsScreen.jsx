import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, BarChart3, AlertCircle, Brain, Target, Newspaper, Zap, TrendingDown, Info } from 'lucide-react';
import DesktopLayout from '../../components/layout/DesktopLayout';

const InsightsScreen = () => {
  const aiInsights = [
    {
      title: 'Market Bullish Trend',
      description: 'Nifty 50 showing strong upward momentum with increased institutional buying. Technical indicators suggest continuation of the trend. Consider accumulating quality tech stocks on dips.',
      sentiment: 'Bullish',
      icon: TrendingUp,
      color: '#10B981',
      confidence: 92,
      timeframe: '1-2 weeks'
    },
    {
      title: 'Banking Sector Consolidation',
      description: 'Bank Nifty consolidating in a tight range after recent rally. Volume analysis indicates strong support at current levels. Wait for decisive breakout before entering new positions.',
      sentiment: 'Neutral',
      icon: BarChart3,
      color: '#F59E0B',
      confidence: 78,
      timeframe: '3-5 days'
    },
    {
      title: 'IT Sector Volatility Alert',
      description: 'Increased volatility expected in IT sector due to global market uncertainty and currency fluctuations. Implement strict risk management and use appropriate stop-loss orders.',
      sentiment: 'Caution',
      icon: AlertCircle,
      color: '#EF4444',
      confidence: 85,
      timeframe: 'Next week'
    },
  ];

  const stockRecommendations = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', action: 'Buy', targetPrice: '2,650', currentPrice: '2,456', upside: '+7.9%', sentiment: 'Bullish', confidence: 88 },
    { symbol: 'TCS', name: 'Tata Consultancy', action: 'Buy', targetPrice: '4,100', currentPrice: '3,890', upside: '+5.4%', sentiment: 'Bullish', confidence: 82 },
    { symbol: 'INFY', name: 'Infosys', action: 'Hold', targetPrice: '1,620', currentPrice: '1,567', upside: '+3.4%', sentiment: 'Neutral', confidence: 65 },
    { symbol: 'HDFC', name: 'HDFC Bank', action: 'Sell', targetPrice: '1,580', currentPrice: '1,678', upside: '-5.8%', sentiment: 'Bearish', confidence: 72 },
    { symbol: 'ICICIBANK', name: 'ICICI Bank', action: 'Buy', targetPrice: '1,050', currentPrice: '987', upside: '+6.4%', sentiment: 'Bullish', confidence: 79 },
  ];

  const marketNews = [
    { title: 'Nifty 50 hits all-time high on strong FII inflows', time: '2 hours ago', source: 'Economic Times' },
    { title: 'RBI maintains repo rate, focuses on inflation control', time: '4 hours ago', source: 'CNBC' },
    { title: 'Tech stocks rally on positive earnings outlook', time: '6 hours ago', source: 'Bloomberg' },
    { title: 'Banking sector shows resilience amid global uncertainty', time: '8 hours ago', source: 'Reuters' },
  ];

  const technicalIndicators = [
    { name: 'RSI (14)', value: '68.5', signal: 'Neutral', description: 'Approaching overbought zone' },
    { name: 'MACD', value: 'Bullish', signal: 'Buy', description: 'Positive crossover detected' },
    { name: 'Moving Avg', value: '21,450', signal: 'Buy', description: 'Price above 50 DMA' },
    { name: 'Volume', value: 'High', signal: 'Bullish', description: 'Above average volume' },
  ];

  const predictions = [
    { metric: 'Nifty 50 (1 Week)', current: '21,456', predicted: '21,850', change: '+1.84%', confidence: 76 },
    { metric: 'Bank Nifty (1 Week)', current: '45,678', predicted: '46,200', change: '+1.14%', confidence: 71 },
    { metric: 'Volatility Index', current: '12.5', predicted: '14.2', change: '+13.6%', confidence: 68 },
  ];

  return (
    <DesktopLayout>
      <div className="p-4 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6 md:mb-8"
        >
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#E91E63] flex items-center justify-center">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2">AI Insights</h1>
              <p className="text-white/60 text-xs md:text-base">Powered by advanced machine learning algorithms</p>
            </div>
          </div>
        </motion.div>

        {/* AI Insights Cards */}
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {aiInsights.map((insight, i) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${insight.color}40, ${insight.color}20)` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: insight.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1">{insight.title}</h3>
                        <p className="text-white/60 text-xs">Timeframe: {insight.timeframe}</p>
                      </div>
                      <div className="text-right">
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{ background: `${insight.color}20`, color: insight.color }}
                        >
                          {insight.sentiment}
                        </span>
                        <p className="text-white/60 text-xs mt-1">Confidence: {insight.confidence}%</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">{insight.description}</p>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${insight.confidence}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${insight.color}, ${insight.color}80)` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Stock Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981]/40 to-[#10B981]/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-[#10B981]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">AI Recommendations</h3>
                <p className="text-white/60 text-xs">Top picks based on technical & fundamental analysis</p>
              </div>
            </div>

            <div className="space-y-3">
              {stockRecommendations.map((stock, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5CF6]/40 to-[#8B5CF6]/20 flex items-center justify-center">
                        <span className="text-[#8B5CF6] font-bold text-xs">{stock.symbol.substring(0, 2)}</span>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{stock.symbol}</p>
                        <p className="text-white/60 text-xs">{stock.name}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-lg text-xs font-bold ${stock.action === 'Buy' ? 'bg-[#10B981]/20 text-[#10B981]' : stock.action === 'Sell' ? 'bg-[#EF4444]/20 text-[#EF4444]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'}`}>
                      {stock.action}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 text-sm">
                    <div>
                      <p className="text-white/60 text-xs">Current</p>
                      <p className="text-white font-semibold">₹{stock.currentPrice}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">Target</p>
                      <p className="text-white font-semibold">₹{stock.targetPrice}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">Upside</p>
                      <p className={`font-semibold ${stock.upside.startsWith('+') ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>{stock.upside}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">Confidence</p>
                      <p className="text-white font-semibold">{stock.confidence}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Market News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00BCD4]/40 to-[#00BCD4]/20 flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-[#00BCD4]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Market News</h3>
                <p className="text-white/60 text-xs">Latest updates</p>
              </div>
            </div>

            <div className="space-y-3">
              {marketNews.map((news, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                  <p className="text-white text-sm font-medium mb-2 line-clamp-2">{news.title}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60">{news.source}</span>
                    <span className="text-white/40">{news.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Technical Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6]/40 to-[#8B5CF6]/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Technical Indicators</h3>
                <p className="text-white/60 text-xs">Key signals for Nifty 50</p>
              </div>
            </div>

            <div className="space-y-3">
              {technicalIndicators.map((indicator, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-semibold text-sm">{indicator.name}</p>
                    <span className={`text-xs font-bold px-2 py-1 rounded-lg ${indicator.signal === 'Buy' ? 'bg-[#10B981]/20 text-[#10B981]' : indicator.signal === 'Sell' ? 'bg-[#EF4444]/20 text-[#EF4444]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'}`}>
                      {indicator.signal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-white/60 text-xs">{indicator.description}</p>
                    <p className="text-white text-sm font-bold">{indicator.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Predictions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E91E63]/40 to-[#E91E63]/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-[#E91E63]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">AI Predictions</h3>
                <p className="text-white/60 text-xs">Machine learning forecasts</p>
              </div>
            </div>

            <div className="space-y-4">
              {predictions.map((prediction, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5">
                  <p className="text-white/60 text-xs mb-2">{prediction.metric}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-white text-sm">Current: <span className="font-bold">{prediction.current}</span></p>
                      <p className="text-white text-sm">Predicted: <span className="font-bold">{prediction.predicted}</span></p>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-bold ${prediction.change.startsWith('+') ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                        {prediction.change}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${prediction.confidence}%` }}
                        transition={{ delay: 0.9 + idx * 0.1, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-[#E91E63] to-[#8B5CF6] rounded-full"
                      />
                    </div>
                    <span className="text-white/60 text-xs">{prediction.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default InsightsScreen;
