import HeaderGeneric from "../../generic-components/HeaderGeneric/HeaderGeneric"
import styles from './Header_rvr.module.css'
const Header = (props) => {

  let data = {
    "logo": {
      "image": {
        "url": "./static/images/RVR-secondary.png",
        "alt": ""
      },
      transparentHeaderImage: {
        "url": "/static/images/RVR-sticky.png",
        "alt": ""
      },
      "link": "rivers-roads",
      "position": "1x1",
      "preset": "HeaderLogo"
    },
    "menuRepeater": [
      {
        "position": "1x3",
        "preset": "HeaderMenu",
        "menu": [
          {
            "title": "Solutions",
            "link": "#",
            "iconName": "",
            // "iconUrl": "/static/images/twitter.png",
            "submenu": [
              {
                "title": "submenu 1",
                "link": "#",
              },
              {
                "title": "submenu 2",
                "link": "#",
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
            "title": "Our Process",
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
            "title": "Organizational Development",
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
          },
        ],
      },
    ],
    "menuDialog": {
      "toggleButtonposition": "1x3",
      "maximumScreenWidth": 1023, // 639 / 767 / 1023 / 1279
      "backgroundColor": "#081f41",
      "enableTransparentHeader": true,
      "enableFullScreen": true,
      "enableStickyHeader": false,
      "closedMenuIcon": {
        "iconName": "faBars", //fontawesome
        "iconUrl": "", //img
      },
      "openMenuIcon": {
        "iconName": "faBars",
        "iconUrl": "",
      },
    },
    "enableHalfWidth": true,
    "backgroundColor": "rgba(255, 255, 255, 0.1)",
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