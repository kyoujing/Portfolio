import { useState, useEffect } from "react";

const usePersistentTab = (defaultTab, key = "lastTab") => {
  const [tab, setTab] = useState(
    () => sessionStorage.getItem(key) || defaultTab
  );

  useEffect(() => {
    sessionStorage.setItem(key, tab);
  }, [tab]);

  return [tab, setTab];
};

export default usePersistentTab;
