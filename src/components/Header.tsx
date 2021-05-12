import React from 'react';

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { user } = useAuth();
  return (
    <div style={{
      height: 64, background: '#DDD', display: 'flex', alignItems: 'center', padding: 8,
    }}
    >
      {title}
    </div>
  );
};

export default Header;
