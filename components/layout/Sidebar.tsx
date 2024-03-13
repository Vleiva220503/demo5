import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface SidebarProps {
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, onSelectOption }) => {
  const menuOptions = ['Dashboard', 'Legal', 'Clientes', 'Clausulas'];

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {menuOptions.map((option) => (
          <ListItem
            key={option}
            selected={selectedOption === option}
            onClick={() => onSelectOption(option)}
          >
            <ListItemText primary={option} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
