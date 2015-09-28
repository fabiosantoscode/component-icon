import React from 'react';
import Icon from './';
import Tabs from 'react-simpletabs';

import { dirname } from 'path';

const base = typeof window === 'object' ? window.location.pathname : '';
let pathPrefix;

if (base === '/') {
  pathPrefix = '';
} else if (/\/$/.test(base)) {
  pathPrefix = base;
} else if (base) {
  pathPrefix = dirname(base);
} else {
  pathPrefix = '';
}

const svgUri = pathPrefix + '/assets/icons.svg';

export default (
  <Tabs className="library--example-tabs">
    <Tabs.Panel title="Default version">
      {Icon.options.icon.map((iconType) => {
        const key = `default--${iconType}`;
        return <Icon icon={iconType} uri={svgUri} key={key} />;
      })}
    </Tabs.Panel>
    <Tabs.Panel title="Rounded">
      {Icon.options.icon.map((iconType) => {
        const key = `rounded--${iconType}`;
        return (
            <Icon icon={iconType} uri={svgUri} className="rounded" color="white"
              background="black" key={key}
            />);
      })
      }
    </Tabs.Panel>
    <Tabs.Panel title="Icons in a background-image">
      {Icon.options.icon.map((iconType) => {
        const className = `icon icon--${iconType}`;
        return (
            <span className={className} key={className}>
              Text for a11y and SEO purposes.
            </span>);
      })}
    </Tabs.Panel>

    <Tabs.Panel title="Icons in a background-image (london color)" style={{ background: '#333' }}>
      {Icon.options.icon.map((iconType) => {
        const className = `icon icon--${iconType}-london`;
        return (
            <span className={className} key={className}>
              Text for a11y and SEO purposes.
            </span>);
      })}
    </Tabs.Panel>
  </Tabs>
);
