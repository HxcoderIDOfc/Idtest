import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [appOpened, setAppOpened] = useState(null);
  const [locked, setLocked] = useState(true);

  const apps = [
    { name: "PrimeWeb" },
    { name: "YetuMail" },
    { name: "Primaloka" },
    { name: "NetGuard" },
    { name: "IndoStore" },
    { name: "Settings" },
    { name: "Camera" },
    { name: "Gallery" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1e1e2f] to-[#101018]">
      <div className="w-[390px] h-[844px] rounded-[40px] bg-black shadow-2xl overflow-hidden relative border-[8px] border-gray-800">

        {/* Status Bar */}
        <div className="absolute top-0 left-0 w-full z-40 px-4 py-2 flex justify-between items-center text-xs text-white bg-transparent">
          <span>20:31</span>
          <div className="flex items-center gap-2">
            <span>📶</span>
            <span>🔋 98%</span>
            <span>🔒 VPN</span>
          </div>
        </div>

        {/* Lock Screen */}
        <AnimatePresence>
          {locked && (
            <motion.div
              className="absolute w-full h-full z-50 bg-[#0f172a] flex flex-col items-center justify-center text-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-6xl font-bold mb-2">20:31</h1>
              <p className="text-sm mb-4">Senin, 24 Juni 2025</p>
              <button
                className="bg-white text-black px-6 py-2 rounded-full font-bold"
                onClick={() => setLocked(false)}
              >Geser untuk Buka</button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Panel */}
        <motion.div
          initial={{ y: -300 }}
          animate={{ y: panelOpen ? 0 : -300 }}
          transition={{ duration: 0.4 }}
          className="absolute top-0 left-0 w-full bg-[#1e293b] text-white z-30 rounded-b-xl"
        >
          <div className="px-4 pt-6 pb-3 border-b border-[#334155]">
            <div className="flex justify-between items-center text-sm">
              <div>
                <h2 className="text-xl font-bold">20:31</h2>
                <p className="text-xs opacity-70">Senin, 24 Juni 2025</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xs">📶</span>
                <span className="text-xs">🔋98%</span>
                <span className="text-xs">🔒 VPN</span>
                <span className="text-xs">⚙️</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4">
            {["Wi-Fi", "Bluetooth", "Mode Gelap", "Senter", "Data", "Mode Pesawat"].map((item) => (
              <div key={item} className="bg-[#334155] rounded-lg py-2 text-center text-sm shadow-md cursor-pointer">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* App View Dummy */}
        <AnimatePresence>
          {appOpened && (
            <motion.div
              className="absolute w-full h-full bg-white text-black p-6 z-30 overflow-auto"
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              exit={{ y: 1000 }}
            >
              <button onClick={() => setAppOpened(null)} className="text-sm text-blue-500 mb-4">⬅️ Kembali</button>
              <h2 className="text-xl font-bold mb-2">{appOpened}</h2>
              <p>Fitur ini masih dalam pengembangan. Nantikan versi berikutnya!</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Home Screen */}
        {!locked && !appOpened && (
          <div className="text-white px-6 pt-16 pb-6" onClick={() => setPanelOpen(false)}>
            <div className="mb-6">
              <div className="bg-white/90 text-black rounded-full px-4 py-2 flex items-center justify-between shadow-inner backdrop-blur-md">
                <img src="/logo.svg" alt="logo" className="h-5" />
                <span className="text-sm font-bold">INDOPRIME</span>
                <img src="/logo.svg" alt="logo" className="h-5" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              {apps.map((app) => (
                <div key={app.name} className="flex flex-col items-center" onClick={() => setAppOpened(app.name)}>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl shadow-lg cursor-pointer"></div>
                  <span className="text-xs mt-1">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Swipe Area */}
        <div
          className="absolute top-0 w-full h-[50px] z-50 cursor-pointer"
          onClick={() => setPanelOpen(!panelOpen)}
        ></div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full px-10 py-3 flex justify-between items-center text-white bg-[#0f172a]">
          <span onClick={() => alert('Back pressed')} className="cursor-pointer">⬅️</span>
          <span onClick={() => setAppOpened(null)} className="cursor-pointer">⭕</span>
          <span onClick={() => alert('Recent apps')} className="cursor-pointer">🗂️</span>
        </div>
      </div>
    </div>
  );
}