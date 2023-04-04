import HeaderGeneric from "../../generic-components/HeaderGeneric/HeaderGeneric"
import styles from "./Header.module.css"
const Header = (props) => {

  let data = {
    "logo": {
      "image": {
        "url": "/static/images/logomd.png",
        "alt": ""
      },
      "caption": "Logo caption",
      "link": "#",
      "position": "1x1",  
      "preset": ""
    },
    "ctaRepeater": [
      {
        "ctaLink": "https://www.google.com",
        "ctaCaption": "Login",
        "position": "1x3",
        "preset": "",
        "iconName": "faArrowRight",
        "iconUrl": "",
        "alignment": "vertical"
      }
    ],
    "menuRepeater": [
      {
        "position": "1x2",
        "preset": "",
        "menu": [
          {
            "title": "Home",
            "link": "#",
            "iconName": "",
            // "iconUrl": "/static/images/twitter.png",
            "submenu": [
              {
                "title": "submenu 1",
                "link": "#",
                // "iconName": "faFacebook",
                "submenu": [
                  {
                    "title": "submenu2 1",
                    "link": "#",
                  },
                  {
                    "title": "submenu2 2",
                    "link": "#"
                  },
                  {
                    "title": "submenu2 3",
                    "link": "#"
                  },
                  {
                    "title": "submenu2 4",
                    "link": "#"
                  },
                  {
                    "title": "submenu2 5",
                    "link": "#"
                  },
                  {
                    "title": "submenu2 6",
                    "link": "#"
                  },
                ]
              },
              {
                "title": "submenu 2",
                "link": "#",
                "submenu": [
                  {
                    "title": "submenu",
                    "link": "#",
                  },
                  {
                    "title": "submenu",
                    "link": "#"
                  },
                  {
                    "title": "submenu",
                    "link": "#"
                  },
                  {
                    "title": "submenu",
                    "link": "#"
                  },
                  {
                    "title": "submenu",
                    "link": "#"
                  },
                  {
                    "title": "submenu",
                    "link": "#"
                  },
                ]
              },
              {
                "title": "submenu 3",
                "link": "#"
              },
              {
                "title": "submenu 4",
                "link": "#"
              },
              {
                "title": "submenu 5",
                "link": "#"
              },
              {
                "title": "submenu 6",
                "link": "#"
              },
            ]
          },
          {
            "title": "About",
            "link": "#",
            "submenu": [
              {
                "title": "submenu 1",
                "link": "#"
              },
              {
                "title": "submenu 2",
                "link": "#"
              },
              {
                "title": "submenu 3",
                "link": "#"
              },
              {
                "title": "submenu 4",
                "link": "#"
              },
              {
                "title": "submenu 5",
                "link": "#"
              },
              {
                "title": "submenu 6",
                "link": "#"
              },
            ]
          },
          {
            "title": "Contact",
            "link": "#",
            "submenu": [
              {
                "title": "submenu 1",
                "link": "#"
              },
              {
                "title": "submenu 2",
                "link": "#"
              },
              {
                "title": "submenu 3",
                "link": "#"
              },
              {
                "title": "submenu 4",
                "link": "#"
              },
              {
                "title": "submenu 5",
                "link": "#"
              },
              {
                "title": "submenu 6",
                "link": "#"
              },
            ]
          },
          {
            "title": "Register",
            "link": "#",
            "submenu": [
              {
                "title": "submenu 1",
                "link": "#"
              },
              {
                "title": "submenu 2",
                "link": "#"
              },
              {
                "title": "submenu 3",
                "link": "#"
              },
              {
                "title": "submenu 4",
                "link": "#"
              },
              {
                "title": "submenu 5",
                "link": "#"
              },
              {
                "title": "submenu 6",
                "link": "#"
              },
            ]
          },
        ],
      },
      {
        "position": "1x3",
        "preset": "",
        "menu": [
          {
            "title": "",
            "link": "#",
            "iconName": "faSlack",
            "iconUrl": "",
          },
          {
            "title": "",
            "link": "#",
            "iconName": "",
            "iconUrl": "/static/images/twitter.png",
          },
          {
            "title": "",
            "link": "#",
            "iconName": "faGithub",
            "iconUrl": "",
          },
        ],
      }
    ],
    "menuDialog": {
      "toggleButtonposition": "1x3",
      "maximumScreenWidth": 1279, // 639 / 767 / 1023 / 1279
      "backgroundColor": "#ffffff",
      "enableFullScreen": true,
      "closedMenuIcon": {
        "iconName": "", //fontawesome
        "iconUrl": "", //img
      },
      "openMenuIcon": {
        "iconName": "faX",
        "iconUrl": "",
      },
    },
    "backgroundColor": "#ffffff",
    "componentName": "Header",
    "enableStickyHeader": true,
    "enableTransparentHeader": true
  }

  return (
    <div className={`contents ${styles.header}`}>
      <HeaderGeneric {...data} direction={props.direction} />
    </div>
  )
}

export default Header