import React from "react";
import Page from "./components/Page";
import { NotificationProvider } from "./contexts/NotificationContext";
import { ThemeProvider } from "./contexts/ThemeContext";

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <Page />
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
