import { Outlet } from "react-router-dom";
import { IntlProvider } from "react-intl";

import useLanguage from "../hooks/useLanguage";

import NavigationMenu from "../components/shared/navigation/NavigationMenu";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  const { messages, locale } = useLanguage();

  return (
    <IntlProvider locale={locale} messages={messages}>
      <main style={{ width: "100vw" }}>
        {/* Navigation */}
        <NavigationMenu />
        {/* Content */}
        <Outlet />
        {/*Footer */}
        <Footer />
      </main>
    </IntlProvider>
  );
};

export default MainLayout;
