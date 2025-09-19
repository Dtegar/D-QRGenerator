import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';

export default function QRGenerator() {
  const [mounted, setMounted] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [downloadFormat, setDownloadFormat] = useState('PNG');
  const [downloadSize, setDownloadSize] = useState(1000);
  const [customSize, setCustomSize] = useState('');
  const [fileName, setFileName] = useState('qr-code');
  const qrRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const downloadQRCode = () => {
    const finalSize = customSize || downloadSize;
    const finalFileName = fileName || 'qr-code';
    
    if (downloadFormat === 'SVG') {
      // Handle SVG download
      const svgElement = qrRef.current.querySelector('svg');
      if (!svgElement) {
        console.error('SVG element not found');
        return;
      }
      
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(svgBlob);
      link.download = `${finalFileName}.svg`; // Remove timestamp
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Handle PNG download
      const canvas = qrRef.current.querySelector('canvas');
      const tempCanvas = document.createElement('canvas');
      const ctx = tempCanvas.getContext('2d');
      tempCanvas.width = finalSize;
      tempCanvas.height = finalSize;
      
      // Scale the QR code to desired size
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, finalSize, finalSize);
      ctx.drawImage(canvas, 0, 0, finalSize, finalSize);
      
      const image = tempCanvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `${finalFileName}.png`; // Remove timestamp
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setShowModal(false);
  };

  // Replace the QRCodeCanvas component with this conditional rendering
  const QRCodeComponent = downloadFormat === 'SVG' ? (
    <QRCodeSVG
      value={inputText}
      size={250}
      level="H"
      includeMargin={false}
      className="rounded-xl shadow-md"
      style={{ padding: '10px', backgroundColor: 'white' }}
    />
  ) : (
    <QRCodeCanvas
      value={inputText}
      size={250}
      level="H"
      includeMargin={false}
      className="rounded-xl shadow-md"
      style={{ padding: '10px', backgroundColor: 'white' }}
    />
  );

  return (
    <>
      <Head>
        <title>D'QRGenerator</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 p-4 sm:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
              D'QRGenerator
            </h1>
            <p className="text-gray-500 mt-2">Buat qrcode kamu sendiri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Input Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <label className="block text-gray-700 font-medium mb-3">
                Masukan Teks atau URL
              </label>
              <textarea
                className="w-full h-44 p-4 bg-white/50 border border-blue-100 rounded-2xl 
                          focus:ring-2 focus:ring-blue-200 focus:border-blue-300 outline-none 
                          transition duration-200 resize-none text-gray-700 placeholder-gray-400"
                placeholder="Type anything to generate QR code..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <p className="text-xs text-gray-400 mt-2">
                QR code akan terupdate secara otomatis saat kamu mengetik.
              </p>
            </div>

            {/* QR Code Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <h2 className="text-gray-700 font-medium mb-4">
                QR Code Kamu
              </h2>
              <div className="bg-blue-100 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px]">
                {mounted && inputText ? (
                  <>
                    <div className="transform hover:scale-105 transition-transform duration-300" ref={qrRef}>
                      {QRCodeComponent}
                    </div>
                    <button
                      onClick={() => setShowModal(true)}
                      className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </>
                ) : (
                  <div className="text-gray-400 text-center space-y-2">
                    <svg 
                      className="w-16 h-16 mx-auto text-gray-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <p>Enter text to generate QR code</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 transition-all duration-300">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Download QR Code</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* File Name Input - Tambahkan ini */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama File
              </label>
              <input
                type="text"
                placeholder="Masukkan nama file"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Format Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Format Gambar
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setDownloadFormat('PNG')}
                  className={`px-4 py-2 rounded-lg flex-1 ${
                    downloadFormat === 'PNG'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  PNG
                </button>
                <button
                  onClick={() => setDownloadFormat('SVG')}
                  className={`px-4 py-2 rounded-lg flex-1 ${
                    downloadFormat === 'SVG'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  SVG
                </button>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ukuran Gambar
              </label>
              <div className="grid grid-cols-5 gap-2 mb-3">
                {[100, 200, 500, 1000, 2000].map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setDownloadSize(size);
                      setCustomSize('');
                    }}
                    className={`px-2 py-1 text-sm rounded ${
                      downloadSize === size && !customSize
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}px
                  </button>
                ))}
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  placeholder="Custom size"
                  value={customSize}
                  onChange={(e) => {
                    setCustomSize(e.target.value);
                    setDownloadSize(0);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="text-gray-500">px</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={downloadQRCode}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}