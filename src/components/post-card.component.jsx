import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const PostCard = styled(Link)`
  color: var(--text);
  text-decoration: none;
  display: block;
  margin-top: 2rem;
  background: #f3eee4;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;

  .title {
    font-size: 2rem;
  }

  .date {
    background-color: #726c68;
    color: oldLace;
    border-radius: 999px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    display: inline-block;
  }

  .excerpt {
    font-size: 1.6rem;
  }

  .ttr {
    font-size: 1.4rem;
    color: #ae4900;
  }
`;
