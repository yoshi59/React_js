import React from 'react'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <socialMedia>
          <socialmediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <socialIcons>
              <socialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener">
                <FaFacebook />
              </socialIconLink>
              <socialIconLink href="/" target="_blank" aria-label="Youtube"  rel="noopener">
                <FaFacebook />
              </socialIconLink>
              <socialIconLink href="/" target="_blank" aria-label="Facebook"  rel="noopener">
                <FaFacebook />
              </socialIconLink>
              <socialIconLink href="/" target="_blank" aria-label="Facebook"  rel="noopener">
                <FaFacebook />
              </socialIconLink>
            </socialIcons>
          </socialmediaWrap>
        </socialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
