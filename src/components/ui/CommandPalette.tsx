import { useState } from 'react';
import CommandPalette, { filterItems, getItemIndex, useHandleOpenCommandPalette } from 'react-cmdk';

export const CommandPaletteImpl = () => {
  const [page, setPage] = useState<'root' | 'projects'>('root');
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  useHandleOpenCommandPalette(setOpen);

  const filteredItems = filterItems(
    [
      {
        heading: 'Home',
        id: 'home',
        items: [
          {
            id: 'Dashboard',
            children: 'Dashboard',
            icon: 'HomeIcon',
            href: '#',
          },
          {
            id: 'settings',
            children: 'Settings',
            icon: 'CogIcon',
            href: '#',
          },
        ],
      },
      {
        heading: 'Other',
        id: 'advanced',
        items: [
          {
            id: 'log-out',
            children: 'Log out',
            icon: 'LockOpenIcon',
            onClick: () => {
              alert('Logging out...');
            },
          },
        ],
      },
    ],
    search
  );

  return (
    <CommandPalette onChangeSearch={setSearch} onChangeOpen={setOpen} search={search} isOpen={open} page={page}>
      <CommandPalette.Page id='root'>
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem key={id} index={getItemIndex(filteredItems, id)} {...rest} />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>
    </CommandPalette>
  );
};
