import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {

  basicspawner: [
    'basicspawner/index',
    {
      type: 'doc',
      label: 'Setup',
      id: 'basicspawner/setup',
    },
    {
      type: 'doc',
      label: 'Configuration',
      id: 'basicspawner/configuration',
    },
  ],
  prospawner: [
    'prospawner/index',
    {
      type: 'doc',
      label: 'Setup',
      id: 'prospawner/setup',
    },
    {
      type: 'doc',
      label: 'Configuration',
      id: 'prospawner/configuration',
    },
    {
      type: 'doc',
      label: 'Admin Setup',
      id: 'prospawner/admin-setup',
    },
    {
      type: 'doc',
      label: 'Advanced Spawning',
      id: 'prospawner/advanced-spawning',
    },
    {
      type: 'doc',
      label: 'Discord Webhook',
      id: 'prospawner/webhook',
    },
  ],
  advancedspawner: [
    'advancedspawner/index',
    {
      type: 'doc',
      label: 'Setup',
      id: 'advancedspawner/setup',
    },
    {
      type: 'doc',
      label: 'Configuration',
      id: 'advancedspawner/configuration',
    },
    {
      type: 'doc',
      label: 'Admin Setup',
      id: 'advancedspawner/admin-setup',
    },
    {
      type: 'doc',
      label: 'Advanced Spawning',
      id: 'advancedspawner/advanced-spawning',
    },
    {
      type: 'doc',
      label: 'Discord Webhook',
      id: 'advancedspawner/webhook',
    },
    {
      type: 'doc',
      label: 'Cosmetics Setup',
      id: 'advancedspawner/cosmetics-setup',
    },
  ],
  autospec: [
    'autospec/introduction',
    {
      type: 'category',
      label: 'Specifications',
      items : [
        'autospec/specifications',
      ],
    },
  ],
  routesystem: [
    'routesystem/introduction',
    {
      type: 'category',
      label: 'Details',
      items : [
        'routesystem/details',
      ],
    },
  ],
};

export default sidebars;
