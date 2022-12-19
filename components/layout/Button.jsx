import { cva } from 'class-variance-authority';

const button = cva('text-white py-4 mt-7', {
  variants: {
    variant: {
      primary: 'bg-[#14519A]',
    },
    size: {
      sm: ' w-[120px] text-center',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const Button = ({ children, variant, size }) => {
  return <div className={button({ variant, size })}>{children}</div>;
};

export default Button;