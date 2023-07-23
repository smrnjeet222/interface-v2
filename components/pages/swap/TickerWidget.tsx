import React, { useEffect, useRef } from 'react';

const TickerWidget: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const refElement = ref.current;
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = '{"colorTheme": "dark"}';
    if (refElement) {
      refElement.appendChild(script);
    }

    // let's do the memory clean up on destruction of component.
    return () => {
      if (refElement && refElement.contains(script)) {
        refElement.removeChild(script);
      }
    };
  }, []);

  return (
    <div className='tradingview-widget-container' ref={ref}>
      <div className='tradingview-widget-container__widget'></div>
    </div>
  );
};

export default React.memo(TickerWidget);
