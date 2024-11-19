

import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { Button, Menu, MenuItem, Typography } from "@mui/material";

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = "googtrans";

// We should know a predefined nickname of a language and provide its title (the name for displaying)
interface LanguageDescriptor {
  name: string;
  title: string;
}

// The following definition describes typings for JS-based declarations in public/assets/scripts/lang-config.js
declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Menu anchor element
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controls dropdown visibility

  // When the component has initialized, we must activate the translation engine the following way.
  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    if (languageValue) {
      setCurrentLanguage(languageValue);
    }

    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  // The following function switches the current language
  const switchLanguage = (lang: string) => {
    setCookie(null, COOKIE_NAME, "/auto/" + lang);
    window.location.reload();
  };

  // Open or close the dropdown menu
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsDropdownOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsDropdownOpen(false);
  };

  return (
    <div className="text-center notranslate ">
      {/* Dropdown button */}
      <Button
        onClick={handleClick}
        variant="contained"
        className="bg-red-600 px-3 py-1 text-sm rounded-md text-white"
        sx={{ textTransform: 'none', fontWeight: 'bold', padding: '8px 16px', borderRadius: '20px', backgroundColor: 'rgb(209 92 92)' }}
      >
        {languageConfig.languages.find((ld: LanguageDescriptor) => ld.name === currentLanguage)?.title || "Select Language"}
      </Button>

      {/* Menu for dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={isDropdownOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {languageConfig.languages.map((ld: LanguageDescriptor) => (
          <MenuItem
            key={`l_s_${ld.name}`}
            onClick={() => {
              switchLanguage(ld.name);
              handleClose();
            }}
            selected={currentLanguage === ld.name || (currentLanguage === "auto" && languageConfig.defaultLanguage === ld.name)}
          >
            <Typography>{ld.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
