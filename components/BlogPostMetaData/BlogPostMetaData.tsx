import Typography from '@components/Typography';
import styled from '@emotion/styled';
import { formatDate } from '@utils/time';

type Props = {
  date: Date;
  timeToRead: string;
  isAligned?: boolean;
};

const BlogPostMetaData: React.FC<Props> = ({ date, timeToRead, isAligned }) => {
  return (
    <MetaDataText isAligned={isAligned}>{`${formatDate(
      date
    )} · ${timeToRead}`}</MetaDataText>
  );
};

const MetaDataText = styled(Typography.c2)<{ isAligned?: boolean }>`
  margin: 0;
  margin-left: ${(p) => (p.isAligned ? '4px' : '0')};
  margin-top: 8px;
  color: ${(p) => p.theme.colors.secondary};
`;

export default BlogPostMetaData;
