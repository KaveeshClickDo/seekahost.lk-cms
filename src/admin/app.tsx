import AuthLogo from "./extensions/auth-logo.png";
import MenuLogo from "./extensions/menu-logo.png";

export default {
  config: {

    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },

    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to SeekaHost',
        'Auth.form.welcome.subtitle': 'Please log in to continue',
        'HomePage.header.subtitle': 'Welcome to SeekaHost administration panel',
        'Auth.form.email.placeholder': 'e.g. kai@seekahost.co.uk',
        'HomePage.head.title': 'Admin',
        'Global.strapi-branding': 'SeekaHost',
        'Settings.profile.form.section.experience.interfaceLanguageHelp': 'Preference changes will apply only to you'
      },
    },

    tutorials: false,
    notifications: {
      releases: false,
      plugins: false,
      marketplace: false,
      community: false,
      security: true
    },
  },
  bootstrap() {
    // Hide the marketplace menu item using CSS
    const hideMarketplace = () => {
      const style = document.createElement('style');
      style.id = 'hide-marketplace-style';
      style.textContent = `
        /* Hide the Marketplace menu item */
        a[href="/admin/marketplace"],
        a[href*="/marketplace"] {
          display: none !important;
        }
 
        /* Hide the Content Type Builder menu item */
        a[href="/admin/plugins/content-type-builder"],
        a[href*="/content-type-builder"] {
          display: none !important;
        }
 
        /* Alternative selectors for different Strapi versions */
        [data-testid="marketplace-link"],
        [data-testid="content-type-builder-link"],
        nav a[href*="marketplace"],
        nav a[href*="content-type-builder"],
        nav li:has(a[href*="marketplace"]),
        nav li:has(a[href*="content-type-builder"]) {
          display: none !important;
        }
 
        /* Hide by text content if needed */
        nav a:contains("Marketplace"),
        nav a:contains("Content-Type Builder"),
        nav a:contains("Content Type Builder") {
          display: none !important;
        }
      `;

      // Remove existing style if present
      const existingStyle = document.getElementById('hide-marketplace-style');
      if (existingStyle) {
        existingStyle.remove();
      }

      document.head.appendChild(style);
    };

    // Apply immediately and also after DOM changes
    hideMarketplace();

    // Use MutationObserver to handle dynamic content loading
    const observer = new MutationObserver(() => {
      hideMarketplace();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
};
