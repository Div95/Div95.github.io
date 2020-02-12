import React from 'react';
import useSocialLinks from '../hooks/useSocialLinks';

const Social = () => {
  const socialLinks = useSocialLinks();

  return (
    <div className="buttons">
      {socialLinks.map(link => (
        <a title={link.title} href={link.href} className="button is-primary is-outlined">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Social;
