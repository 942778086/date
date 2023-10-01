import './App.css';
import React, { Suspense } from 'react';

const isMobile = window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)

function App() {
  const LazyPc = React.lazy(() => import('./view/pc/comp/layout'))
  const LazyMobile = React.lazy(() => import('./view/mobile/comp/layout'))
  return (
    <div className="App">
      <Suspense>
        {
          isMobile ? <LazyMobile/> : <LazyPc/>
        }
      </Suspense>
    </div>
  );
}

export default App;
