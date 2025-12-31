// Utility để phát hiện thiết bị
export const detectDevice = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // Phát hiện iPhone
  const isIPhone = /iPhone/i.test(userAgent);
  
  // Phát hiện iPhone 12 Pro Max cụ thể
  // iPhone 12 Pro Max có screen width 428px x 926px (portrait)
  // hoặc 926px x 428px (landscape)
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const innerWidth = window.innerWidth;
  
  // Kiểm tra kích thước màn hình iPhone 12 Pro Max
  const isIPhone12ProMaxSize = 
    (screenWidth === 428 && screenHeight === 926) ||
    (screenWidth === 926 && screenHeight === 428) ||
    (innerWidth >= 428 && innerWidth <= 430); // Cho phép sai số nhỏ
  
  // Phát hiện iPhone 12 Pro Max dựa trên user agent và kích thước
  // iPhone 12 Pro Max có thể có model identifier trong user agent
  const isIPhone12ProMax = isIPhone && (
    isIPhone12ProMaxSize ||
    /iPhone13,4/i.test(userAgent) || // iPhone 12 Pro Max model identifier
    (innerWidth >= 428 && innerWidth <= 430 && screenWidth >= 428)
  );
  
  // Phát hiện iPhone nói chung (bao gồm 12 Pro Max)
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  
  // Phát hiện màn hình lớn (Pro Max thường có màn hình lớn)
  const isLargeScreen = innerWidth >= 428 || screenWidth >= 428;
  
  return {
    isIPhone,
    isIPhone12ProMax,
    isIOS,
    screenWidth,
    screenHeight,
    innerWidth,
    innerHeight: window.innerHeight,
    userAgent
  };
};

