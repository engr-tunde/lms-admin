import { createContext, useContext, useState } from "react";

const SwapContext = createContext();

const SwapProvider = ({ children }) => {
  const [page, setpage] = useState(1);
  const [title, settitle] = useState();
  const [category, setcategory] = useState();
  const [language, setlanguage] = useState();
  const [level, setlevel] = useState();
  const [what_to_teach, setwhat_to_teach] = useState();
  const [description, setdescription] = useState();
  const [to_token, setto_token] = useState(null);
  const [from_token_amount, setfrom_token_amount] = useState(0);
  const [to_token_amount, setto_token_amount] = useState(0);
  const [show_recipient, setshow_recipient] = useState(false);
  const [status, setstatus] = useState(4);
  const [errors, seterrors] = useState({});

  return (
    <SwapContext.Provider
      value={{
        page,
        setpage,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
};

export const useSwapContext = () => useContext(SwapContext);

export default SwapProvider;
