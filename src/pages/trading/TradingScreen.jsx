import { motion } from 'framer-motion';
import { Search, TrendingUp, TrendingDown, Filter, Star, ArrowUpRight, ArrowDownRight, BarChart2, LineChart } from 'lucide-react';
import DesktopLayout from '../../components/layout/DesktopLayout';
import { useState } from 'react';

const TradingScreen = () => {
  const stocks = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: '2,456.80', change: '+5.2%', changeValue: '+121.50', isPositive: true, volume: '2.3M', marketCap: '16.5L Cr' },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: '3,890.50', change: '+4.8%', changeValue: '+178.20', isPositive: true, volume: '1.8M', marketCap: '14.2L Cr' },
    { symbol: 'INFY', name: 'Infosys', price: '1,567.20', change: '+3.9%', changeValue: '+58.90', isPositive: true, volume: '3.1M', marketCap: '6.5L Cr' },
    { symbol: 'HDFC', name: 'HDFC Bank', price: '1,678.90', change: '-2.3%', changeValue: '-39.50', isPositive: false, volume: '2.7M', marketCap: '9.3L Cr' },
    { symbol: 'ICICIBANK', name: 'ICICI Bank', price: '987.45', change: '+2.1%', changeValue: '+20.35', isPositive: true, volume: '4.2M', marketCap: '6.9L Cr' },
    { symbol: 'WIPRO', name: 'Wipro Limited', price: '456.30', change: '-1.5%', changeValue: '-6.95', isPositive: false, volume: '1.5M', marketCap: '2.5L Cr' },
    { symbol: 'BHARTIARTL', name: 'Bharti Airtel', price: '876.20', change: '+3.2%', changeValue: '+27.20', isPositive: true, volume: '2.9M', marketCap: '5.1L Cr' },
    { symbol: 'HCLTECH', name: 'HCL Technologies', price: '1,234.50', change: '+1.8%', changeValue: '+21.80', isPositive: true, volume: '1.2M', marketCap: '3.4L Cr' },
  ];

  const [selectedStock, setSelectedStock] = useState(stocks[0]);
  const [orderType, setOrderType] = useState('buy');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const watchlist = [
    { symbol: 'RELIANCE', price: '2,456.80', change: '+5.2%', isPositive: true },
    { symbol: 'TCS', price: '3,890.50', change: '+4.8%', isPositive: true },
    { symbol: 'INFY', price: '1,567.20', change: '+3.9%', isPositive: true },
  ];

  const orderBook = {
    bids: [
      { price: '2,455.50', quantity: '1,234', orders: 15 },
      { price: '2,455.00', quantity: '2,567', orders: 23 },
      { price: '2,454.50', quantity: '3,890', orders: 31 },
      { price: '2,454.00', quantity: '1,456', orders: 18 },
    ],
    asks: [
      { price: '2,457.00', quantity: '987', orders: 12 },
      { price: '2,457.50', quantity: '1,890', orders: 19 },
      { price: '2,458.00', quantity: '2,345', orders: 27 },
      { price: '2,458.50', quantity: '1,678', orders: 21 },
    ]
  };

  return (
    <DesktopLayout>
      <div className="p-4 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6 md:mb-8"
        >
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2">Trading</h1>
            <p className="text-white/60 text-xs md:text-base">Buy and sell stocks in real-time</p>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-white/80 transition-all flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>
        </motion.div>

        {/* Mobile: Single Column Layout */}
        <div className="md:hidden space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search stocks..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 outline-none focus:border-[#10B981] transition-colors"
            />
          </div>

          {/* Stock List - Mobile */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 max-h-[500px] overflow-y-auto">
            <h3 className="text-white font-bold mb-4">Stocks</h3>
            <div className="space-y-2">
              {stocks.map((stock, i) => (
                <div
                  key={stock.symbol}
                  onClick={() => setSelectedStock(stock)}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${selectedStock?.symbol === stock.symbol ? 'bg-[#10B981]/20 border border-[#10B981]' : 'bg-white/5'}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">{stock.symbol}</p>
                      <p className="text-white/60 text-xs">{stock.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-sm">₹{stock.price}</p>
                      <p className={`text-xs font-semibold ${stock.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                        {stock.change}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Form - Mobile */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
            <h3 className="text-white font-bold mb-4">Place Order</h3>

            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setOrderType('buy')}
                className={`flex-1 py-2 rounded-lg font-semibold transition-all text-sm ${orderType === 'buy' ? 'bg-[#10B981] text-white' : 'bg-white/5 text-white/60'}`}
              >
                Buy
              </button>
              <button
                onClick={() => setOrderType('sell')}
                className={`flex-1 py-2 rounded-lg font-semibold transition-all text-sm ${orderType === 'sell' ? 'bg-[#EF4444] text-white' : 'bg-white/5 text-white/60'}`}
              >
                Sell
              </button>
            </div>

            <div className="bg-white/5 rounded-lg p-3 mb-4">
              <p className="text-white/60 text-xs mb-1">Selected Stock</p>
              <p className="text-white font-bold text-sm">{selectedStock.symbol}</p>
              <p className="text-white text-lg font-bold">₹{selectedStock.price}</p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-white/80 text-sm mb-1 block">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity"
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 outline-none focus:border-[#10B981] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm mb-1 block">Price (₹)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Market price"
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 outline-none focus:border-[#10B981] transition-colors text-sm"
                />
              </div>
            </div>

            <button
              className={`w-full py-3 rounded-lg font-bold text-white transition-all mt-4 ${orderType === 'buy' ? 'bg-gradient-to-r from-[#10B981] to-[#059669]' : 'bg-gradient-to-r from-[#EF4444] to-[#DC2626]'}`}
            >
              {orderType === 'buy' ? 'Place Buy Order' : 'Place Sell Order'}
            </button>
          </div>
        </div>

        {/* Desktop: Multi-Column Layout */}
        <div className="hidden md:grid grid-cols-12 gap-6">
          {/* Left Section - Stock List */}
          <div className="col-span-4">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search stocks..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 outline-none focus:border-[#10B981] transition-colors"
                />
              </div>
            </motion.div>

            {/* Watchlist */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-[#FFD700]" />
                <h3 className="text-white font-bold">Watchlist</h3>
              </div>
              <div className="space-y-2">
                {watchlist.map((stock, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer">
                    <span className="text-white font-semibold text-sm">{stock.symbol}</span>
                    <div className="text-right">
                      <p className="text-white text-sm">₹{stock.price}</p>
                      <p className={`text-xs font-semibold ${stock.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                        {stock.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stocks List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 max-h-[600px] overflow-y-auto"
            >
              <h3 className="text-white font-bold mb-4">All Stocks</h3>
              <div className="space-y-2">
                {stocks.map((stock, i) => (
                  <div
                    key={stock.symbol}
                    onClick={() => setSelectedStock(stock)}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${selectedStock?.symbol === stock.symbol ? 'bg-[#10B981]/20 border border-[#10B981]' : 'bg-white/5 hover:bg-white/10'}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-white font-bold text-sm">{stock.symbol}</p>
                        <p className="text-white/60 text-xs">{stock.name}</p>
                      </div>
                      {stock.isPositive ? (
                        <TrendingUp className="w-4 h-4 text-[#10B981]" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-[#EF4444]" />
                      )}
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white font-bold">₹{stock.price}</p>
                        <p className={`text-xs font-semibold ${stock.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                          {stock.change}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/40 text-xs">Vol: {stock.volume}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Middle Section - Chart & Order Book */}
          <div className="col-span-5 space-y-6">
            {/* Stock Details */}
            {selectedStock && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-white text-2xl font-bold">{selectedStock.symbol}</h2>
                    <p className="text-white/60 text-sm">{selectedStock.name}</p>
                  </div>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Star className="w-5 h-5 text-white/60 hover:text-[#FFD700]" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-white/60 text-sm mb-1">Current Price</p>
                    <p className="text-white text-3xl font-bold">₹{selectedStock.price}</p>
                    <div className={`flex items-center space-x-2 mt-2 ${selectedStock.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                      {selectedStock.isPositive ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                      <span className="font-bold">{selectedStock.change}</span>
                      <span className="font-semibold">({selectedStock.changeValue})</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/60 text-sm">Market Cap</span>
                      <span className="text-white text-sm font-semibold">{selectedStock.marketCap}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60 text-sm">Volume</span>
                      <span className="text-white text-sm font-semibold">{selectedStock.volume}</span>
                    </div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-white/5 rounded-xl p-8 flex items-center justify-center h-64">
                  <div className="text-center">
                    <LineChart className="w-16 h-16 text-white/20 mx-auto mb-4" />
                    <p className="text-white/40 text-sm">Price Chart</p>
                    <p className="text-white/20 text-xs mt-1">Chart visualization would go here</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Order Book */}
            {selectedStock && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-white font-bold mb-4 flex items-center space-x-2">
                  <BarChart2 className="w-5 h-5 text-[#00BCD4]" />
                  <span>Order Book</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* Bids */}
                  <div>
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
                      <span className="text-[#10B981] text-sm font-semibold">Bids</span>
                      <span className="text-white/40 text-xs">Qty</span>
                    </div>
                    <div className="space-y-2">
                      {orderBook.bids.map((bid, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-[#10B981] font-semibold">₹{bid.price}</span>
                          <span className="text-white/60">{bid.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Asks */}
                  <div>
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
                      <span className="text-[#EF4444] text-sm font-semibold">Asks</span>
                      <span className="text-white/40 text-xs">Qty</span>
                    </div>
                    <div className="space-y-2">
                      {orderBook.asks.map((ask, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-[#EF4444] font-semibold">₹{ask.price}</span>
                          <span className="text-white/60">{ask.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Section - Order Form */}
          <div className="col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 sticky top-8"
            >
              <h3 className="text-white font-bold text-lg mb-6">Place Order</h3>

              {/* Order Type Tabs */}
              <div className="flex space-x-2 mb-6">
                <button
                  onClick={() => setOrderType('buy')}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all ${orderType === 'buy' ? 'bg-[#10B981] text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setOrderType('sell')}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all ${orderType === 'sell' ? 'bg-[#EF4444] text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                >
                  Sell
                </button>
              </div>

              {selectedStock ? (
                <>
                  {/* Stock Info */}
                  <div className="bg-white/5 rounded-xl p-4 mb-6">
                    <p className="text-white/60 text-xs mb-1">Selected Stock</p>
                    <p className="text-white font-bold">{selectedStock.symbol}</p>
                    <p className="text-white/60 text-sm">{selectedStock.name}</p>
                  </div>

                  {/* Quantity Input */}
                  <div className="mb-4">
                    <label className="text-white/80 text-sm mb-2 block">Quantity</label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="Enter quantity"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 outline-none focus:border-[#10B981] transition-colors"
                    />
                  </div>

                  {/* Price Input */}
                  <div className="mb-6">
                    <label className="text-white/80 text-sm mb-2 block">Price (₹)</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Market price"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 outline-none focus:border-[#10B981] transition-colors"
                    />
                  </div>

                  {/* Order Summary */}
                  <div className="bg-white/5 rounded-xl p-4 mb-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Order Value</span>
                      <span className="text-white font-semibold">
                        ₹{quantity && price ? (parseFloat(quantity) * parseFloat(price)).toLocaleString() : '0'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Charges</span>
                      <span className="text-white font-semibold">₹20.00</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-white font-semibold">Total</span>
                        <span className="text-white font-bold">
                          ₹{quantity && price ? (parseFloat(quantity) * parseFloat(price) + 20).toLocaleString() : '20'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <button
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all ${orderType === 'buy' ? 'bg-gradient-to-r from-[#10B981] to-[#059669] hover:shadow-lg hover:shadow-[#10B981]/50' : 'bg-gradient-to-r from-[#EF4444] to-[#DC2626] hover:shadow-lg hover:shadow-[#EF4444]/50'}`}
                  >
                    {orderType === 'buy' ? 'Place Buy Order' : 'Place Sell Order'}
                  </button>
                </>
              ) : (
                <div className="text-center py-12">
                  <TrendingUp className="w-16 h-16 text-white/20 mx-auto mb-4" />
                  <p className="text-white/40 text-sm">Select a stock to start trading</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default TradingScreen;
