import { Users, Database, GitBranch, Server, Grid3x3 } from 'lucide-react';
import Subbranch from '../components/Subbranch';
import MainBranch from '../components/MainBranch';

export const TreeData = {
    id: 'user',
    label: 'User',
    range: '301-310',
    objectCount: '8,857 Objects',
    email: 'hova.davis@steerwise.com',
    additionalIcons: [Database, MainBranch],
    children: [
      {
        id: 'user-1',
        label: 'User/john.doe@steerwise.com',
        additionalIcons: [MainBranch],
      },
      {
        id: 'user-2',
        label: 'User/alendra.smith@innovatech.com',
        additionalIcons: [MainBranch],
      },
      {
        id: 'user-3',
        label: 'User/sophia.wilson@techworld.com',
        additionalIcons: [MainBranch],
      },
      {
        id: 'user-4',
        label: 'User/nova.davis@steerwise.com',
        additionalIcons: [MainBranch],
      },
      {
        id: 'business-domain',
        label: 'Business Domain',
        objectCount: '8,857 Objects',
        additionalIcons: [Database, Server],
        children: [
          {
            id: 'organization',
            label: 'Organization',
            range: '301-310',
            objectCount: '8,857 Objects',
            additionalIcons: [Database, Users, Server],
            children: [
              { 
                id: 'org-1', 
                label: 'Organization/techworld.com',
                additionalIcons: [MainBranch],
              },
              { 
                id: 'org-2', 
                label: 'Organization/innovatech.com',
                additionalIcons: [MainBranch],
              },
              { 
                id: 'org-3', 
                label: 'Organization/techguru.com',
                additionalIcons: [MainBranch],
              },
              { 
                id: 'org-4', 
                label: 'Organization/steerwise.com',
                additionalIcons: [MainBranch],
              },
            ]
          },
          { 
            id: 'position', 
            label: 'Position',
            objectCount: '8,857 Objects',
            additionalIcons: [Database, Server],
          },
          { 
            id: 'partner', 
            label: 'Partner Organization',
            objectCount: '8,857 Objects',
            additionalIcons: [Database, Server],
          },
        ]
      },
      {
        id: 'location',
        label: 'Location',
        objectCount: '8,857 Objects',
        additionalIcons: [Database, Grid3x3],
        children: [
          { 
            id: 'user-loc-1', 
            label: 'User/charlie.martin@nextgeninnovations.com',
            additionalIcons: [MainBranch],
          },
          { 
            id: 'user-loc-2', 
            label: 'User/sophia.brown@steerwise.com',
            additionalIcons: [MainBranch],
          },
          { 
            id: 'user-loc-3', 
            label: 'User/ava.jones@techworld.com',
            additionalIcons: [MainBranch],
          },
          { 
            id: 'user-loc-4', 
            label: 'User/sophia.wilson@innovatech.com',
            additionalIcons: [MainBranch],
          },
          { 
            id: 'user-loc-5', 
            label: 'User/noah.moore@techworld.com',
            additionalIcons: [MainBranch],
          },
          { 
            id: 'user-loc-6', 
            label: 'User/olivia.martinez@techworld.com',
            additionalIcons: [MainBranch],
          },
          { 
            id: 'user-loc-7', 
            label: 'User/patrick.doe@steerwise.com',
            additionalIcons: [MainBranch],
          },
        ]
      }
    ]
  };