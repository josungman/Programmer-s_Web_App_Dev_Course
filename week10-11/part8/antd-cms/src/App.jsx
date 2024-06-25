import { useState } from "react";
import { ConfigProvider } from "antd";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./route/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Banner from "./pages/contents/Banner";
import BannerDetail from "./pages/contents/BannerDetail";
import Transactions from "./pages/transaction/Transactions";
import TransactionsDetail from "./pages/transaction/TransactionsDetail";
import MyPrivileges from "./pages/accounts/MyPrivileges";
import Notice from "./pages/Notice";
import NoticeDetail from "./pages/NoticeDetail";
import UserinFlowpath from "./pages/userflowpath/UserinFlowpath";
import ContentPerformanceResult from "./pages/contentperformanceresult/ContentPerformanceResult";
import MediaManagement from "./pages/mediamanagement/MediaManagement";
import RecentActivityDetails from "./pages/recentactivitydetails/RecentActivityDetails";
import SendingNotifications from "./pages/sendingnotifications/SendingNotifications";
import Seosetting from "./pages/seosetting/Seosetting";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0575E6",
        },
      }}
    >
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/content/banner" element={<Banner />} />
          <Route
            path="/content/banner/:id"
            element={<BannerDetail />}
          />
          <Route path="/transactions" element={<Transactions />} />
          <Route
            path="/transactions/:id"
            element={<TransactionsDetail />}
          />

          <Route
            path="/accounts/myprivileges"
            element={<MyPrivileges />}
          />

          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />

          <Route path="/userflowpath" element={<UserinFlowpath />} />
          <Route
            path="/contentperformanceresult"
            element={<ContentPerformanceResult />}
          />
          <Route
            path="/mediamanagement"
            element={<MediaManagement />}
          />
          <Route
            path="/recentactivitydetails"
            element={<RecentActivityDetails />}
          />
          <Route
            path="/sendingnotifications"
            element={<SendingNotifications />}
          />
          <Route path="/seosetting" element={<Seosetting />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
