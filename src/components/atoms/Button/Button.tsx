import ButtonStyles from './Button.styles';
import { motion } from 'framer-motion';

interface ComponentProps {
  animate?: boolean;
  children: JSX.Element | string;
  className?: string;
  customStyles?: {
    backgroundColor?: string;
    bold?: boolean;
    fontSize?: number;
    textColor?: string;
    transitionTime?: number;
  };
  onClick: Function;
}

export const Button = ({ animate = true, children, className, customStyles, onClick }: ComponentProps) => {
  const transitionTime = customStyles?.transitionTime ?? 0.8;

  return (
    <motion.div
      className={className}
      transition={{ type: 'spring', duration: transitionTime, bounce: 0.5 }}
      whileHover={animate ? { scale: 1.05 } : {}}
      whileTap={animate ? { scale: 0.95 } : {}}
      onClick={(event) => onClick(event)}
    >
      <ButtonStyles
        backgroundColor={customStyles?.backgroundColor}
        bold={customStyles?.bold}
        fontSize={customStyles?.fontSize}
        textColor={customStyles?.textColor}
        transitionTime={transitionTime - 0.3}
      >
        {typeof children === 'string' ? <span>{children}</span> : children}
      </ButtonStyles>
    </motion.div>
  );
};
