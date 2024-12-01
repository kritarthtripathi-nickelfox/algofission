/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';
import Logoicon from '../assets/images/logo192.png';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logoicon} alt="logo" className="w-9 h-9  mr-2" style={{ borderRadius: "6px" }} />
        <p className="text-theme-blue text-4xl">
          Tenon
          <span className="text-theme-purple">Ten</span>
        </p>
      </div>
    </Button>
  );
}
