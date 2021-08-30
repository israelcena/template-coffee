import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

import Styles from '../styles/SocialMedia.module.scss'

import socialMediaLinks from '../data/socialMediaLinks'

export default function SocialMedia() {
  return (
    <ul className={Styles.socialMediaContainer}>
      <li>
        <a
          href={socialMediaLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a
          href={socialMediaLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          href={socialMediaLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </li>
    </ul>
  )
}
