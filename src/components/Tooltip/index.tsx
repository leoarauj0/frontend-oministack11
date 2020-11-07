import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string; // passada automaticamente... serve apra que possamos usar o tooltip no styledcomponents passando um className para no JS ser identificado como class
}

const Tooltip: React.FC<TooltipProps> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
