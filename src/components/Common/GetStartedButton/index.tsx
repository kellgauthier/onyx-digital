import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="mailto:holler@onyx-rocks.com"
    >
      Ready to work with us?
    </LinkTo>
  );
};

export default GetStartedButton;
